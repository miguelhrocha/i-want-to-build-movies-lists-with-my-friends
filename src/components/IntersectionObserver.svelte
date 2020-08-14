<script lang="ts">
	import { onMount } from 'svelte';

	export let once = false;
	export let bottom = 0;
	export let left = 0;
	export let top = 0;
	export let right = 0;

	let container: Element;
	let intersecting = false;
	onMount(() => {
		if (typeof IntersectionObserver !== undefined) {
			const rootMargin = `${bottom}px ${left}px ${top}px ${right}px`;
			const observer = new IntersectionObserver(
				(entries) => {
					intersecting = entries[0].isIntersecting;
					if (intersecting && once) {
						observer.unobserve(container);
					}
				},
				{ rootMargin },
			);

			observer.observe(container);
			return () => observer.unobserve(container);
		}
	});
</script>

<div class="w-full h-full" bind:this={container}>
	<slot {intersecting} />
</div>
