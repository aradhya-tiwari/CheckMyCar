<script>
    import { scale } from "svelte/transition";
</script>

<main class="w-full flex h-20 bg-[rgb(43,43,43)] justify-between">
    <img
        transition:scale
        src="/img/logo.jpeg"
        alt=""
        srcset=""
        class="w-20 p-1 mx-3 rounded-full"
    />
    <div class="flex grow justify-around my-auto h-1/2">
        <ul id="nav" class="pt-2 hidden md:flex list-none text-white gap-10">
            <li>Home</li>
            <li>Blogs</li>
            <li>Contact Us</li>
            <li>Compare Car</li>
            <li class="hidden relative lg:block">
                <input
                    type="text"
                    name=""
                    id=""
                    class="my-auto rounded-full border-0 px-2 hover:w-60 hover:transition-shadow"
                />
                <i class="absolute right-0">&#128269</i>
            </li>
        </ul>
        <div id="sign" class="flex gap-10 h-2/4 text-white px-3">
            <div class="bg-blue-800 my-auto px-4 py-2 rounded-lg">Sign Up</div>
            <div class="bg-green-800 my-auto px-4 py-2 rounded-lg">Log In</div>
        </div>
    </div>
    <p class="block md:hidden my-auto text-3xl text-white px-1">☰</p>
</main>

<style>
</style>
