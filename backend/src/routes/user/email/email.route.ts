import { z } from 'zod'

import { router, userProcedure } from '@/trpc'

const emailRoute = router({
	emailRoute: userProcedure
		.input(
			z.object({
				text: z.string(),
			}),
		)
		.query(async ({ input: { text }, ctx: { datasource, jwt } }) => {
			return jwt.email
		}),
})

export default emailRoute
