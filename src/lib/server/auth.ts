import { dev } from '$app/environment';
import { Lucia, type Adapter, type DatabaseSession, type DatabaseUser, type UserId } from 'lucia';
import { db } from './db';

const xataKyselyAdapter: Adapter = {
	deleteExpiredSessions: async () => {
		db.deleteFrom('session').where('expires_at', '<', new Date()).execute();
	},
	deleteSession: async (sessionId) => {
		db.deleteFrom('session').where('id', '=', sessionId).execute();
	},
	deleteUserSessions: async (userId) => {
		db.deleteFrom('session').where('user_id', '=', userId).execute();
	},
	getSessionAndUser: async (sessionId) => {
		const session = await db
			.selectFrom('session')
			.selectAll()
			.where('id', '=', sessionId)
			.executeTakeFirst();
		if (!session) throw new Error('Session not found');

		const user = await db
			.selectFrom('user')
			.selectAll()
			.where('id', '=', session.id)
			.executeTakeFirst();
		if (!user) throw new Error('User not found');

		const dbSession: DatabaseSession = {
			id: session.id,
			expiresAt: new Date(`${session.expires_at}`),
			userId: user.id,
			attributes: {} // NOT IMPLEMENTED
		};
		const dbUser: DatabaseUser = {
			id: user.id,
			attributes: {
				username: `${user.username}`
			}
		};

		return [dbSession, dbUser];
	},
	getUserSessions: async (userId) => {
		const sessions = await db
			.selectFrom('session')
			.selectAll()
			.where('user_id', '=', userId)
			.execute();
		return sessions.map((session) => {
			return {
				id: session.id,
				expiresAt: new Date(`${session.expires_at}`),
				userId: userId,
				attributes: {} // NOT IMPLEMENTED
			};
		});
	},
	setSession: async (session) => {
		db.insertInto('session')
			.values({
				id: session.id,
				user_id: session.userId,
				expires_at: session.expiresAt
			})
			.execute();
	},
	updateSessionExpiration: async (sessionId, expiresAt) => {
		db.updateTable('session')
			.set('expires_at', expiresAt)
			.where('id', '=', sessionId)
			.executeTakeFirst();
	}
};

export const lucia = new Lucia(xataKyselyAdapter, {
	sessionCookie: {
		attributes: {
			// set to `true` when using HTTPS
			secure: !dev
		}
	},
	getUserAttributes: (attributes) => {
		return {
			// attributes has the type of DatabaseUserAttributes
			username: attributes.username
		};
	}
});

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

interface DatabaseUserAttributes {
	username: string;
}
