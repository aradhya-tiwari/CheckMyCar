<script>
    // @ts-nocheck

    export let blogs;
</script>

<main class="w-full h-auto">
    {#each blogs as blog}
        <div
            class="md:flex md:w-[70%] sm:w-[90%] h-auto md:h-60 bg-[rgb(43,43,43)] rounded-lg mx-auto my-3 hover:shadow-xl hover:scale-105 text-white"
            style="transition : 0.3s ease;"
        >
            <img
                src={blog.image}
                alt=""
                srcset=""
                class="h-[80%] my-auto w-40 p-3 rounded-3xl"
            />
            <div>
                <h2 class=" font-light">
                    <a href={`/blogs/${blog.slug}`}>
                        {blog.title}
                    </a>
                </h2>
                <p>
                    {blog.description.length > 100
                        ? blog.description.substring(0, 99) + "..."
                        : blog.description}
                </p>
            </div>
        </div>
    {/each}
</main>
