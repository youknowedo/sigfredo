import Hero from '$lib/components/storyblok/Hero.svelte';
import Page from '$lib/components/storyblok/Page.svelte';
import Companies from '$lib/components/storyblok/Companies.svelte';
import Projects from '$lib/components/storyblok/Projects.svelte';
import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data }) => {
	storyblokInit({
		accessToken: 'iU45cJ4Fob6IVUE1qoj4gAtt',
		use: [apiPlugin],
		components: {
			page: Page,
			hero: Hero,
			companies: Companies,
			projects: Projects
		}
	});
	const storyblokApi = await useStoryblokApi();

	return {
		...data,
		storyblokApi: storyblokApi
	};
};
