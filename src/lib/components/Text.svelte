<script lang="ts">
	import { lang } from '../stores';
</script>

{#if $lang === 'sv'}
	<slot name="sv" />
{:else}
	<slot />
{/if}
