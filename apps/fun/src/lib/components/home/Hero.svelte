<script lang="ts">
	import { lang } from '$lib/stores';
	import Name from '../Name.svelte';
	import Sidebar from '../Sidebar.svelte';
</script>

<div
	class="container relative flex min-h-[80vh] flex-col gap-32 pt-20 md:min-h-0 md:flex-row md:items-center md:justify-center md:py-20"
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

	<div class="flex flex-1 flex-col items-center justify-center md:flex-none">
		<div>
			<img class="mb-4 h-20" src="/assets/tjena.webp" alt="Text 'Tjena!'" />
			<div class="max-w-md font-typeWriter md:text-lg lg:max-w-xl">
				{#if $lang === 'en'}
					Currently a high school engineering student at
					<a href="https://gtg.se"> Gothenburg Region's Technical High School </a>
					with a minor in electronics & programming in the production industry. I see myself as a full-stack
					developer who always has something going on. Otherwise, I'm probably skateboarding, listening
					to music or collecting cameras (if my economy allows it).
				{:else}
					Just nu en gymnasieingenjörsstudent på
					<a href="https://gtg.se">Göteborgsregionens Tekniska Gymnasium </a>
					med inriktning i på elektronik & programmering i produktionsindustrin. Ser mig själv som en
					fullstack utvecklare med alltid något på gång. Annars åker jag säkert skateboard, lyssnar på
					musik eller samlar på kameror (om ekonomin tillåter).
				{/if}
			</div>
		</div>
	</div>
</div>
