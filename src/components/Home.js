import React
 from 'react'

function Home(prop){
    return(
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/51mu0gwjfML._SL1000_.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>{prop.addToCartHandler({price:1000,name:'i phone'})}}>
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home