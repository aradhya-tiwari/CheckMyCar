<script>
    // @ts-nocheck

    export let title;
    export let description;
</script>

<main
    class="p-3 bg-[rgb(80,80,80)] m-3 flex rounded-xl hover:shadow-xl hover:scale-105 transition"
>
    <div class=" w-[20%] h-40 bg-white m-3 rounded-md" />
    <div>
        <div class="font-normal text-4xl mb-2 text-gray-200">
            {title}
        </div>
        <div>
            <p class=" font-thin text-lg text-gray-200">
                {description}
            </p>
        </div>
    </div>
</main>
