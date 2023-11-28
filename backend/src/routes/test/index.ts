import { mergeRouters } from '@/trpc'

import testRoute from './sample/test.route'

const userRoutes = mergeRouters(testRoute)

export default userRoutes
