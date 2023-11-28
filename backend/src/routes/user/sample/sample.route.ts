import { z } from 'zod'

import { router, userProcedure } from '@/trpc'

const keyPhraseRoute = router({
	sampleRoute: userProcedure
		.input(
			z.object({
				sample: z.string(),
			}),
		)
		.query(async ({ input: { sample }, ctx: { datasource, jwt } }) => {
			if (sample == 'email') {
				return '이메일은 ' + jwt.email
			} else if (sample == 'sub') {
				return '토큰은 ' + jwt.sub
			} else {
				return '입력값이 없습니다'
			}

			// return (
			// 	'Hello World(sample route)' +
			// 	' ' +
			// 	sample +
			// 	' ' +
			// 	jwt.sub +
			// 	'\n' +
			// 	jwt.email +
			// 	'\n' +
			// 	jwt.role
			// )
		}),
})
export default keyPhraseRoute
