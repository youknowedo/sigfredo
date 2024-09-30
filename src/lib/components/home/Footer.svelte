<script lang="ts">
	import { lang } from '$lib/stores';
</script>

<footer class="container py-20">
	<div class="flex justify-center">
		<img src="/assets/sigfredo.webp" class="mb-8 h-20" alt="" />
	</div>

	<div class="relative flex justify-center text-center font-typeWriter">
		Copyright 2024 &copy; Sigfrid Wade Filip "Sigfredo" Mårtensson.
		{#if $lang === 'en'}
			All rights reserved.
		{:else}
			Alla rättigheter förbehållna.
		{/if}
	</div>
</footer>
