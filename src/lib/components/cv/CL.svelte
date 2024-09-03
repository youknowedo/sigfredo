<script lang="ts">
	import Page from './Page.svelte';

	export let recipient = 'John Doe';
	export let company = 'Example Ltd.';
	export let email: string | undefined = undefined;
</script>

<Page>
	<div class="text-sm leading-tight">
		<p class="font-black">{recipient}</p>
		<p>{company}</p>
		{#if email}
			<a href="mailto:{email}" class="block font-bold text-primary">{email}</a>
		{/if}

		<br />

		<slot />
	</div>
</Page>
