<script>
    import { scale } from "svelte/transition";
    let toggleMenu = false;

    /** Toggle function to toggle hamburger */
    function toggle() {
        // console.log(toggleMenu);
        toggleMenu = !toggleMenu;
        return toggleMenu;
    }
    let style = `display:block`;
</script>

<main class="w-full flex h-20 bg-[rgb(43,43,43)] justify-between">
    <img
        transition:scale
        src="/img/logo.jpeg"
        alt=""
        srcset=""
        class="w-20 p-1 mx-3 rounded-full hover:scale-105"
        style="transition:0.3s ease"
    />
    <div
        class=" hidden md:flex grow justify-around my-auto md:h-1/2 sm:h-auto"
        class:toggle={toggleMenu}
    >
        <ul
            id="nav"
            class="pt-2 h-auto md:flex list-none text-white gap-10"
            style="transition:0.5s ease;"
        >
            <li><a href="/"> Home </a></li>
            <li><a href="/blogs"> Blogs </a></li>
            <li><a href="/contact"> Contact Us </a></li>
            <li><a href="/compare"> Compare Car </a></li>
            <li class="hidden relative lg:block">
                <input
                    type="text"
                    name=""
                    id=""
                    class="my-auto rounded-full border-0 px-4 hover:scale-110 hover:transition-shadow"
                    style="transition:0.3s ease;"
                />
                <i class="absolute right-0">&#128269</i>
            </li>
        </ul>
        <div
            id="sign"
            class="flex gap-10 h-2/4 pb-4 md:pd-0 justify-between text-white px-3"
        >
            <div
                class="bg-blue-800 my-auto px-4 py-2 rounded-lg hover:scale-105 cursor-pointer"
                style="transition:0.3s ease;"
            >
                Sign Up
            </div>
            <div
                class="bg-green-800 my-auto px-4 py-2 rounded-lg hover:scale-105 cursor-pointer"
                style="transition:0.3s ease;"
            >
                Log In
            </div>
        </div>
    </div>
    <button
        class="block md:hidden my-auto text-3xl z-30 hover:scale-110 transition-all text-white px-1"
        on:click={() => toggle()}>☰</button
    >
</main>

<style>
    .toggle {
        display: block;
        z-index: 10;
        background: rgb(1, 1, 1);
        width: 100vw;
        margin: auto;
        font-size: larger;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 2%;
    }
    .toggle li {
        padding: 2rem;
    }
    a {
        text-decoration: none;
        color: white;
    }
    a:hover {
        color: rgb(255, 242, 233);
        font-size: large;
        transition: 0.3s ease;
    }
</style>
