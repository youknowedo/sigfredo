import { XATA_API_KEY, XATA_BRANCH } from '$env/static/private';
import { type Model, XataDialect } from '@xata.io/kysely';
import { Kysely } from 'kysely';
import { type DatabaseSchema, getXataClient, XataClient } from './xata';

const xata = new XataClient({
	apiKey: XATA_API_KEY,
	branch: XATA_BRANCH
});

export const db = new Kysely<Model<DatabaseSchema>>({
	dialect: new XataDialect({ xata })
});
