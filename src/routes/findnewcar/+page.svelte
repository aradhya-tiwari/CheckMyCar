<section class="sec">
    <h4>Filters: </h4>
    <div class="filter">

    </div>
    <div class="page">
        <div class="cars">
            <div class="car-info">
                <img src="" alt="">
                <div>
                    <h4>Car Name</h4><br>
                    <h6>Price - Rs. 8.19 - 14.4 Lakhs*</h6>
                    <h6>Fuel Type - Petrol  / CNG</h6>
                    <h6>Mileage - 19.8 kmpl / 25.51 km/kg</h6>
                    <h6>Transmission - Manual / Automatic</h6>
                    <button>View</button>
                </div>
            </div>
            <div class="car-info">
                <img src="" alt="">
                <div>
                    <h4>Car Name</h4><br>
                    <h6>Price - Rs. 8.19 - 14.4 Lakhs*</h6>
                    <h6>Fuel Type - Petrol  / CNG</h6>
                    <h6>Mileage - 19.8 kmpl / 25.51 km/kg</h6>
                    <h6>Transmission - Manual / Automatic</h6>
                    <button>View</button>
                </div>
            </div>
            <div class="car-info">
                <img src="" alt="">
                <div>
                    <h4>Car Name</h4><br>
                    <h6>Price - Rs. 8.19 - 14.4 Lakhs*</h6>
                    <h6>Fuel Type - Petrol  / CNG</h6>
                    <h6>Mileage - 19.8 kmpl / 25.51 km/kg</h6>
                    <h6>Transmission - Manual / Automatic</h6>
                    <button>View</button>
                </div>
            </div>
            <div class="car-info">
                <img src="" alt="">
                <div>
                    <h4>Car Name</h4><br>
                    <h6>Price - Rs. 8.19 - 14.4 Lakhs*</h6>
                    <h6>Fuel Type - Petrol  / CNG</h6>
                    <h6>Mileage - 19.8 kmpl / 25.51 km/kg</h6>
                    <h6>Transmission - Manual / Automatic</h6>
                    <button>View</button>
                </div>
            </div>
            <div class="car-info">
                <img src="" alt="">
                <div>
                    <h4>Car Name</h4><br>
                    <h6>Price - Rs. 8.19 - 14.4 Lakhs*</h6>
                    <h6>Fuel Type - Petrol  / CNG</h6>
                    <h6>Mileage - 19.8 kmpl / 25.51 km/kg</h6>
                    <h6>Transmission - Manual / Automatic</h6>
                    <button>View</button>
                </div>
            </div>  
            <div class="car-info">
                <img src="" alt="">
                <div>
                    <h4>Car Name</h4><br>
                    <h6>Price - Rs. 8.19 - 14.4 Lakhs*</h6>
                    <h6>Fuel Type - Petrol  / CNG</h6>
                    <h6>Mileage - 19.8 kmpl / 25.51 km/kg</h6>
                    <h6>Transmission - Manual / Automatic</h6>
                    <button>View</button>
                </div>
            </div>  
        </div>
        <div class="outer">
            <div class="brands">
                <h4>Similar Brands</h4>
                <div>
                    <div class="boxes"></div>
                    <div class="boxes"></div>
                </div>
                <div>
                    <div class="boxes"></div>
                    <div class="boxes"></div>
                </div>
                <div>
                    <div class="boxes"></div>
                    <div class="boxes"></div>
                </div>
                <div>
                    <div class="boxes"></div>
                    <div class="boxes"></div>
                </div>
            </div>
            <div class="picks">
                <h4>Our Tops Picks</h4>
                    <div>
                        <h6>1. Grand Vitara</h6>
                        <img src="" alt="">
                        <a href="">visit</a>
                    </div>
                    <div>
                        <h6>2. XL 6</h6>
                        <img src="" alt="">
                        <a href="">visit</a>
                    </div>
                    <div>
                        <h6>3. Breeza</h6>
                        <img src="" alt="">
                        <a href="">visit</a>
                    </div>
                    <div>
                        <h6>4. Swift Dzire</h6>
                        <img src="" alt="">
                        <a href="">visit</a>
                    </div>
            </div>
        </div>
    </div>
</section>


