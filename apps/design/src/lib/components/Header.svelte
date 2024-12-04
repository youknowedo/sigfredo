<script lang="ts">
	import { doLoadAnim } from '$lib/stores';
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	export let heading: string;
	export let subheading: string;

	let innerWidth: number;
	let scroll = 0;

	onMount(() => {
		gsap.to('body', {
			overflow: 'hidden'
		});

		gsap.to('#logoAnim>span', {
			display: 'block',
			duration: $doLoadAnim ? 2 : 0,
			stagger: $doLoadAnim ? 0.15 : 0
		});

		gsap.to('#logoAnim', {
			rotation: -7.77,
			duration: $doLoadAnim ? 1 : 0,
			delay: $doLoadAnim ? 2.5 : 0
		});

		gsap.to('header', {
			opacity: '100%',
			delay: $doLoadAnim ? 3 : 0,
			duration: $doLoadAnim ? 1 : 0,
			ease: 'inOut'
		});

		gsap.to('main', {
			'--offset': '24rem',
			flex: 1,
			display: 'block',
			duration: $doLoadAnim ? 2 : 0,
			delay: $doLoadAnim ? 4 : 0,
			ease: 'inOut'
		});

		gsap.to('#logoAnim', {
			display: 'none',
			delay: $doLoadAnim ? 5 : 0
		});

		gsap.to('body', {
			overflow: 'auto',
			delay: $doLoadAnim ? 7 : 0,
			onComplete: () => {
				doLoadAnim.set(false);
			}
		});
	});
</script>

<svelte:window bind:innerWidth />

<div class="pointer-events-none fixed inset-0 flex items-center justify-center">
	<span class="flex font-shrikhand text-7xl text-sd-yellow" id="logoAnim">
		{#each 'Sigfredo' as l}<span class="hidden">{l}</span>{/each}
	</span>
</div>

<div class="flex h-screen flex-col justify-between">
	<header class="container flex h-32 items-center justify-between py-8 opacity-0">
		<a href="/" class="font-shrikhand text-3xl text-sd-yellow">Sigfredo</a>

		<nav class="text-lg font-bold uppercase text-white">
			<a href="/projects">
				Projects

				<span class="hover"></span>
			</a>
		</nav>
	</header>

	<main
		on:scroll={(e) => {
			scroll = e.currentTarget.scrollTop;
		}}
		class="relative m-4 mt-0 hidden h-0 overflow-y-scroll rounded-2xl bg-white"
	>
		<div
			id="hero"
			class="relative flex h-96 items-center justify-center overflow-hidden bg-sd-yellow text-center"
		>
			<div
				id="names"
				class="pointer-events-none absolute -top-16 flex h-full w-full -rotate-6 flex-col items-center"
			>
				{#key innerWidth}
					{#if innerWidth}
						{#each Array(8).keys() as row}
							<div
								class="whitespace-nowrap font-shrikhand text-7xl text-sd-orange"
								style="{row % 2 ? 'margin-left' : 'margin-right'}: calc(25% - {scroll +
									row * 64}px + var(--offset));"
							>
								{#each Array(Math.ceil(innerWidth / 1000) + 2) as _}
									<span>sigfrid wade filip mårtensson{' '}</span>
								{/each}
							</div>
						{/each}
					{/if}
				{/key}
			</div>

			<div class="relative z-10">
				<p class="font-shrikhand text-7xl">{heading}</p>
				<h1 class="text-lg font-bold">{subheading}</h1>
			</div>
		</div>

		<div class="bg-black">
			{#if innerWidth}
				<div class="flex justify-start whitespace-nowrap py-4 font-shrikhand text-5xl text-white">
					{#each Array(Math.ceil(innerWidth / 1000) * 3) as _}
						<span class="item px-2">some really cool text</span>
					{/each}
				</div>
			{/if}
		</div>
	</main>
</div>

<style>
	main {
		scrollbar-width: none; /* Firefox */
	}

	main::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}

	@keyframes slide {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	.item {
		animation: slide 10s linear infinite;
		display: block;
	}

	a:has(.hover) {
		@apply relative;
	}

	a .hover {
		@apply absolute -bottom-2 left-auto right-0 w-0 border-b-4 border-solid border-sd-yellow duration-300;
	}

	a:hover .hover {
		@apply left-0 right-auto w-full;
	}
</style>
