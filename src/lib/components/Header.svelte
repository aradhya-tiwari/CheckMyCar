<!--Header.svelte-->
  
<style>
    nav {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0.75rem;
        background-color: #2B2B2B;
        color: #86868B;
        height: 10rem;
    }

    .logo{
        position: relative;
        left: 2.5rem;
    }

    .logo img{
        height: 7rem;
        width: 7rem;
    }

    .searchbar {
        padding: 0.3rem;
        width: 30rem;
        border: solid #c8ccd0 1px;
        border-radius: 7px 0px 0px 7px;
        -webkit-transition: box-shadow linear 0.2s;
        transition: box-shadow linear 0.2s, width 500ms ease;
    }

    .searchbar:focus {
        outline: none;
        border-color: #99a5ae;
        box-shadow: 0 0 10px #99a5ae;
        width: 32rem;
    }

    .searchbar:hover {
        border-color: #99a5ae;
        box-shadow: 0 0 10px #99a5ae;
        width: 32rem;
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
        margin: 0;
    }

    .nav-links li {
        margin-right: 6rem;
    }

    .nav-links li a {
        color: #86868B;
        text-decoration: none;
    }
    .nav-links li a:hover {
        color: #1bbc9b;
    }
    .Sign_in{
        margin-left: 18rem;
        background-color: #1561F0;
        color: white;
        border: solid #1561f0 1px;
        border-radius: 7px;
        font-size: small;
    }
</style>  

<nav>
    <div class="logo">
        <img src="../src/img/logo.jpeg" alt="">
    </div>
    <div style="position: relative; left: 3rem;">
        <div class="search" style="position: relative ;margin: 2rem; top: -1rem;">
            <input type="text" placeholder="Search..." name="search" class="searchbar">
            <button type="submit" class="search_button"><i class="fa fa-search"></i></button>
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