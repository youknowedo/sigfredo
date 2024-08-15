<script lang="ts">
	import { lang } from '$lib/stores';
	import type { SbBlokData } from '@storyblok/svelte';
	import { storyblokEditable } from '@storyblok/svelte';
	import Name from '../Name.svelte';
	import Sidebar from '../Sidebar.svelte';

	export let blok: SbBlokData;
</script>

{#key blok}
	<div use:storyblokEditable={blok} class="py-20">
		<div class="flex justify-center">
			<img
				src={$lang == 'sv' ? '/assets/projekt.webp' : '/assets/projects.webp'}
				class="mb-20 h-16"
				alt=""
			/>
		</div>

		<div class="relative flex h-[4.1in] justify-center">
			<div class="w-[3.5in]">
				<a
					href="https://chromewebstore.google.com/detail/yaffe/beoeheggmopaddkfhcpjfllbmkmofmgg"
					target="_blank"
					class="absolute top-0 z-50 flex rotate-3 justify-center drop-shadow-md duration-200 hover:-top-4 hover:rotate-0 hover:pb-6 focus:-top-4 focus:rotate-0 focus:pb-6"
				>
					<span class="hidden">Yet Another Fast-Forward Extension</span>
					<div class="flex aspect-[3.5/4.2] h-[4.2in] w-[3.5in] flex-col items-center bg-white">
						<img
							class="mx-auto mt-[0.2in] h-[3.1in] w-[3.1in]"
							src="/assets/projects/yaffe.webp"
							alt=""
						/>
						<div class="my-auto">
							<img class="h-14" src="/assets/projects/yaffe-text.webp" alt="" />
						</div>
					</div>
				</a>
			</div>
			<div class="w-[3.5in]">
				<a
					href="https://github.com/youknowedo/sprigkit/"
					target="_blank"
					class="absolute -top-1 z-50 flex -rotate-2 justify-center drop-shadow-md duration-200 hover:-top-4 hover:rotate-0 hover:pb-6 focus:-top-4 focus:rotate-0 focus:pb-6"
				>
					<span class="hidden">SprigKit</span>
					<div class="flex aspect-[3.5/4.2] h-[4.2in] w-[3.5in] flex-col items-center bg-white">
						<img
							class="mx-auto mt-[0.2in] h-[3.1in] w-[3.1in]"
							src="/assets/projects/sprigkit.webp"
							alt=""
						/>
						<div class="my-auto">
							<img class="h-14" src="/assets/projects/sprigkit-text.webp" alt="" />
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>
{/key}
