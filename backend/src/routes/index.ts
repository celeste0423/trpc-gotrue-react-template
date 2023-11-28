//zod: 입력값의 유효성 검사 => 입력값의 형식을 제한함으로써 다른 타입이 들어오지 못하도록 함

import { router } from '@/trpc'

//index.ts는 자동으로 참조되어 import됨
import testRoutes from './test'
import userRoutes from './user'

const routes = router({
	user: userRoutes,
	test: testRoutes,
})

export default routes
