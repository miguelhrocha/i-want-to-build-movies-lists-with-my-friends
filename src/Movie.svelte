<script lang="ts">
    import Image from './components/Image.svelte';
    import IntersectionObserver from './components/IntersectionObserver.svelte';
    import { onMount } from 'svelte';

    const TMDB_IMG_BASE_URL = "https://image.tmdb.org/t/p/w154/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg";


    let nativeLoading = false;

    onMount(() => {
        if ('loading' in HTMLImageElement.prototype) {
            nativeLoading = true;
        }
    })
</script>

<IntersectionObserver once={true} let:intersecting={intersecting}>
    {#if intersecting || nativeLoading}
        <Image src={TMDB_IMG_BASE_URL} alt="Movie poster" />
    {/if}
</IntersectionObserver>
