<script lang="ts">
	import { onMount } from 'svelte';

	export let src: string;
	export let alt: string;

	let loaded = false;
	let image;

	onMount(() => {
		image.onload = () => {
			loaded = true;
		};
	});
</script>

<style>

	img.loaded {
		opacity: 1;
	}
</style>

<img
	class="opacity-0 transition-opacity duration-1000 ease-out"
	{src}
	{alt}
	class:loaded
	bind:this={image}
	loading="lazy" />
