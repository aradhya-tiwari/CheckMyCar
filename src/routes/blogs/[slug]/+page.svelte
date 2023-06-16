<script>
    import MarkdownIt from "markdown-it";
    // import { onMount } from "svelte/types/runtime/internal/lifecycle.js";
    let md = new MarkdownIt();
    export const ssr = true;
    export let data;
    // onMount(
    //     () => (document.querySelector("main").style = "border:1px solid black")
    // );
</script>

<main id="main">
    {#if data.res !== null}
        <h1>{data.res.title}</h1>
        {@html md.render(data.res.markdown)}
    {:else}
        Cannot Find Anything
    {/if}
</main>

<style>
    main {
        text-align: left;
        margin: auto;
        width: 80%;
    }
    h1 {
        margin-bottom: 2rem;
    }
    :global(th) {
        background-color: rgb(239, 239, 239);
        border: 1px solid grey;
    }
    :global(table) {
        border: 2px solid grey;
        margin: auto;
        margin-bottom: 2rem;
        width: 80%;
    }
    :global(td) {
        border: 1px solid grey;

        padding: 0.8rem;
        margin: 0.5rem;
    }
    :global(tr):nth-child(even) {
        background-color: #e4e4e4;
    }
</style>
