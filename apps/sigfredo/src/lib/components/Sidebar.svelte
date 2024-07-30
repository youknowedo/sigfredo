<script lang="ts">
	export let photo = true;
</script>

<div class="flex flex-col gap-6">
	{#if photo}
		<div class="mb-2 flex items-center justify-center">
			<img class="-mb-4 w-4/5 rounded-full" src="/cv/sea.jpg" alt="Filip Mårtensson" />
		</div>
	{/if}
	<div class="flex flex-col items-center">
		<h1 class="w-fit text-[2.2rem] !font-black leading-none">Sigfrid</h1>
		<div class="my-1 flex w-full justify-center bg-black py-1.5 text-white">
			<h3 class="w-fit text-[0.75rem] !font-black leading-none tracking-wider">Wade Filip</h3>
		</div>
		<h2 class="w-fit text-[1.22rem] !font-black leading-none">Mårtensson</h2>
	</div>

	<div class="mt-0.5 h-1 w-20 bg-black" />

	<div class="flex flex-col gap-4 text-sm font-bold leading-tight">
		<p>
			Göteborg, <br />
			Västra Götaland
		</p>

		<div class="flex flex-col gap-2 text-edo">
			<a href="https://www.linkedin.com/in/sigfridwade/">/in/sigfridwade</a>
			<a href="mailto:hello@sigfredo.fun">hello@sigfredo.fun</a>
			<a href="tel:+46703048064">+46 (0)70 304 80 64</a>
		</div>
	</div>
</div>

<style>
	h1,
	h2,
	h3 {
		@apply font-bold uppercase;
	}
</style>
