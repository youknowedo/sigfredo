<script lang="ts">
	import Page from './Page.svelte';

	export let recipient = 'John Doe';
	export let email = 'john.doe@example.com';
	export let company = 'Example Ltd.';
</script>

<Page>
	<div class="text-sm leading-tight">
		<p class="font-black">{recipient}</p>
		<p>{company}</p>
		<a href="mailto:{email}" class="text-primary block font-bold">{email}</a>

		<br />

		<slot />
	</div>
</Page>
