//앱의 라우팅 정보 정의
import routes from '@/routes'

const appRouter = routes
//타입과 라우터 export
export default appRouter

export type AppRouter = typeof appRouter
