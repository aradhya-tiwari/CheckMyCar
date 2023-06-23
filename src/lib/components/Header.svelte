<script>
    import { page } from "$app/stores";
    let pos = "static";
    if ($page.url.pathname == "/") {
        pos = "absolute";
    }
</script>

<nav style:position={pos}>
    <div class="logo">
        <img src="../src/img/logo.jpeg" alt="" />
    </div>
    <div style="position: relative; left: 3rem;">
        <div
            class="search"
            style="position: relative ;margin: 2rem; top: -1rem;"
        >
            <input
                type="text"
                placeholder="Search..."
                name="search"
                class="searchbar"
            />
            <button type="submit" class="search_button"
                ><i class="fa fa-search" /></button
            >
            <button type="submit" class="Sign_in">Sign-In</button>
        </div>
        <div>
            <ul class="nav-links">
                <li><a href="#">Check My Car</a></li>
                <li><a href="#">Find New Car</a></li>
                <li><a href="#">Compare Cars</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    </div>
</nav>

<style>
    nav {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #2b2b2b;
        color: #86868b;
        height: 10rem;
        width: 100%;
        overflow: hidden;
        position: absolute;
        opacity: 0.9;
    }

    .logo {
        position: relative;
        left: 2.5rem;
    }

    .logo img {
        border-radius: 20px;
        height: 7rem;
        width: 9rem;
        transition: 0.3s;
    }
    .logo img:hover {
        scale: 1.1;
    }

    .searchbar {
        padding: 0.3rem;
        width: 40rem;
        border: solid #c8ccd0 1px;
        border-radius: 7px 0px 0px 7px;
        -webkit-transition: box-shadow linear 0.2s;
        transition: box-shadow linear 0.2s, width 500ms ease;
    }

    .searchbar:focus {
        outline: none;
        border-color: #99a5ae;
        box-shadow: 0 0 10px #99a5ae;
    }

    .searchbar:hover {
        border-color: #99a5ae;
        box-shadow: 0 0 10px #99a5ae;
        width: 42rem;
    }

    .search_button {
        height: 2.18rem;
        margin-left: -4px;
        width: 4rem;
        border: solid #c8ccd0 1px;
        border-radius: 0px 7px 7px 0px;
        border-left: 0;
        transition: 400ms ease-out;
    }

    .search_button:hover {
        background-color: hsl(0, 0%, 85%);
    }

    .nav-links {
        display: flex;
        list-style: none;
        margin-top: -10px;
    }

    .nav-links li {
        margin-right: 5rem;
    }

    .nav-links li a {
        color: #86868b;
        text-decoration: none;
    }
    .nav-links li a:hover {
        color: #1bbc9b;
    }
    .Sign_in {
        margin-left: 10rem;
        background-color: #1561f0;
        color: white;
        border: solid #1561f0 1px;
        border-radius: 7px;
        transition: 0.3s;
        padding: 1rem 2.5rem;
    }
    .Sign_in:hover {
        box-shadow: 0 0 10px #1561f0;
        scale: 1.05;
    }
</style>
