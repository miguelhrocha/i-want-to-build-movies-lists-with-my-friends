<script lang="ts">
	import Movie from './Movie.svelte';

	export var lastName: string;
	export let name: string;
	export let age: Number;
</script>

<style type="text/postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>

<main>
	<h1 class="bg-blue-500">Hello {name} {lastName}!</h1>
	<h2>My age is {age}</h2>
	<p class="bg-blue-300">
		Visit the
		<a href="https://svelte.dev/tutorial">Svelte tutorial</a>
		to learn how to build Svelte apps.
	</p>
	<Movie />
</main>
