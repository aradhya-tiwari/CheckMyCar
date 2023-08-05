<script>
    import { fade } from "svelte/transition";

    let imgs = [
        "fronx.png",
        "curvv.png",
        "image1.png",
        "image2.png",
        "verna.png",
    ];

    function delay(time) {
        return new Promise((resolve) => {
            setTimeout(resolve, time);
        });
    }

    let img_index = 0;
    let style = ``;
    setInterval(() => chngImg(true), 5000);
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
            class="bg-transparent border-0 text-6xl absolute top-[45%] left-2 hover:shadow-xl text-white text-center rounded-full"
            on:click={() => chngImg(false)}
        >
            👈
        </button>
        <img
            transition:fade
            src={`/img/${imgs[img_index]}`}
            alt=""
            srcset=""
            class="w-full h-full"
            {style}
        />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <button
            class=" bg-transparent border-0 text-6xl absolute top-[45%] right-2 hover:shadow-xl text-white text-center rounded-full"
            on:click={() => chngImg(true)}
        >
            👉
        </button>
    </div>
</main>
