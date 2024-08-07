import { GiphyFetch } from '@giphy/js-fetch-api';
import type { PageServerLoad } from './$types';

const gf = new GiphyFetch('NDSExvwFov9gTRECd0bsYAUcVKcy7q2J');

export const load: PageServerLoad = async () => {
	const gif = await gf.search('constructing', {
		offset: Math.floor(Math.random() * 10),
		limit: 1
	});

	return {
		gif: gif.data[0]
	};
};
