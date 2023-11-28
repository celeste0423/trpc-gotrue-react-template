import 'dotenv/config'
import 'reflect-metadata'

import { fastifyServer } from '@/server'

const PORT = Number(process.env.PORT ?? 3030)

//익명의 즉시 실행함수를 종료
;(async () => {
	try {
		//server.listen으로 fastify서버 시작(포트는 env에서 가져옴)
		const address = await fastifyServer.listen({
			port: PORT,
			host: '0.0.0.0',
		})

		await fastifyServer.ready()
		console.log(`🚀 Server Listening on: ${address}`)
		console.log(`서버 실행`)
	} catch (err) {
		console.error(err)
		process.exit(1)
	}
})()
