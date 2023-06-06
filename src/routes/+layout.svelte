<script>
    import { page } from "$app/stores";
    import Header from "../lib/components/Header.svelte";
    import Footer from "../lib/components/Footer.svelte";
    let arr = ["/admin", "/about"];
</script>

{#if arr.find((e) => e === $page.url.pathname)}
    <slot>Hello</slot>
{:else}
    <Header />
    <slot />
    <Footer />
{/if}
