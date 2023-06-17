<script>
    let boxes = [1, 2, 3, 4]; 
</script>

<div class="comps">
    <div class="new">
        <h4>New Launches</h4>
            {#each boxes as box (box)}
                <div class="box"></div>
            {/each}
    </div>
    <div class="up">
        <h4>Upcoming Launches</h4>
            {#each boxes as box (box)}
                <div class="box"></div>
            {/each}
    </div>
    <div class="trend">
        <h4>Trending!</h4>
            <div class="box2">
                <div class="box3"></div>
                    <div class="text">
                        <h5>Title Example</h5> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem praesentium aliquid repellendus quos quae quaerat iusto illum laudantium. Neque deserunt et consectetur dignissimos itaque reprehenderit! Aspernatur, tenetur. Dignissimos modi debitis dolorem asperiores porro voluptates beatae, et labore dolores pariatur.
                        <br><br>
                        <a href="">Read more...</a>
                    </div>
            </div>
            <div class="box2">
                <div class="box3"></div>
                    <div class="text">
                        <h5>Title Example</h5> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem praesentium aliquid repellendus quos quae quaerat iusto illum laudantium. Neque deserunt et consectetur dignissimos itaque reprehenderit! Aspernatur, tenetur. Dignissimos modi debitis dolorem asperiores porro voluptates beatae, et labore dolores pariatur.
                        <br><br>
                        <a href="">Read more...</a>
                    </div>
            </div>
            <div class="box2">
                <div class="box3"></div>
                    <div class="text">
                        <h5>Title Example</h5> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem praesentium aliquid repellendus quos quae quaerat iusto illum laudantium. Neque deserunt et consectetur dignissimos itaque reprehenderit! Aspernatur, tenetur. Dignissimos modi debitis dolorem asperiores porro voluptates beatae, et labore dolores pariatur.
                        <br><br>
                        <a href="">Read more...</a>
                    </div>
            </div>
            <div class="box2">
                <div class="box3"></div>
                    <div class="text">
                        <h5>Title Example</h5> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem praesentium aliquid repellendus quos quae quaerat iusto illum laudantium. Neque deserunt et consectetur dignissimos itaque reprehenderit! Aspernatur, tenetur. Dignissimos modi debitis dolorem asperiores porro voluptates beatae, et labore dolores pariatur.
                        <br><br>
                        <a href="">Read more...</a>
                    </div>
            </div>
    </div>   
</div>

<style>
    .comps{
        margin: 2rem 4.5rem 2rem 4.5rem;
    }
    .comps div {
        margin-left: 2rem;
    }
    .comps div h4{
        margin-left: 3rem;
    }
    .box {
        width: 15rem;
        height: 15rem;
        background-color: rgb(69, 64, 64);
        margin: 1rem;
        display: inline-block;
        border-radius: 0.3rem;
    }
    .box2 {
        width: 69.2rem;
        height: 12rem;
        background-color: rgb(214, 193, 193);
        margin: 2rem;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
    }
    .box3 {
        width: 23rem;
        height: 9rem;
        border-radius: 0.5rem;
        background-color: rgb(203, 176, 176);    
    }
</style>
