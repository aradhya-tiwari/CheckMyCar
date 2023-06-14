
    <style>
    .box{
        background-color: rgb(172, 170, 166);
        height: 100vh;
    }
    .size{
        width: 100%;
        height: 14rem;  
    }
    .head{
        background-image: url(../../img/about_bg2.jpg);
        background-repeat:no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
    }
    .Details{
        
        position: relative;
        height: 18rem;
        top: 8rem;
        background-color:rgb(43,43,43);
    }
    .title1{
        font-size: 3.5rem;
        font-weight: bold;
        color: white;
        padding-left: 2rem;
        flex-direction: column;
    }
    ul{
        list-style: none;
        padding-top: 0%;
    }
    .con{
        padding-left: 14rem;
        color: white;
        font-weight: bold;
        font-size: 1.25rem;
        padding-top: 0.5rem;

    }
    .content{

    color: white;
    padding-left: 15rem;
    margin-bottom: -0.5rem;
    margin-left: -2rem;
    }
    .response{
       position: absolute;
       background-color: rgb(11,10,10);
       z-index: 1;
       top:50%;
       left:50%;
       transform:translate(-50%,-50%);
       width: 500px;
       border-radius: 10px;
       margin-left: 17rem;
       margin-top: -2rem;
    }
    .response h1{
        font-size: 2rem;
        margin-left: 2rem;
        margin-top: 0.5rem;
        border-bottom:1px solid silver;
        color: azure;
    }
    .response form{
        padding: 0 40px;
        box-sizing: border-box;
    }
    form .txt_field{
        position: relative;
        border-bottom: 2px solid #adadad;
        margin:30px 0;
    }
    .txt_field input{
        width: 100%;
        padding:0 5px;
        height: 40px;
        font-size:16px;
        border: none;
        background:none;
        outline:none;
        color: azure;
    }
    .txt_field label{
        position: absolute;
        top:50%;
        left:50px;
        color:#adadad;
        transform:translate(-50%);
        font-size: 16px;
        pointer-event:none;
        transition:.5s;
    }
    .txt_field span::before{
        content: '';
        position: absolute;
        top:40px;
        left:0;
        width:100%;
        height: 2px;
        background:#899094;
        transition: .5s;
    }
    .txt_field input:focus~label,
    .txt_field input:valid~label{
        top:-5px;
        color:#2691d9;
    }
    .txt_field input:focus~span::before,
    .txt_field input:valid~span::before{
       width:100%;
       background:#2691d9;
    }
    input[type="submit"]
    {
        border-radius: 5px;
        margin-bottom: 4rem;
        background-color:#adadad;
        border-color: #948989;
    }
    input[type="submit"]:hover{
        background-color: #2691d9;
        border-color:rgb(47, 41, 37);
    }
</style>




<div class="box">
    <div class="head size">
        <div class="title1">We'd Love To Hear From You...</div>
    </div>
    <div class="Details size">
        <div class="con"><h4>Call Us</h4></div>
            <div class="content"><ul>
                <li><i class="fa-solid fa-phone"></i>9754886439</li>
            </ul></div>
        
        <div class="con"><h4>Mail Us</h4></div>
           <div class="content"><ul>
                <li><i class="fa-solid fa-envelope"></i>checkmycar12345@gmail.com</li>
            </ul></div>
        <div class="con"><h4>Follow Us</h4></div>
         <div class="content"><ul>
                <li><i class="fa-brands fa-instagram"></i>checkmycar</li>
                <li><i class="fa-brands fa-facebook"></i>checkmycar</li>
                <li><i class="fa-brands fa-twitter"></i>checkmycar</li>
            </ul></div>
        <div class="response">
            <h1>Contact Us</h1>
            <form method="get">
                <div class="txt_field">
                    <input type="text" required>
                    <label>Your Name</label>
                    <span></span>
                </div>
                <div class="txt_field">
                    <input type="text" required>
                    <label>Your Email id</label>
                    <span></span>
                </div>
                <div class="txt_field txt">
                    <input type="text" required>
                    <label>Your Message</label>
                    <span></span>
                </div>
                <input type="submit" value="submit">
            </form>
        </div>
    </div>
</div>
