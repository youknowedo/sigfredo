<script lang="ts">
	import { storyblokEditable, type SbBlokData } from '@storyblok/svelte';

	export let blok: SbBlokData;
</script>

<div use:storyblokEditable={blok} class="w-full rounded-[5px] bg-[#f7f6fd] p-12 text-center">
	<h2 class="text-2xl font-bold text-[#1d243d]">{blok.name}</h2>
</div>
