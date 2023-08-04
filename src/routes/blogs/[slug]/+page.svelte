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

<main id="main" class="text-slate-9 00 py-5">
    <!-- {#if data!== null} -->
        <div class="relative w-full rounded-lg mb-">
            <img
                src={data.image}
                alt=""
                class=" bg- w-full h-full rounded-lg mb-5"
            />
        </div>
        <h1 class="mb-4 text-center text-5xl ">{ data.title }</h1>
        <p class="text-gray-400 font-semibold text-justify lg:w-[70%] m-auto lg:bg-yellow-200 lg:p-10 sm:w-[100%] rounded-2xl">{data.description}</p>
        <p class="mt-10 text-black">{ @html md.render( data.markdown ) }</p>
    <!-- {:else} -->
        <!-- Cannot Find Anything -->
    <!-- {/if} -->
</main>

<style>
    main {
        text-align: left;
        margin: auto;
        width: 80%;
    }
    :global(th) {
        background-color: rgba(201, 232, 191,0.6);
        border: 1px solid grey;
        text-align: center;
        padding:1rem;
    }
    :global(table) {
        border: 1px solid grey;
        margin: auto;
        margin-bottom: 2rem;
        width: 80%;
    }
    :global(td) {
        border: 1px solid grey;
        padding: 1rem;
        margin: 0.5rem;
    }
    :global(tr):nth-child(even) {
        background-color: #d2d2d2;
    }
    :global(h1){
        text-align: center;
    }
</style>
