<script>
    let posL = 10;
    let ball;

    function swipe(event) {
        console.log(event.clientX);

        return (posL = event.clientX - window.innerWidth + 160 + 60);
    }
</script>

<div
    class=" md:h-[8%] rounded-full fixed shadow-lg bottom-10 bg-[rgba(255,255,255,0.8)] right-10"
>
    <p class="px-10 text-lg cursor-pointer transition-all">
        <a href="/chat-ai"> Ask AI 🤖 </a>
    </p>
</div>
