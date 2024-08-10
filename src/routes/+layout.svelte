<script lang="ts">
	import { lang } from '$lib/stores';
	import '@fontsource/lato/400-italic.css';
	import '@fontsource/lato/400.css';
	import '@fontsource/lato/700.css';
	import '@fontsource/lato/900.css';
	import '@fontsource/special-elite';
	import '../app.css';

	export let data;

	lang.set(data.lang as any);
</script>

<div class="font-default">
	<slot />
</div>
