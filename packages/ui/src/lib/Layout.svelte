<script lang="ts">
	import rip from './assets/rip.webp';

	export let sticky = true;
	export let shy = true;
</script>

<div class="relative">
	<a
		href="https://sigfredo.fun"
		class="{sticky
			? 'fixed'
			: 'absolute'} inset-x-0 z-50 flex items-center justify-center overflow-visible duration-300 {shy
			? '-top-24 hover:top-4'
			: 'top-4'}"
	>
		<div class="absolute z-40 w-[1024px]">
			<img class="w-[1024px]" src={rip} alt="" />
		</div>

		<div class="z-50 -mb-10 flex items-center gap-2 font-typeWriter text-black">
			<img class="mb-1 h-6 w-6" src="/ico.webp" alt="" />
			Go back to
			<a href="https://sigfredo.fun">sigfredo.fun</a>
		</div>
	</a>

	<div class="z-20">
		<slot />
	</div>
</div>
