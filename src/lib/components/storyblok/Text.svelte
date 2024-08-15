<script lang="ts">
	import { storyblokEditable, type SbBlokData } from '@storyblok/svelte';

	export let blok: SbBlokData;
</script>

<p use:storyblokEditable={blok} class="max-w-md font-typeWriter md:text-lg lg:max-w-xl">
	{blok.headline}
</p>
