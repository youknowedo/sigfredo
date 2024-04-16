import { db } from '$lib/server/db';
import { error, fail, type RequestHandler } from '@sveltejs/kit';
import crypto from 'crypto';
import { base32 } from 'oslo/encoding';
import { TOTP } from 'totp-generator';

const generateCodeFromUser = async (userId: string) => {
	const hashedId = crypto.createHash('sha256').update(userId).digest('hex');

	// get kader qr secret
	let dbSecret = await db
		.selectFrom('user_secret')
		.select('kader_qr')
		.where('id', '=', hashedId)
		.executeTakeFirst();

	if (!dbSecret || !dbSecret.kader_qr) {
		dbSecret = await db
			.insertInto('user_secret')
			.values({
				id: hashedId,
				kader_qr: base32.encode(crypto.randomBytes(16))
			})
			.returning('kader_qr')
			.executeTakeFirst();

		if (!dbSecret || !dbSecret.kader_qr) throw fail(500);
	}

	const qrSecret = `${dbSecret.kader_qr}`;

	return TOTP.generate(qrSecret, {});
};

export const GET: RequestHandler = async ({ locals }) => {
	if (!locals.user) error(401, 'Unauthorized');

	const totp = await generateCodeFromUser(locals.user.id);

	return new Response(JSON.stringify(totp));
};

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();

	const totp = await generateCodeFromUser(data.userId);

	return new Response(JSON.stringify(totp));
};
