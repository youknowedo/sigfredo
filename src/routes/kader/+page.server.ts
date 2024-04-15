import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const record = await db
		.selectFrom('user')
		.selectAll()
		.where('id', '=', 'rec_coem21mnih5frtv73o3g')
		.executeTakeFirst();
	console.log(record);
};
