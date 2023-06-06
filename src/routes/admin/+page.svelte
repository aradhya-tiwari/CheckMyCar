<script>
    let operation = "add";
</script>

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
