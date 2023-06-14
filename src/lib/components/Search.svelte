
<style>
 .container1{
        background-color: black;
        height: 20rem;
     }
 .innerBoxes{
        color: 2B2B2B;
        display:flex;
        gap:100px;  
     }

     .innerBoxes>*{
        width: 12rem;
        height: 12rem;
        background-color: rgb(73, 69, 69);
        display: inline-block;
        border-radius: 20px;
        margin-top: 93px;
        text-align: center;
        padding: 20px;  
        margin-left: 6rem;    
        position: relative;
        top: -1.5rem
     }
     h4{
      font-size: 2rem;
        margin-top:1rem;
        color:white;
     }
   @media(max-width:768px)
   {   .container1{
      height: 100%;
   }
      .innerBoxes{
         flex-direction: column;
         height: 100%;
            }
   }
</style>




<section class="container1">
   <div class="innerBoxes">
      <div><h4>Search Car By Brand</h4></div>
      <div><h4>Search Car By Budget</h4></div>
      <div><h4>Search Car By Fuel Type</h4></div>
      <div><h4>Most Selling Cars</h4></div> 
    </div>
</section>