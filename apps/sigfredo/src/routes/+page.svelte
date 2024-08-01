<script lang="ts">
	import Name from '$lib/components/Name.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { Gif } from '@giphy/svelte-components';

	export let data;
</script>

<svelte:head>
	<title>Sigfredo | Sigfrid Wade Filip Mårtensson</title>
</svelte:head>

<div class="fixed z-20 w-screen h-screen pointer-events-none bg-tex1 opacity-20"></div>

<div
	class="container relative flex min-h-[80vh] flex-col gap-32 pt-20 md:min-h-0 md:flex-row md:justify-center md:py-20"
>
	<div class="hidden w-40 my-auto md:block">
		<Sidebar />
	</div>
	<div class="absolute left-0 flex items-center justify-between w-full px-8 md:hidden">
		<div class="flex gap-10">
			<div class="relative w-40">
				<img
					class="absolute w-20 translate-x-1/2 -top-10 right-1/2"
					src="/assets/crown.png"
					alt=""
				/>
				<img src="/cv/sea.jpg" class="rounded-full h-28" alt="" />
			</div>
			<Name />
		</div>
		<div class="flex-col items-end hidden gap-2 font-bold text-left text-primary sm:flex">
			<a href="https://www.linkedin.com/in/sigfridwade/">/in/sigfridwade</a>
			<a href="mailto:hello@sigfredo.fun">hello@sigfredo.fun</a>
			<a href="sms:+46703048064">+46 (0)70 304 80 64</a>
		</div>
	</div>

	<div class="flex flex-col items-center justify-center flex-1 -mb-20 md:flex-none">
		<div>
			<h3 class="mb-4 text-5xl font-black">Tjena!</h3>
			<p class="max-w-md lg:max-w-lg">
				Sigge kallas jag och är primärt en fullstack-utvecklare med fokus på webb. Jag har även
				erfarenhet av backend-, app-, och spelutveckling genom tidigare jobb och småprojekt. På
				fritiden åker jag skateboard och samlar på gamla kameror.
			</p>
		</div>
	</div>
</div>

<div class="flex flex-col justify-end -mt-16 overflow-hidden h-96">
	<div class="relative flex items-center justify-center h-80">
		<div class="pointer-events-none absolute right-1/2 z-40 w-[1536px] translate-x-1/2">
			<img
				src="/assets/ripsection1.png"
				alt="background"
				class="h-80 w-[1536px] bg-cover drop-shadow-md"
			/>
		</div>

		<div class="absolute top-0 flex w-[1536px] justify-around">
			<img class="h-4 mt-16 opacity-80" src="/assets/tech/cs.png" alt="cs" />
			<img class="h-6 mt-9 -rotate-6 opacity-80" src="/assets/tech/go.png" alt="go" />
			<img class="h-6 mt-16 rotate-12 opacity-80" src="/assets/tech/js.png" alt="js" />
			<img class="h-6 mt-8 opacity-80" src="/assets/tech/react.png" alt="react" />
			<img class="h-6 -mt-3 -rotate-12 opacity-80" src="/assets/tech/rs.png" alt="rs" />
			<img class="h-6 opacity-80" src="/assets/tech/svelte.png" alt="svelte" />
			<img class="h-4 mt-1 opacity-80" src="/assets/tech/cpp.png" alt="cpp" />
			<img class="mt-4 h-6 rotate-[20deg] opacity-80" src="/assets/tech/rn.png" alt="rn" />
			<img class="h-8 mt-5 rotate-6 opacity-80" src="/assets/tech/ts.png" alt="ts" />
		</div>

		<div class="z-50 opacity-80">
			<div class="relative mx-8">
				<a
					href="https://shinner.app"
					target="_blank"
					class="absolute block h-full opacity-0 -left-2 w-52"
				>
					Shinner
				</a>
				<a
					href="https://ale.se/ungdomsradet"
					target="_blank"
					class="absolute left-[13.25rem] block h-full w-24 opacity-0"
				>
					Ale Ungdomsråd
				</a>
				<a
					href="https://www.svenskalag.se/alebk"
					target="_blank"
					class="absolute left-[19.5rem] block h-full w-24 opacity-0"
				>
					Ale Basket
				</a>
				<a
					href="https://www.volvo.com/"
					target="_blank"
					class="absolute block h-full opacity-0 -right-4 w-60"
				>
					VOLVO
				</a>

				<img class="object-contain h-32 pointer-events-none" src="/assets/companies.png" alt="" />
			</div>
		</div>
	</div>
</div>

<div class="flex justify-center mx-8 my-20">
	<Gif gif={data.gif} width={400} />
</div>
