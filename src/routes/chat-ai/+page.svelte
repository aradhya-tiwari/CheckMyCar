<script>
    let text = " ";
    let resp = { response: "" };
    async function ask() {
        resp.response = "Loading...";
        let query = await fetch(`/api/ask?query=${text}`);
        let _resp = await query.json();
        resp = _resp;
        console.log(resp);
    }
    function func() {}
</script>

<div
    class="max-w-4xl w-[80%] h-[60vh] my-20 mx-auto rounded-lg bg-black overflow-hidden"
>
    <div class="w-full p-7 h-3/4 text-white bg-gray-800">
        {resp.response}
    </div>
    <div
        class=" w-full h-1/4 bg-gray-600 block sm:flex space-y-2 items-baseline justify-end"
    >
        <input
            type="text"
            class="h-8 bg-black text-white text-lg rounded-full w-3/4 mx-auto"
            bind:value={text}
        />
        <button
            class="w-1/5 text-xl active:scale-90 text-green-500 font-extrabold h-8 focus:outline-white focus:border-2 focus:border-black focus:outline m-auto bg-gray-900 border-none rounded-full"
            on:click={ask}>Go</button
        >
    </div>
</div>
