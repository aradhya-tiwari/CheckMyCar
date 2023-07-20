<style>
  .background{
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .heading{
    margin-top: 4.5rem;
    margin-left: 3rem;
  }
  h2{
    font-family: sans-serif;
    font-weight: bold;
  }
  h4{
    color:rgb(176, 175, 175);
    font-weight: bold;
    font-family: sans-serif;
  }
  .uppersection{
    width: 100%;
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .pbox{
    display: inline-block;
  }
  .mainbox{
    height: 19.97rem;
    width: 19.97rem;
    background-color: rgb(217,217,217);
    margin:3rem 1rem 1rem 1rem;
    border: dashed;
    border-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size:2.25rem ;
    color:rgb(153 149 149);
    padding-top: 5.5rem;
  }
  .brand{
    height:4.24rem;
    width: 19.97rem;
    margin:0rem 1rem 0rem 1rem;
    background-color: rgb(217,217,217);
    margin-bottom: .25rem;
    font-size: 1.23rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8rem;

  }
  .model{
    height:4.24rem;
    width: 19.97rem;
    margin:0rem 1rem 0rem 1rem;
    background-color: rgb(217,217,217);
    font-size: 1.23rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8rem;
  }
  .fa-solid{
    font-size: 2rem;
  }
 .fa-circle-plus{
    font-size: 6.5rem;
    margin-bottom: 2rem;
    margin-left: 0rem;
    color: black;
 }
 .midtext{
    margin-top: 4.5rem;
    margin-left: 3rem;
 }
 .lowersection{
    display: grid;
    width: 100%;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1.2fr 1.2fr 1.2fr;
    padding-left: 3rem;
    padding-right: 3rem;
    margin-bottom: 2rem;
  }
 .dbox{
    height: 17.875rem;
    background-color: rgb(217,217,217);
    margin: .5rem .5rem .5rem .5rem;
 }


 @media(min-width:2560px){
  .mainbox{
    height: 36.29rem;
    width: 36.29rem;
    font-size: 6.25rem;
  }
  .fa-circle-plus{
    font-size: 12rem;
  }
  .fa-chevron-left{
    font-size: 4rem;
  }
  .brand{
    height: 6.24rem;
    width: 36.29rem;
    font-size: 2.5rem;
    gap: 14rem;
  }
  .model{
    height: 6.24rem;
    width: 36.29rem;
    font-size: 2.5rem;
    gap: 14rem;
  }
 }

 @media(max-width:1440px){
  .mainbox{
    height: 18.79rem;
    width: 18.79rem;
    font-size:2.25rem ;
  }
  .fa-circle-plus{
    font-size: 6.5rem;
  }
  .brand{
    height: 4.24rem;
    width: 18.79rem;
  }
  .model{
    height: 4.24rem;
    width: 18.79rem;
  }
 }
@media(max-width:1024px)
{
  .mainbox{
    height: 12.29rem;
    width: 12.29rem;
    font-size:2.25rem ;
    padding-bottom: 3rem;
  }
  .fa-circle-plus{
    font-size: 3.5rem;
    padding-top: 1rem;
    padding-top: -13rem;
    margin-bottom: 1rem
  }
  .fa-chevron-left{
    font-size: 1.5rem;
  }
  .brand{
    height: 3rem;
    width: 12.29rem;
    gap:4rem;
    font-size: 1rem;
  }
  .model{
    height: 3rem;
    width: 12.29rem;
    gap:4rem;
    font-size:1rem;
  }
  .dbox{
    height: 13.875rem;
  }

}
 @media(max-width:768px)
 { .mainbox{
    height: 8.29rem;
    width: 8.29rem;
    font-size:1.25rem ;
    padding-bottom: 3rem;
  }
  .fa-circle-plus{
    font-size: 2.5rem;
    padding-top: 1rem;
    padding-top: -13rem;
    margin-bottom: 1rem
  }
  .fa-chevron-left{
    font-size: 1rem;
  }
  .brand{
    height: 2.24rem;
    width: 8.29rem;
    gap:4rem;
    font-size: .5rem;
  }
  .model{
    height: 2.24rem;
    width: 8.29rem;
    gap:4rem;
    font-size:.5rem;
  }
  .dbox{
    height: 13.875rem;
  }
  .heading{
    margin-top: 9rem;
  }
}

@media(max-width:500px) and (min-width:300px){
  .mainbox{
    height: 8.1rem;
    width: 8.1rem;
    font-size:1.25rem;
    padding-bottom: 3.2rem;
  }
  .fa-circle-plus{
    font-size: 3rem;
    margin-bottom: 1rem
  }
  .fa-chevron-left{
    font-size: 1rem;
  }
  .brand{
    height: 1.24rem;
    width: 8.1rem;
    gap:2rem;
    font-size: 0.5rem;
  }
  .model{
    height: 1.24rem;
    width: 8.1rem;
    gap:2rem;
    font-size:.5rem;
  }
  .dbox{
    height: 8.875rem;
  }
  .lowersection{
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1.2fr 1.2fr ;
  }
}
</style>



<div class="background">
    <div class="heading">
       <h2>Can't Decide Which Car To Buy ?</h2>
       <h4>Compare And Choose The Best !</h4>
    </div>
    <div class="uppersection">
       <div class="pbox">
            <div class="mainbox"><i class="fa-solid fa-circle-plus"></i> Car 1</div>
            <div class="brand">Select Brand <i class="fa-solid fa-chevron-left fa-rotate-270"></i></div>
            <div class="model">Select Model  <i class="fa-solid fa-chevron-left fa-rotate-270"></i></div>
      </div>
      <div class="pbox">
        <div class="mainbox"><i class="fa-solid fa-circle-plus"></i> Car 2</div>
        <div class="brand">Select Brand<i class="fa-solid fa-chevron-left fa-rotate-270"></i></div>
        <div class="model">Select Model <i class="fa-solid fa-chevron-left fa-rotate-270"></i></div>
     </div>
     <div class="pbox">
       <div class="mainbox"><i class="fa-solid fa-circle-plus"></i> Car 3</div>
       <div class="brand">Select Brand <i class="fa-solid fa-chevron-left fa-rotate-270"></i></div>
       <div class="model">Select Model <i class="fa-solid fa-chevron-left fa-rotate-270"></i></div>
    </div>
   <div class="pbox">
      <div class="mainbox"><i class="fa-solid fa-circle-plus"></i> Add More</div>
      <div class="brand">Select Brand <i class="fa-solid fa-chevron-left fa-rotate-270"></i></div>
      <div class="model">Select Model <i class="fa-solid fa-chevron-left fa-rotate-270"></i></div>
   </div>
    </div>
    <div class="midtext">
       <h2>Popular Comparison</h2> 
       <h4>Curated For You !</h4>
    </div>
    <div class="lowersection">
       <div class="dbox"></div>
       <div class="dbox"></div>
       <div class="dbox"></div>
       <div class="dbox"></div>
       <div class="dbox"></div>
       <div class="dbox"></div>
    </div>
</div>