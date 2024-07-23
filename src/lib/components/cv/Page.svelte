<script lang="ts">
	export let photo: string | null = '/cv/basket.jpg';
</script>

<div class="relative mx-auto my-[0.25cm] block h-[29.7cm] w-[21cm] bg-white font-default">
	<div class="grid h-full grid-cols-[1fr,3fr] gap-16 p-[2.5cm]">
		<div class="flex flex-col gap-8">
			{#if photo}
				<img class="-mb-4 rounded-full" src={photo} alt="Filip Mårtensson" />
			{/if}
			<div class="flex flex-col items-center">
				<h1 class="w-fit text-[2.2rem] !font-black leading-none">Sigfrid</h1>
				<div class="my-1 flex w-full justify-center bg-black py-1.5 text-white">
					<h3 class="w-fit text-[0.75rem] !font-black leading-none tracking-wider">Wade Filip</h3>
				</div>
				<h2 class="w-fit text-[1.22rem] !font-black leading-none">Mårtensson</h2>
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
		@apply font-bold uppercase;
	}

	@page {
		size: 21cm 29.7cm;
		margin: -0.25cm 0;
	}
</style>
