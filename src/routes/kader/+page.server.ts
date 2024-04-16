import { lucia } from '$lib/server/auth';
import { db } from '$lib/server/db';
import { fail, redirect } from '@sveltejs/kit';
import crypto from 'crypto';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) redirect(302, '/kader/login');

	return {
		userId: event.locals.user.id
	};
};

export const actions: Actions = {
	default: async (event) => {
		if (!event.locals.session) {
			return fail(401);
		}
		await lucia.invalidateSession(event.locals.session.id);
		const sessionCookie = lucia.createBlankSessionCookie();
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
		redirect(302, '/kader/login');
	}
};
