<script>
    import MarkdownIt from "markdown-it";
    // import { onMount } from "svelte/types/runtime/internal/lifecycle.js";
    let md = new MarkdownIt();
    export let data;
    console.log(data);
    // onMount(
    //     () => (document.querySelector("main").style = "border:1px solid black")
    // );
</script>

<main id="main" class="text-slate-900 py-5">
    {#if data.res !== null}
        <div class="relative w-full rounded-lg mb-">
            <img
                src="/assets/image2.png"
                alt=""
                class=" bg- w-full h-full rounded-lg mb-5"
            />
        </div>
        <h1 class="mb-2 text-center font-normal text-5xl">{data.title}</h1>
        <p class="text-gray-900 text-center">{data.description}</p>
        <p class = "text-black">
            {@html md.render('# hello    Hey \n > hello')}
        </p>
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
    :global(th) {
        background-color: rgb(44, 44, 44);
        border: 1px solid grey;
        text-align: center;
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
        background-color: #414141;
    }
    :global(blockquote){
        background-color: rgba(237, 255, 134, 0.5);
        padding:0.1rem;
    }
</style>
