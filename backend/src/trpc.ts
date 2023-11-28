import { initTRPC, TRPCError } from '@trpc/server'

import { Context } from './context'

// You can use any variable name you like.
// We use t to keep things simple.
//t로 trpc 컨텍스트 생성, 서버 생성에 필요한 다양한 정보들을 넣을 컨텍스트
//t = 트랜스포머
const t = initTRPC.context<Context>().create()

//라우터, 미들웨어, 프로시저 설정(trpc에서 핵심적으로 사용되는 것들)

//router : 여러가지 관려 procedures를 묶어주는 역할을 함
export const router = t.router
export const mergeRouters = t.mergeRouters
//middleware: 요청과 응답 사이에서 동작하는 소프트웨어 컴포넌트(보안, 로깅, 세션관리, 인증, 이미지 변환)
export const middleware = t.middleware

export const publicProcedure = t.procedure

export const userProcedure = t.procedure.use(
	t.middleware(({ next, ctx }) => {
		//컨텍스트에서 jwt와 userAuthClient받아오기
		const { jwt, userAuthClient } = ctx

		//jwt또는 userAuthClient가 없으면 Unauthorized 에러 송출
		if (!jwt || !userAuthClient) {
			throw new TRPCError({
				code: 'UNAUTHORIZED',
			})
		}
		//next는 다음 미들웨어를 호출하기 위한 함수()
		return next({
			ctx: {
				jwt,
				userAuthClient,
			},
		})
	}),
)
