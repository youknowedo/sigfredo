<script lang="ts">
	import Name from './Name.svelte';

	export let photo = true;
</script>

<div class="flex flex-col gap-6 w-36">
	{#if photo}
		<div class="flex justify-center">
			<img class="w-4/5 rounded-full aspect-square" src="/cv/sea.jpg" alt="Filip Mårtensson" />
		</div>
	{/if}
	<Name />

	<div class="mt-0.5 h-1 w-20 bg-black" />

	<div class="flex flex-col gap-4 text-sm font-bold leading-tight">
		<p>
			Göteborg, <br />
			Västra Götaland
		</p>

		<div class="flex flex-col gap-2 text-primary">
			<a href="https://www.linkedin.com/in/sigfridwade/">/in/sigfridwade</a>
			<a href="mailto:hello@sigfredo.fun">hello@sigfredo.fun</a>
			<a href="tel:+46703048064">+46 (0)70 304 80 64</a>
		</div>
	</div>
</div>
