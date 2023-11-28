import { mergeRouters } from '@/trpc'

import emailRoute from './email/email.route'
import sampleRoute from './sample/sample.route'

const userRoutes = mergeRouters(sampleRoute, emailRoute)

export default userRoutes
