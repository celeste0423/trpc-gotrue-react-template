import type { inferAsyncReturnType } from '@trpc/server'
import type { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify'
import type { CreateWSSContextFnOptions } from '@trpc/server/adapters/ws'

import { GoTrueClient } from '@supabase/gotrue-js'
import jwt from 'jsonwebtoken'

import { createUserAuthClient } from './auth'
import { MBDataSource } from './datasource'

//payload: 토큰에 포함된 실제 정보
type JWTPayload = {
	aud: string
	exp: number
	sub: string
	email: string
	phone: string
	app_metadata: any // TODO: define
	user_metadata: any // TODO: define
	role: string
	aal: string
	amr: {
		method: string
		timestamp: number
	}[]
	session_id: string
	accessToken: string
}

const createContext = async (
	options: CreateFastifyContextOptions | CreateWSSContextFnOptions,
) => {
	//datasource => env 타입
	const datasource = MBDataSource
	if (!datasource.isInitialized) {
		//datasource 초기화 진행
		await datasource.initialize()
	}

	//HTTP 헤더에서 jwt토큰을 추출
	const authorization = options.req.headers.authorization
	const accessToken = authorization?.match(/Bearer (.+)/)?.[1]
	try {
		//추출한 토큰 검증
		if (!accessToken) {
			//토큰 없음
			throw new Error('token does not exist')
		}
		//토큰 타입 변환
		const token: JWTPayload = jwt.verify(
			accessToken,
			process.env.GOTRUE_JWT_SECRET!,
		) as JWTPayload

		if (token.role === 'revenuecat_admin') {
			return {
				datasource,
				// @ts-ignore
				userAuthClient: null as GoTrueClient,

				jwt: { ...token, accessToken },
			}
		} else {
			const userAuthClient = createUserAuthClient(accessToken)

			return {
				datasource,
				userAuthClient,
				jwt: token,
			}
		}
	} catch (error) {
		return {
			datasource,
		}
	}
}

//createContext의 반환 타입을 받아서 Context로 타입을 정의
//async함수는 보통 promise를 반환하므로 그 내부에 포함된 실제 타입을 추론할 때 사용
export type Context = inferAsyncReturnType<typeof createContext>

export default createContext
