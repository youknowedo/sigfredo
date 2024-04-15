import { type Model, XataDialect } from '@xata.io/kysely';
import { Kysely } from 'kysely';
import { type DatabaseSchema, getXataClient, XataClient } from './xata';

const xata = new XataClient({
	apiKey: import.meta.env.VITE_XATA_API_KEY,
	branch: import.meta.env.VITE_XATA_BRANCH
});

export const db = new Kysely<Model<DatabaseSchema>>({
	dialect: new XataDialect({ xata })
});
