<script lang="ts">
	import type { SbBlokData } from '@storyblok/svelte';
	import { StoryblokComponent, storyblokEditable } from '@storyblok/svelte';

	export let blok: SbBlokData;
</script>

<div
	use:storyblokEditable={blok}
	class="container mx-auto grid place-items-center gap-16 md:grid-cols-3"
>
	{#if Array.isArray(blok.columns)}
		{#each blok.columns as b}
			<div class="flex-auto px-6">
				<StoryblokComponent blok={b} />
			</div>
		{/each}
	{/if}
</div>
