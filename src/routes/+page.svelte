<script>
    import Slider from "$lib/components/Slider.svelte";
    import BlogsSnippet from "../lib/components/BlogsSnippet.svelte";
    import Chatgpt from "../lib/components/Chatgpt.svelte";
    export let data;
    console.log(data.blogs);
</script>

<Slider />
<BlogsSnippet blogs={data.blogs} />
<Chatgpt />
