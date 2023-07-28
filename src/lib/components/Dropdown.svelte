<script>
    import { fly } from 'svelte/transition';
    let _toggle = false
    export let text = "Button"
    function toggle(){
        _toggle = !_toggle
    }
</script>
<div class="relative w-fit">

    <button on:click={toggle} class=" px-5 py-2 rounded-lg bg-[#86868B] text-white hover:shadow-md">{text}
    </button>
    {#if _toggle}
        <div class="absolute p-0 m-0 bg-white w-full" transition:fly >
    
            <slot/>
        </div>
        {/if}
</div>