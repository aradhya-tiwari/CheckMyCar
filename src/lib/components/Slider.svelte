<script>
    import { fade } from "svelte/transition";

    let imgs = [
        "fronx.png",
        "curvv.png",
        "image1.png",
        "image2.png",
        "verna.png",
    ];

    let img_index = 0;
    let style = ``;
    setInterval(() => {
        if (img_index >= imgs.length - 1) {
            img_index = 0;
        } else {
            img_index++;
        }

        console.log(img_index);
    }, 5000);
</script>

<main class="h-full w-full border-2 overflow-hidden">
    <div class=" w-screen h-fit">
        <img
            transition:fade={{ duration: 300 }}
            src={`/img/${imgs[img_index]}`}
            alt=""
            srcset=""
            class="w-full h-full"
            {style}
        />
    </div>
</main>
