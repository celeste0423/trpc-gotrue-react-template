import { z } from 'zod'

import { publicProcedure, router } from '@/trpc'

const keyPhraseRoute = router({
	testRoute: publicProcedure
		.input(z.undefined())
		.query(async ({ ctx: { datasource, jwt } }) => {
			return 'test route'
		}),
})

export default keyPhraseRoute
