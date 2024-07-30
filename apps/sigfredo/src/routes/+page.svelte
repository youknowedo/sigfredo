<script lang="ts">
	import Name from '$lib/components/Name.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { Gif } from '@giphy/svelte-components';

	export let data;
</script>

<div class="fixed z-40 w-screen h-screen pointer-events-none bg-tex1 opacity-20"></div>

<div
	class="container relative flex min-h-[70vh] flex-col gap-32 pt-20 md:flex-row md:justify-center md:py-20"
>
	<div class="hidden w-40 my-auto md:block">
		<Sidebar />
	</div>
	<div class="absolute left-0 flex items-center justify-between w-full px-8 md:hidden">
		<div class="flex gap-10">
			<img src="/cv/sea.jpg" class="h-24 rounded-full" alt="" />
			<Name />
		</div>
		<div class="flex flex-col items-end gap-2 font-bold text-left text-primary">
			<a href="https://www.linkedin.com/in/sigfridwade/">/in/sigfridwade</a>
			<a href="mailto:hello@sigfredo.fun">hello@sigfredo.fun</a>
			<a href="tel:+46703048064">+46 (0)70 304 80 64</a>
		</div>
	</div>

	<div class="flex flex-col items-center justify-center flex-1 md:flex-none">
		<div>
			<h3 class="mb-4 text-5xl font-black">Tjena!</h3>
			<p class="max-w-lg">
				Sigge kallas jag och är primärt en frontend-utvecklare med fokus på webb. Jag har även
				erfarenhet av backend-, app-, och spelutveckling genom tidigare jobb och småprojekt. På
				fritiden åker jag skateboard och samlar på gamla kameror.
			</p>
		</div>
	</div>
</div>

<div class="relative flex items-center justify-center overflow-hidden h-80">
	<div class="absolute right-1/2 z-40 w-[1536px] translate-x-1/2">
		<img
			src="/assets/ripsection1.png"
			alt="background"
			class="h-80 w-[1536px] bg-cover drop-shadow-md"
		/>
	</div>

	<div class="z-50 opacity-80">
		<h1 class="font-mono text-4xl font-black">Sida under konstruktion</h1>
	</div>
</div>

<div class="my-20">
	<Gif gif={data.gif} width={400} />
</div>
