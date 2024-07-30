<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { Gif } from '@giphy/svelte-components';

	export let data;
</script>

<div class="container flex min-h-screen gap-16 py-20">
	<div class="w-36">
		<Sidebar />
	</div>

	<div class="flex flex-1 flex-col items-center justify-center">
		<Gif gif={data.gif} width={400} />

		<h1 class="mt-4 text-xl font-bold">Site under construction!</h1>
	</div>
</div>
