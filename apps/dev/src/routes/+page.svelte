<script lang="ts">
	import { browser } from '$app/environment';
	import { lang } from '$lib/stores';

	if (browser && !$lang) lang.set(navigator.language.startsWith('sv') ? 'sv' : 'en');
</script>

<svelte:head>
	<title>Sigfredo | Dev</title>
</svelte:head>

<div class="flex h-screen w-screen items-center justify-center text-center">Under construction</div>
