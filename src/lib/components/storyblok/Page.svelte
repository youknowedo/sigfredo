<script lang="ts">
	import type { SbBlokData } from '@storyblok/svelte';
	import { StoryblokComponent, storyblokEditable } from '@storyblok/svelte';

	export let blok: SbBlokData;
</script>

{#key blok}
	<div use:storyblokEditable={blok}>
		{#if Array.isArray(blok.body)}
			{#each blok.body as b}
				<StoryblokComponent blok={b} />
			{/each}
		{/if}
	</div>
{/key}
