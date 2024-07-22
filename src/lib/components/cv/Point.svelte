<script lang="ts">
	import type { BulletPoint } from '../../../app';

	export let point: BulletPoint = [];
</script>

{#if typeof point === 'string'}
	<li>{point}</li>
{:else}
	<ul class="pl-4">
		{#each point as p}
			{#if typeof p === 'string'}
				<li>{p}</li>
			{:else}
				<svelte:self {p} />
			{/if}
		{/each}
	</ul>
{/if}
