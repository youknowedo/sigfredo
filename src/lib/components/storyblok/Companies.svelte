<script lang="ts">
	import { lang } from '$lib/stores';
	import type { SbBlokData } from '@storyblok/svelte';
	import { storyblokEditable } from '@storyblok/svelte';
	import Name from '../Name.svelte';
	import Sidebar from '../Sidebar.svelte';

	export let blok: SbBlokData;
</script>

{#key blok}
	<div use:storyblokEditable={blok} class="-mt-16 flex h-96 flex-col justify-end overflow-hidden">
		<div class="relative flex h-80 items-center justify-center">
			<div class="pointer-events-none absolute right-1/2 z-40 w-[1536px] translate-x-1/2">
				<img
					src="/assets/ripsection1.webp"
					alt="background"
					class="h-80 w-[1536px] bg-cover drop-shadow-md"
				/>
			</div>

			<div class="absolute top-0 flex w-[1536px] justify-around">
				<img class="mt-16 h-4 opacity-80" src="/assets/tech/cs.webp" alt="cs" />
				<img class="mt-9 h-6 -rotate-6 opacity-80" src="/assets/tech/go.webp" alt="go" />
				<img class="mt-16 h-6 rotate-12 opacity-80" src="/assets/tech/js.webp" alt="js" />
				<img class="mt-8 h-6 opacity-80" src="/assets/tech/react.webp" alt="react" />
				<img class="-mt-3 h-6 -rotate-12 opacity-80" src="/assets/tech/rs.webp" alt="rs" />
				<img class="h-6 opacity-80" src="/assets/tech/svelte.webp" alt="svelte" />
				<img class="mt-1 h-4 opacity-80" src="/assets/tech/cpp.webp" alt="cpp" />
				<img class="mt-4 h-6 rotate-[20deg] opacity-80" src="/assets/tech/rn.webp" alt="rn" />
				<img class="mt-5 h-8 rotate-6 opacity-80" src="/assets/tech/ts.webp" alt="ts" />
			</div>

			<div class="z-50 opacity-80">
				<div class="relative mx-8">
					<a
						href="https://shinner.app"
						target="_blank"
						class="absolute -left-2 block h-full w-52 opacity-0"
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
						class="absolute -right-4 block h-full w-60 opacity-0"
					>
						VOLVO
					</a>

					<img
						class="pointer-events-none h-32 object-contain"
						src="/assets/companies.webp"
						alt=""
					/>
				</div>
			</div>
		</div>
	</div>
{/key}