<style>
    .sec{
        overflow: hidden;
        padding: 2rem 4rem 4rem 6rem;
        background-color: rgb(64, 64, 64);
        color: white;
    }
    .page {
        display: flex;
    }
    .filter {
        background-color: lightslategrey ; 
        height: 10rem; 
        width: 74.3rem; 
        margin: 3rem 0 3rem 0
    }
    .car-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 16rem;
        width: 48rem;
        background-color: rgb(43, 43, 43);
        color: white;
        margin-bottom: 0.1rem;
    
    }
    .car-info img {
        margin-left: 5rem;
        height: 9rem;
        width: 9rem;
    }
    .car-info div {
        margin-left: 8rem;
    }
    .car-info div button {
        margin-top: 1rem;
    }
    .outer {
        margin-left: 6.3rem;
    }
    .brands {
        background-color: rgb(43, 43, 43);
        color: white;
        height: 44rem;
    }
    .brands h4 {
        margin: 0 0 1rem 5rem;
    }
    .brands div {
        display: flex; 
        flex-direction: row;
        justify-content: center;
    }
    .boxes {
        height: 7rem;
        width: 7rem; 
        background-color: blue;
        margin: 1.5rem;
    }
    .picks {
        background-color: rgb(43,43,43);
        color: white;
        margin-top: 4rem;
        height: 48.5rem;    
    }
    .picks h4 {
        margin: 0 0 1rem 5rem;
    }
    .picks div {
        background-color: rgb(136, 134, 139);
        margin: 1.5rem 4rem 0rem 4rem;
        padding: 0.2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .picks div img {
        width: 10rem;
        height: 6rem;
    }
    .picks a {
        color: blue;
    }

    /*Responsive*/

    @media (max-width: 1024px) {
        .filter {
            width: 52rem;
        }
        .car-info {
            height: 12rem;
            width: 32rem;
            margin-bottom: 0.2rem;
        }
        .car-info img {
            margin-left: 4rem;
            height: 7rem;
            width: 7rem;
        }
        .car-info div {
            margin-left: 4rem;
        }
        .car-info div h4 {
            font-size: 1.2rem;
        }
        .car-info div h6 {
            font-size: 0.8rem;
        }
        .car-info div button {
            margin-top: 0rem;
        }
        .outer {
            width: 15rem;
            margin-left: 5.3rem;
        }
        .brands {
            height: 31rem;
        }
        .brands h4 {
            font-size: 1.2rem;
            margin-left: 4rem;
        }
        .boxes {
            height: 5rem;
            width: 5rem;
            margin: 1rem;
        }
        .picks {
            margin-top: 2rem;
            height: 40rem;    
        }
        .picks h4 {
            font-size: 1.2rem;
            margin: 0 0 0 3.5rem;
        }
        .picks div {
            margin: 1.5rem 3rem 0rem 3rem;
        }
        .picks div img {
            height: 4rem;
            width: 6rem;
        }
    }

    @media (max-width: 768px) {
        .filter {
            width: 38rem;
        }
        .car-info {
            height: 10rem;
            width: 22rem;
            margin-bottom: 0.2rem;
        }
        .car-info img {
            margin-left: 2rem;
            height: 5rem;
            width: 5rem;
        }
        .car-info div {
            margin-left: 2rem;
        }
        .car-info div h4 {
            font-size: 0.9rem;
            margin-bottom: -0.5rem;
        }
        .car-info div h6 {
            font-size: 0.7rem;
        }
        .car-info div button {
            margin-top: 0rem;
            font-size: 0.7rem;
        }
        .outer {
            width: 15rem;
            margin-left: 2.3rem;
        }
        .brands {
            height: 25rem;
        }
        .brands h4 {
            font-size: 1rem;
            margin-left: 4rem;
        }
        .boxes {
            height: 4.5rem;
            width: 4.5rem;
            margin: 0.5rem;
        }
        .picks {
            margin-top: 1.5rem;
            height: 34.5rem;    
        }
        .picks h4 {
            font-size: 1rem;
            margin: 0 0 0 3.5rem;
        }
        .picks div {
            margin: 1.5rem 2rem 0rem 2rem;
        }
        .picks div img {
            height: 3.5rem;
            width: 5rem;
        }
        .picks div h6 {
            font-size: 0.8rem;
        }
        .picks a {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 425px) {
        .sec {
            padding: 1rem 1rem 2rem 3rem;
        }
        .sec h4 {
            font-size: 1rem;
        }
        .filter {
            width: 21rem;
            height: 8rem;
            margin: 1rem 0 2rem 0;
        }
        .page {
            display: block;
        }
        .car-info {
            width: 21rem;
            margin-bottom: 0.8rem;
        }
        .brands {
            height: 36rem;
        }
        .brands h4 {
            font-size: 1.5rem;
            margin: 1rem 0rem 1rem 5.5rem;
        }
        .boxes {
            margin: 1rem;
            height: 6rem;
            width: 6rem;
        }
        .outer {
            margin-left: 0rem;
            width: 21rem;
        }
        .picks {
           display: none;
        }
    }
    @media (max-width: 375px) {
        .sec {
            padding: 1rem 1rem 1rem 1.5rem;
        }
    }
</style>