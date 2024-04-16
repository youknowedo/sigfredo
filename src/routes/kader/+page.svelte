<script lang="ts">
	import { enhance } from '$app/forms';
	import QRCode from 'qrcode';
	import { onMount } from 'svelte';

	export let data;
	const { userId } = data;

	let qr: string;

	const getCode = async () => {
		const codeResponse = await fetch('/kader/api/qr');
		const { otp, expires }: { otp: string; expires: number } = await codeResponse.json();

		qr = await QRCode.toDataURL(JSON.stringify({ otp, userId }));
		setTimeout(getCode, expires - Date.now());
	};

	onMount(async () => {
		getCode();
	});
</script>

{#key qr}
	<img src={qr} alt="" />
{/key}

<form method="post" use:enhance>
	<button>Sign out</button>
</form>
