<script lang="ts">
	import Page from './Page.svelte';

	export let recipient = 'John Doe';
	export let email = 'john.doe@example.com';
	export let company = 'Example Ltd.';
	export let photo: string | null = '/cv/basket.jpg';
</script>

<Page {photo}>
	<div class="text-sm leading-tight">
		<p class="font-black">{recipient}</p>
		<p>{company}</p>
		<p class="font-bold text-edo">{@html email}</p>

		<br />

		<slot />
	</div>
</Page>
