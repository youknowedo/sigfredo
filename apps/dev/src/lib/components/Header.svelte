<script lang="ts">
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	export let heading: string;
	export let subheading: string;

	export let animate = false;

	let names: HTMLDivElement;
	let innerWidth: number;

	if (animate)
		onMount(() => {
			gsap.to('#logoAnim>span', {
				display: 'block',
				duration: 2,
				stagger: 0.15
			});

			gsap.to('#logoAnim', {
				rotation: -7.77,
				duration: 1,
				delay: 2.5
			});

			gsap.to('nav', {
				opacity: '100%',
				delay: 3,
				duration: 1,
				ease: 'inOut'
			});

			gsap.to('#hero', {
				flex: 1,
				duration: 2,
				delay: 4,
				ease: 'inOut'
			});

			gsap.to('header', {
				borderRadius: '0 0 2rem 2rem',
				duration: 1,
				delay: 4,
				ease: 'inOut'
			});

			gsap.to('#logoAnim', {
				display: 'none',
				delay: 5
			});

			gsap.to('header', {
				height: '35vh',
				duration: 2.5,
				delay: 5,

				ease: 'inOut'
			});

			gsap.to('body', {
				overflow: 'auto',
				delay: 7
			});
		});
</script>

<svelte:window bind:innerWidth />

<header class={animate ? 'animate' : ''}>
	<span class="logo font-shrikhand" id="logoAnim">
		<span> S </span>
		<span> i </span>
		<span> g </span>
		<span> f </span>
		<span> r </span>
		<span> e </span>
		<span> d </span>
		<span> o </span>
	</span>

	<nav>
		<a href="/" class="logo font-shrikhand">Sigfredo</a>

		<div>
			<a href="./projects">
				Projects

				<span class="hover"></span>
			</a>
		</div>
	</nav>
	<div id="hero">
		<div bind:this={names} id="names">
			{#key names && innerWidth}
				{#if names}
					{#each Array(Math.ceil((animate ? window.innerHeight : names.clientHeight) / 64) + 1).keys() as row}
						<div class={row % 2 ? 'left' : 'right'}>
							{#each Array(Math.ceil(innerWidth / 1000) + 2) as _}
								<span class="font-shrikhand">sigfrid wade filip mårtensson{' '}</span>
							{/each}
						</div>
					{/each}
				{/if}
			{/key}
		</div>
		<h1>
			<span>{heading}</span>
		</h1>
		<p>{subheading}</p>
	</div>
</header>

<style>
	:global(body):has(header.animate) {
		overflow: hidden;
	}

	header {
		background-color: black;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		border-radius: 0 0 2rem 2rem;
		overflow: hidden;
		height: 35vh;
		min-height: 400px;
	}
	header.animate {
		height: 100vh;
		border-radius: 0;
	}

	#logoAnim {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 5rem;
		color: #ffb703;
		margin: 1rem;
		padding: 1rem;
		z-index: 0;
	}
	#logoAnim > span {
		display: none;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
	}
	header.animate nav {
		opacity: 0;
	}
	nav a {
		color: white;
		text-decoration: none;
	}
	nav a:not(.logo) {
		position: relative;
		display: flex;
		flex-direction: column;

		color: rgba(255, 255, 255, 0.8);
		font-weight: bold;
		text-transform: uppercase;
		transition-duration: 200ms;
	}
	nav a:not(.logo):hover {
		color: white;
	}
	nav a:not(.logo) .hover {
		position: absolute;
		right: 0;
		left: auto;
		bottom: -4px;
		width: 0;
		transition-duration: 400ms;

		border-bottom: 2px #ffb703 solid;
	}
	nav a:not(.logo):hover .hover {
		position: absolute;
		right: auto;
		left: 0;
		bottom: -4px;
		width: 100%;

		border-bottom: 2px #ffb703 solid;
	}
	.logo {
		font-size: 2rem;
		color: #ffb703;
	}

	#hero {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #ffb703;
		margin: 1rem;
		margin-top: 0;
		border-radius: 2rem;
		z-index: 1;
		flex: 1;
		overflow: hidden;
	}
	header.animate #hero {
		flex: 0;
		height: 0;
	}

	#names {
		color: #ffa903;
		position: absolute;
		font-size: 4rem;
		white-space: nowrap;
		rotate: -7.77deg;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		line-height: 110%;
		z-index: -1;
	}
	#names > div {
		position: relative;
	}
	#names .right {
		right: 25%;
	}
	#names .left {
		left: 25%;
	}
</style>
