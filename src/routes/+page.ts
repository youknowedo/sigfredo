import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, data }) => {
	const { storyblokApi } = await parent();

	const dataStory = await storyblokApi.get('cdn/stories/home', {
		version: 'draft'
	});
	const dataStorySwedish = await storyblokApi.get('cdn/stories/home', {
		version: 'draft',
		language: 'sv'
	});

	return {
		...data,
		story: dataStory.data.story,
		storySwedish: dataStorySwedish.data.story
	};
};