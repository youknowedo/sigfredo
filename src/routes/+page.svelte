<script lang="ts">
	import { browser } from '$app/environment';
	import Companies from '$lib/components/home/Companies.svelte';
	import Footer from '$lib/components/home/Footer.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	import Portfolios from '$lib/components/home/Portfolios.svelte';
	import { lang } from '$lib/stores';

	if (browser && !$lang) lang.set(navigator.language.startsWith('sv') ? 'sv' : 'en');
</script>

<svelte:head>
	<title>Sigfredo | Sigfrid Wade Filip Mårtensson</title>
</svelte:head>

<div class="pointer-events-none fixed z-20 h-screen w-screen bg-tex1 opacity-20"></div>

<div class="">
	<Hero />

	<Companies />

	<Portfolios />

	<Footer />
</div>

<style>
	:global(body) {
		@apply bg-black/5;
	}
</style>
