<script lang="ts">
	export let photo: string | null = '/cv/basket.jpg';
</script>

<div class="bg-white block my-[0.25cm] mx-auto relative w-[21cm] h-[29.7cm] font-default">
	<div class="grid grid-cols-[1fr,3fr] h-full p-[2.5cm] gap-16">
		<div class="flex flex-col gap-8">
			{#if photo}
				<img class="-mb-4 rounded-full" src={photo} alt="Filip Mårtensson" />
			{/if}
			<div class="flex flex-col items-center">
				<h1 class="!font-black leading-none w-fit text-[2.2rem]">Sigfrid</h1>
				<div class="bg-black w-full py-1.5 text-white flex justify-center my-1">
					<h3 class="!font-black leading-none w-fit text-[0.75rem] tracking-wider">Wade Filip</h3>
				</div>
				<h2 class="!font-black leading-none w-fit text-[1.22rem]">Mårtensson</h2>
			</div>

			<div class="w-20 h-1 bg-black" />

			<div class="flex flex-col gap-4 text-sm font-bold leading-tight">
				<p>
					Humlegången 11, <br />
					449 33 Nödinge
				</p>

				<div class="flex flex-col gap-2 text-edo">
					<a href="https://www.linkedin.com/in/sigfridwade/">/in/sigfridwade</a>
					<a href="mailto:hello@sigfredo.fun">hello@sigfredo.fun</a>
					<a href="tel:+46703048064">+46 (0)70 304 80 64</a>
				</div>
			</div>
		</div>

		<div class="h-full overflow-hidden">
			<slot />
		</div>
	</div>
</div>

<style>
	h1,
	h2,
	h3 {
		@apply uppercase font-bold;
	}

	@page {
		size: 21cm 29.7cm;
		margin: -0.25cm 0;
	}
</style>
