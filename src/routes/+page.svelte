<script lang="ts">
	import { browser } from '$app/environment';
	import { lang } from '$lib/stores';
	import { Gif } from '@giphy/svelte-components';
	import { StoryblokComponent, useStoryblokBridge } from '@storyblok/svelte';
	import { onMount } from 'svelte';

	export let data;

	if (browser && !$lang) lang.set(navigator.language.startsWith('sv') ? 'sv' : 'en');

	onMount(() => {
		useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
	});
</script>

<svelte:head>
	<title>Sigfredo | Sigfrid Wade Filip Mårtensson</title>
</svelte:head>

<div class="pointer-events-none fixed z-20 h-screen w-screen bg-tex1 opacity-20"></div>

<div class="">
	<StoryblokComponent blok={data.story.content} />

	<div class="my-20 flex justify-center px-8">
		<Gif gif={data.gif} width={400} />
	</div>
</div>

<style>
	:global(body) {
		@apply bg-black/5;
	}
</style>
