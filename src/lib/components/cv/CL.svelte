<script lang="ts">
	import Page from './Page.svelte';

	export let recipient = 'John Doe';
	export let adress = '123 Fake Street<br/>123 45 Göteborg';
	export let company = 'Macforum';
	export let photo: string | null = '/cv/basket.jpg';
	export let letter =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, alias animi ratione vitae a ipsa illo deserunt voluptatum quo maxime natus excepturi dicta. Eius at eligendi, quo fugit voluptates quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, alias animi ratione vitae a ipsa illo deserunt voluptatum quo maxime natus excepturi dicta. Eius at eligendi, quo fugit voluptates quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, alias animi ratione vitae a ipsa illo deserunt voluptatum quo maxime natus excepturi dicta. Eius at eligendi, quo fugit voluptates quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, alias animi ratione vitae a ipsa illo deserunt voluptatum quo maxime natus excepturi dicta. Eius at eligendi, quo fugit voluptates quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, alias animi ratione vitae a ipsa illo deserunt voluptatum quo maxime natus excepturi dicta. Eius at eligendi, quo fugit voluptates quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, alias animi ratione vitae a ipsa illo deserunt voluptatum quo maxime natus excepturi dicta. Eius at eligendi, quo fugit voluptates quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, alias animi ratione vitae a ipsa illo deserunt voluptatum quo maxime natus excepturi dicta. Eius at eligendi, quo fugit voluptates quibusdam.';
</script>

<Page {photo}>
	<div class="text-sm">
		<p class="font-bold">{recipient}</p>
		<p>{company}</p>
		<p>{@html adress}</p>

		<br />

		<p>
			{letter}
		</p>
	</div>
</Page>
