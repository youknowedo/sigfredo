import Feature from '$lib/components/storyblok/Feature.svelte';
import Grid from '$lib/components/storyblok/Grid.svelte';
import Page from '$lib/components/storyblok/Page.svelte';
import Text from '$lib/components/storyblok/Text.svelte';
import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	storyblokInit({
		accessToken: 'iU45cJ4Fob6IVUE1qoj4gAtt',
		use: [apiPlugin],
		components: {
			feature: Feature,
			grid: Grid,
			page: Page,
			text: Text
		}
	});
	const storyblokApi = await useStoryblokApi();

	return {
		storyblokApi: storyblokApi
	};
};
