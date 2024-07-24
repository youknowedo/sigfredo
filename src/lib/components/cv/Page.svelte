<script lang="ts">
	import Sidebar from '../Sidebar.svelte';
</script>

<div class="relative mx-auto my-[0.25cm] block h-[29.7cm] w-[21cm] bg-white font-default">
	<div class="grid h-full grid-cols-[1fr,3fr] gap-16 p-[2.5cm]">
		<Sidebar />

		<div class="h-full overflow-hidden">
			<slot />
		</div>
	</div>
</div>

<style>
	@page {
		size: 21cm 29.7cm;
		margin: -0.25cm 0;
	}
</style>
