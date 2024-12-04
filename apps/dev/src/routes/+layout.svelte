<script lang="ts">
	import { browser } from '$app/environment';
	import { lang } from '$lib/stores';
	import '@fontsource/lato/400-italic.css';
	import '@fontsource/lato/400.css';
	import '@fontsource/lato/700.css';
	import '@fontsource/lato/900.css';
	import '@fontsource/special-elite';
	import { onMount } from 'svelte';
	import { Layout } from '@sigfredo/ui';
	import '../app.css';

	const getCookieValue = (name: string) => {
		const regex = new RegExp(`(^| )${name}=([^;]+)`);
		const match = document.cookie.match(regex);
		if (match) {
			return match[2];
		}
	};

	onMount(() => {
		const cookieLang = getCookieValue('lang');

		lang.set(
			cookieLang === 'sv' || cookieLang == 'en'
				? cookieLang
				: browser && navigator.language.startsWith('sv')
					? 'sv'
					: 'en'
		);
	});

	lang.subscribe((value) => {
		if (browser) document.cookie = `lang=${value}; max-age=31536000; path=/`;
	});
</script>

<Layout>
	<div class="font-default">
		<slot />
	</div>
</Layout>
