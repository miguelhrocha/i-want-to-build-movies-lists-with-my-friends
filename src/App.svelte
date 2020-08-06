<script lang="ts">
	export let name: string;
</script>

<style type="text/postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>

<main>
	<h1 class="bg-blue-500">Hello {name}!</h1>
	<p class="bg-blue-300">Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>