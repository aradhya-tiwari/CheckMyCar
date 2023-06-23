<script lang="ts">
    import MarkdownIt from "markdown-it";

    let md = new MarkdownIt();
    let operation = "add";

    export let data: {} | null;

    console.log(data);
</script>

<main class="flex justify-center m-auto w-[80%] text-white py-5">
    <form action="?/{operation}" method="POST" class="border p-5">
        <h1 class="text-center">Add Article</h1>

        <label for="title">Title:</label><br />
        <input type="text" name="title" id="" /><br />
        <label for="slug"> Slug:</label><br />
        <input type="text" name="slug" id="" /><br />
        <label for="description"> Description: </label><br />
        <input type="text" name="description" id="" /><br />
        <label for="markdown"> Markdown:</label><br />
        <textarea name="markdown" id="" cols="50" rows="10" /><br />
        <button type="submit" class="p-2 w-full">Submit</button>
    </form>
</main>
