<script>
    import "../app.postcss";
    import { page } from "$app/stores";
    import Header from "../lib/components/Header.svelte";
    import Search from "../lib/components/Search.svelte";
    import Footer from "../lib/components/Footer.svelte";
    let arr = ["/admin", "/about"];
</script>

<!--<Header />
<Search />
<slot />
<Footer />-->
<Header />
<slot />
<Footer />
