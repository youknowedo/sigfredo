<script lang="ts">
	export let noCrown: boolean;
</script>

<div class="relative flex justify-center">
	{#if !noCrown}
		<img class="absolute w-20 -top-10 left-10" src="/assets/crown.png" alt="" />
	{/if}

	<img class="rounded-full aspect-square w-28" src="/cv/sea.jpg" alt="Filip Mårtensson" />
</div>
