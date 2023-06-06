<footer class="section bg-footer">
    <div class="container" style="padding-left: 0rem;">
        <div class="row">
            <div class="col-lg-3">
                <div class="contact-form">
                    <h6 class="footer-heading text-uppercase text-white">
                        Contact Us
                    </h6>
                    <br />
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                    <textarea
                        style="border-radius: 0.3rem; margin-bottom: 0.4rem"
                        placeholder="Message"
                        cols="28   "
                        rows="3"
                    />
                    <button
                        style="border-radius: 0.3rem; width: 6rem"
                        type="submit"
                        name="submit">Sumbit</button
                    >
                </div>
            </div>

            <div class="col-lg-3" style="margin-left: 3rem;">
                <div class="quick-links">
                    <h6 class="footer-heading text-uppercase text-white">
                        Overview
                    </h6>
                    <ul class="list-unstyled footer-link mt-4">
                        <li><a href="">FAQs</a></li>
                        <li><a href="">Feedback</a></li>
                        <li><a href="">Terms and Conditions</a></li>
                        <li><a href="">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="contact">
                    <h6 class="footer-heading text-uppercase text-white">
                        Contact Us
                    </h6>
                    <br />
                    <p class="contact-info">info@gmail.com</p>
                    <p class="contact-info">+91 9876543210</p>
                    <div class="mt-5">
                        <h6 class="footer-heading text-uppercase text-white">
                            Connections
                        </h6>
                        <br />
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <a href="#"
                                    ><i
                                        class="fab instagram footer-social-icon fa-instagram"
                                    /></a
                                >
                            </li>
                            <li class="list-inline-item">
                                <a href="#"
                                    ><i
                                        class="fab facebook footer-social-icon fa-facebook-f"
                                    /></a
                                >
                            </li>
                            <li class="list-inline-item">
                                <a href="#"
                                    ><i
                                        class="fab twitter footer-social-icon fa-twitter"
                                    /></a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="text-center mt-5">
        <p class="footer-alt mb-0 f-14">
            Copyright © 2023, All Rights Reserved | Build with ❤️ from Check My
            Car
        </p>
    </div>
</footer>

<!--Footer.svelte bg(2B2B2B)-->

<style>
    .bg-footer {
        background-color: #33383c;
        padding: 2rem 0 0.8rem;
        width: 100%;
        position: relative;
        bottom: 0;
    }
    .footer-heading {
        letter-spacing: 0.125rem;
        padding-bottom: 0.75rem;
        position: relative;
    }
    .footer-link a {
        color: #acacac;
        line-height: 2.5rem;
        font-size: 0.9rem;
        transition: all 0.5s;
    }
    .footer-link a:hover {
        color: #1bbc9b;
    }
    .contact-info {
        color: #acacac;
        font-size: 0.9rem;
    }
    .footer-social-icon {
        font-size: 1rem;
        height: 2.12rem;
        width: 2.12rem;
        line-height: 2.12rem;
        border-radius: 0.18rem;
        text-align: center;
        display: inline-block;
    }
    .instagram {
        background-color: palevioletred;
        color: #ffffff;
    }
    .facebook {
        background-color: #4e71a8;
        color: #ffffff;
    }
    .twitter {
        background-color: #55acee;
        color: #ffffff;
    }
    .footer-alt {
        color: #acacac;
    }
    .footer-heading:after {
        content: "";
        width: 1.5rem;
        border-bottom: 1px solid #fff;
        position: absolute;
        left: 0;
        bottom: 0;
        display: block;
        border-bottom: 1px solid #1bbc9b;
    }
    .text-center {
        text-align: end !important;
        margin-right: 2.5rem;
        font-size: small;
    }
    .mt-5 {
        margin-top: 1rem !important;
    }
    .contact-form input {
        border-radius: 0.3rem;
        margin-bottom: 0.5rem;
    }

    /* Responsive styles */
    @media (max-width: 768px) {
        .contact-form {
            display: grid;
        }
        .col-lg-3 {
            margin: 2rem;
        }
        .col-lg-4 {
            margin: 2rem;
        }
    }
</style>
