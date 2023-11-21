import loc from "../../../../assets/location.jpg"
import group from "../../../../assets/group.jpg"
import rate from "../../../../assets/Noun_Project_Star_icon_370530_cc.svg.svg"
import like from "../../../../assets/iconmonstr-heart-thin.svg"
import "./Pradhan.css"
import tick from"../../../../assets/tick.jpg"
import imf from "../../../../assets/milan.jpg"
import wrong from "../../../../assets/icons8-wrong.svg"
import cart from "../../../../assets/cart.svg"
import { Link } from "react-router-dom"
function Milan(){
    return(
        
        <div className="ambody" ><div className="backf"><h1 className="hheading">Milan Tent & Catering</h1>
       <img src={imf} alt=""  className="weblovc"/> 
        <img src={loc} className="imgloc1"></img>
        
        <div className="cart">   <Link to="/server">   <button className="cartf">
                <i class="uil uil-message"></i>
                        Message Us
                    </button></Link>
                    </div>        <div className="loc1">Hyderabad</div>
        <img src={group} className="visicon1"></img>
        <div className="number1">Visitor Number-1600</div>
        <div className="like1">
            <div className="icon">
                <img src={like} className="love"/>
                Add To Wishlist
            </div>
        </div></div>
        <hr />
        <div className="overview"> 
        <h2 className="head1">Overview</h2>
        <hr></hr>
            <h3 className="wil">Willing to Travel </h3> <img className="wrong1" src={tick} alt="" />
            
            <h3>Experience</h3>
            <p>40 Years</p>
        </div>
        <div className="about">
            <h2 className="abhead">About</h2>
            <hr />
            <p>Milan Tent And Catering Services in Barkheda aims to offer services as per the demands and preferences of the clients. This firm's catering services cover the food and beverage arrangements, dining hall décor and service.
            </p>
        </div>

        <div className="specification">
            <h1 className="sphead">Special Specifications</h1>
            <hr />
            <div className="jk">
            <div className="grid">
                <div className="box1"><img src={tick} className="tick"  ></img>Caterers For Events</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Caterers</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Tent House</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Caterers For Wedding</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Banquet Tent Dealers</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Wedding Decorators</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Mineral Water Supplier Caterer</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Caterers For Parties</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Caterers For Birthday Parties</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Caterers For Canteen</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Home Delivery Caterers</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Indian Caterers</div>
            </div></div>
        </div>
      
        <div className="rating">
            <h2>Ratings</h2>
            <hr />
            <img src={rate} className="rrr" alt="" />
            <h1>4.5</h1><p className="kk">rating</p>

        </div>



        
        </div>
        
    )
}
export default Milan;