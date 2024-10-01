<script lang="ts">
	import rip from './assets/rip.webp';

	export let sticky = true;
	export let shy = true;
</script>

<button
	class="{sticky
		? 'fixed'
		: 'absolute'} inset-x-0 flex items-center justify-center duration-300 {shy
		? '-top-24 hover:top-4'
		: 'top-4'}"
>
	<img class="absolute w-[1536px] object-fill" src={rip} alt="" />

	<div class="font-typeWriter z-50 -mb-10 flex items-center gap-2 text-black">
		<img class="mb-1 h-6 w-6" src="/ico.webp" alt="" />
		Go back to
		<a href="https://sigfredo.fun">sigfredo.fun</a>
	</div>
</button>

<slot />
