<script>
    // @ts-nocheck

    export let blogs;
</script>

<main class="w-full h-auto">
    {#each blogs as blog}
        <div class="w-[80%] h-auto bg-[rgb(43,43,43)] rounded-lg mx-auto my-3">
            {blog.title}
        </div>
    {/each}
</main>
