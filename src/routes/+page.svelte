<script>
    import Slider from "$lib/components/Slider.svelte";
    import Search from "$lib/components/Search.svelte";
    import BlogsSnippet from "$lib/components/BlogsSnippet.svelte";

    export let data;
    console.log(data);
</script>

<Slider />
<Search />
<div class="bg-[rgb(43,43,43)] p-2">
    <!-- title  -->
    <h1 class="text-gray-200">Our Blogs :</h1>
    <hr class="w-[90%]" style="background-color:rgba(230,219,221,0.8);" />
    {data}
    <div class="w-[90%] m-auto">
        {#each data.resp as blog}
            <BlogsSnippet title={blog.title} description={blog.description} />
        {/each}
    </div>
</div>
