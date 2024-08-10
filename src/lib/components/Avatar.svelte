<script lang="ts">
	export let noCrown: boolean;
</script>

<div class="relative flex justify-center">
	{#if !noCrown}
		<img class="absolute -top-10 left-10 w-20" src="/assets/crown.webp" alt="" />
	{/if}

	<img class="aspect-square w-28 rounded-full" src="/cv/sea.webp" alt="Filip Mårtensson" />
</div>
