<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { Gif } from '@giphy/svelte-components';

	export let data;
</script>

<div class="container flex items-center min-h-screen gap-16 py-20">
	<div class="w-40">
		<Sidebar />
	</div>

	<div class="flex flex-col items-center justify-center flex-1">
		<Gif gif={data.gif} width={400} />

		<h1 class="mt-4 text-xl font-bold">Site under construction!</h1>
	</div>
</div>
