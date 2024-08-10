<script lang="ts">
	import { browser } from '$app/environment';
	import Name from '$lib/components/Name.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Text from '$lib/components/Text.svelte';
	import { lang } from '$lib/stores';
	import { Gif } from '@giphy/svelte-components';

	export let data;

	if (browser && !$lang) {
		navigator.language.startsWith('sv') ? lang.set('sv') : lang.set('en');
		document.cookie = `lang=${$lang}; max-age=31536000; path=/`;
	}
</script>

<svelte:head>
	<title>Sigfredo | Sigfrid Wade Filip Mårtensson</title>
</svelte:head>

<div class="pointer-events-none fixed z-20 h-screen w-screen bg-tex1 opacity-20"></div>

<div
	class="container relative flex min-h-[80vh] flex-col gap-32 pt-20 md:min-h-0 md:flex-row md:justify-center md:py-20"
>
	<button
		class="absolute right-20 top-12 font-typeWriter text-lg uppercase"
		on:click={() => lang.set($lang == 'sv' ? 'en' : 'sv')}
	>
		{$lang}
	</button>

	<div class="my-auto hidden w-40 md:block">
		<Sidebar />
	</div>
	<div class="absolute left-0 flex w-full items-center justify-between px-8 md:hidden">
		<div class="flex gap-10">
			<div class="relative w-40">
				<img
					class="absolute -top-10 right-1/2 w-20 translate-x-1/2"
					src="/assets/crown.webp"
					alt=""
				/>
				<img src="/cv/sea.webp" class="h-28 rounded-full" alt="" />
			</div>
			<Name />
		</div>
		<div class="hidden flex-col items-end gap-2 text-left sm:flex">
			<a href="https://www.linkedin.com/in/sigfridwade/">/in/sigfridwade</a>
			<a href="mailto:hello@sigfredo.fun">hello@sigfredo.fun</a>
			<a href="sms:+46703048064">+46 (0)70 304 80 64</a>
		</div>
	</div>

	<div class="-mb-20 flex flex-1 flex-col items-center justify-center md:flex-none">
		<div>
			<h3 class="mb-4 text-5xl font-black">Tjena!</h3>
			<p class="max-w-md font-typeWriter md:text-lg lg:max-w-xl">
				<Text>
					<span slot="sv">
						Just nu en gymnasieingenjörsstudent på
						<a href="https://gtg.se">Göteborgsregionens Tekniska Gymnasium</a> med inriktning i på elektronik
						& programmering i produktionsindustrin. Ser mig själv som en fullstack utvecklare med alltid
						något på gång. Annars åker jag säkert skateboard, lyssna på musik eller samla på kameror
						(om ekonomin tillåter).
					</span>

					Currently a high school engineering student at
					<a href="https://gtg.se">Gothenburg Region's Technical High School</a> with a minor in electronics
					& programming in the production industry. I see myself as a full-stack developer who always
					has something going on. Otherwise, I'm probably skateboarding, listening to music or collecting
					cameras (if my economy allows it).
				</Text>
			</p>
		</div>
	</div>
</div>

<div class="-mt-16 flex h-96 flex-col justify-end overflow-hidden">
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

				<img class="pointer-events-none h-32 object-contain" src="/assets/companies.webp" alt="" />
			</div>
		</div>
	</div>
</div>

<div class="py-20">
	<div class="flex justify-center">
		<img
			src={$lang == 'sv' ? '/assets/projekt.webp' : '/assets/projects.webp'}
			class="mb-20 h-16"
			alt=""
		/>
	</div>

	<div class="relative flex h-[4.1in] justify-center">
		<div
			class=" absolute top-0 z-50 flex rotate-3 justify-center drop-shadow-md duration-200 hover:-top-4 hover:rotate-0 hover:pb-6"
		>
			<!-- TODO: Fix jitter when mouse touches bottom part of Polaroid -->
			<a
				href="https://chromewebstore.google.com/detail/yaffe/beoeheggmopaddkfhcpjfllbmkmofmgg"
				target="_blank"
				class="flex aspect-[3.5/4.2] h-[4.2in] w-[3.5in] flex-col items-center bg-white"
			>
				<img
					class="mx-auto mt-[0.2in] h-[3.1in] w-[3.1in]"
					src="/assets/projects/yaffe.webp"
					alt=""
				/>
				<div class="my-auto">
					<img class="h-14" src="/assets/projects/yaffe-text.webp" alt="" />
				</div>
			</a>
		</div>
	</div>
</div>

<div class="my-20 flex justify-center px-8">
	<Gif gif={data.gif} width={400} />
</div>
