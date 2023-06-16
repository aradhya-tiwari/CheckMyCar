<script lang="ts">
    import MarkdownIt from "markdown-it";

    let md = new MarkdownIt();
    let operation = "add";

    export let data: {} | null;

    console.log(data);
</script>

<div class="border-2 text-lg bg-slate-200 border-black mx-32 p-5">
    <!-- {@html md.render(data.resp.markdown)} -->
</div>
<main style="display:flex; justify-content:center">
    <h1>Add Article</h1>
    <br /><br /><br />
    <form action="?/{operation}" method="POST">
        <label for="title">Title:</label><br />
        <input type="text" name="title" id="" /><br />
        <label for="slug"> Slug:</label><br />
        <input type="text" name="slug" id="" /><br />
        <label for="description"> Description: </label><br />
        <input type="text" name="description" id="" /><br />
        <label for="markdown"> Markdown:</label><br />
        <textarea name="markdown" id="" cols="50" rows="10" /><br />
        <button type="submit">Submit</button>
    </form>
</main>
