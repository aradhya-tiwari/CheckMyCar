<script>
    import { fade, fly } from "svelte/transition";

    let imgs = [
        "fronx.png",
        "curvv.png",
        "image1.png",
        "image2.png",
        "verna.png",
    ];

    let img_index = 0;

    // setInterval(() => chngImg(true), 5000);
    async function chngImg(idx) {
        if (idx === true) {
            if (img_index >= imgs.length - 1) {
                img_index = 0;
            } else {
                img_index++;
            }
        } else {
            if (img_index <= 0) {
                img_index = imgs.length - 1;
            } else {
                img_index--;
            }
        }
    }
</script>

<main class="h-full w-full border-2 overflow-hidden">
    <div class=" w-screen h-fit relative">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <button
            class="text-white border-0 text-6xl absolute z-30 top-[45%] left-2 hover:shadow-xl bg-[rgba(0,0,0,0.5)] text-center rounded-lg"
            on:click={() => chngImg(false)}
        >
            {"<"}
        </button>

        <div class="flex overflow-visible relative">
            {#each imgs as img, i}
                {#if i === img_index}
                    <img
                        in:fly
                        src={`/img/${img}`}
                        alt=""
                        srcset=""
                        class="m-auto h-[60vh]"
                    />
                {/if}
            {/each}
        </div>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <button
            class=" bg-[rgba(0,0,0,0.5)] text-white z-30 m-3 border-0 text-6xl absolute top-[45%] right-2 hover:shadow-xl text-center rounded-lg"
            on:click={() => chngImg(true)}>{">"}</button
        >
    </div>
</main>

<style>
    .showImg {
        display: block;
    }
</style>
