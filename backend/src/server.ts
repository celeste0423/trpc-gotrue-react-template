import 'dotenv/config'
import 'reflect-metadata'

import { TRPCError } from '@trpc/server'
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify'

import fastifyCORS from '@fastify/cors'
import fastify from 'fastify'

// import notificationService from '@/integrations/notifications'
import appRouter from './app'
import createContext from './context'

//fastifyServer객체 생성, 허용하는 URL매개변수의 최대 길이 설정
export const fastifyServer = fastify({
	maxParamLength: 5000,
	// logger: true,
})

//cors에서 모든 origin 허용
fastifyServer.register(fastifyCORS, {
	//orign함수는 cors설정하는데 이용됨 : 모든 출처에서의 요청을 허용하도록 설정
	//cors정책을 완화하여 다른 도메인에서의 클라이언트 요청을 허용함
	origin: (origin, callback) => {
		//callback함수 : (에러, 허용여부)를 담아서 보냄
		// if (!origin) return callback(null, true)
		return callback(null, true)
	},
})

fastifyServer.register(fastifyTRPCPlugin, {
	trpcOptions: {
		router: appRouter,
		createContext,
		onError: ({ error }: { error: TRPCError }) => {
			//^?
			console.log(error)
		},
	},
})
