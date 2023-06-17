<nav class="nav">
    <div class="logo">
        <img src="../src/img/logo.jpeg" alt="logo" />
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
                <li><a href="/">Check My Car</a></li>
                <li><a href="/findnewcar">Find New Car</a></li>
                <li><a href="/compare">Compare Cars</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/faqs">FAQs</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
        </div>
    </div>
</nav>

<style>
    nav {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0.75rem;
        background-color: #2b2b2b;
        color: #86868b;
        height: 10rem;
    }

    .logo {
        position: relative;
        left: 2.5rem;
    }

    .logo img {
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
        height: 2.20rem;
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
        color: #86868b;
        text-decoration: none;
    }
    .nav-links li a:hover {
        color: #1bbc9b;
    }
    .Sign_in {
        margin-left: 18rem;
        background-color: #1561f0;
        color: white;
        border: solid #1561f0 1px;
        border-radius: 7px;
    }

    /*Responsive*/

    @media (max-width: 1024px) {
        .body{
            width: 103%;
        }
        .logo {
            left: 1.5rem;
        }

        .searchbar {
            width: 20rem;
        }

        .Sign_in {
            margin-left: 12rem;
        }

        .nav-links li {
            margin-right: 3rem;
        }
    }

    /* Responsive styles for mobile */
    @media (max-width: 768px) {
        .body{
            width: 106%;
        }
        .logo {
            left: 0rem;
        }

        .search {
            left: -5rem;
        }

        .searchbar {
            width: 50%;
            transition: none;
        }

        .searchbar:hover {
            border-color: #99a5ae;
            box-shadow: 0 0 10px #99a5ae;
            width: 50%;
        }

        .Sign_in {
            margin-left: 3.5rem;
        }

        .nav-links {
            top: -1rem;
            left: -3rem;
            position: relative;
            text-align: center;
            padding: 1rem 0;
            background-color: #2b2b2b;
            color: #86868b;
            transition: max-height 0.3s ease-out;
            max-height: 0;
        }
        .nav-links.open {
            max-height: 20rem;
        }

        .nav-links li {
            margin-right: 1rem;
            margin-bottom: 1rem;
        }

        .nav-links li:last-child {
            margin-bottom: 0;
        }

        .nav-links li a:hover {
            color: #1bbc9b;
        }
    }

    @media (max-width: 425px) {
        .nav{
            height: 5rem;
        }
        .nav-links{
            display: none;
        }
        .logo{
            left: -0.5rem;
            bottom: 1rem;
        }
        .logo img{
            height: 3rem;
            width: 3rem;
        }
        .searchbar{
            display: none;
        }
        .search_button{
            display: none;
        }
        .Sign_in{
            font-size: x-small;
        }
    }
</style>
