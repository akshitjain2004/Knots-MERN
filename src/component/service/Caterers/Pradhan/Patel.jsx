import loc from "../../../../assets/location.jpg"
import group from "../../../../assets/group.jpg"
import rate from "../../../../assets/Noun_Project_Star_icon_370530_cc.svg.svg"
import like from "../../../../assets/iconmonstr-heart-thin.svg"
import "./Pradhan.css"
import tick from"../../../../assets/tick.jpg"
import imf from "../../../../assets/new-patel.png"
import wrong from "../../../../assets/icons8-wrong.svg"
import cart from "../../../../assets/cart.svg"
import { Link } from "react-router-dom"

function Patel(){
    return(
        
        <div className="ambody" ><div className="backf"><h1 className="hheading">New Patel Cattering</h1>
       <img src={imf} alt=""  className="weblovc"/> 
        <img src={loc} className="imgloc1"></img>
        <div className="cart">   <Link to="/server">   <button className="cartf">
                <i class="uil uil-message"></i>
                        Message Us
                    </button></Link>
                    </div>        <div className="loc1">Jaipur</div>
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
            <h3 className="wil">Willing to Travel </h3> <img className="wrong1" src={wrong} alt="" />
            
            <h3>Experience</h3>
            <p>15 Years</p>
        </div>
        <div className="about">
            <h2 className="abhead">About</h2>
            <hr />
            <p>
            New Patel Tent And Catering Services in Barkheda is dedicated to providing exceptional services tailored to meet the unique demands and preferences of our clients. Our commitment goes beyond traditional catering, extending to a comprehensive range of offerings to ensure memorable events.

Our extensive catering services not only encompass exquisite food and beverage arrangements but also include meticulous attention to dining hall décor and impeccable service. We pride ourselves on creating a seamless and delightful experience for you and your guests.
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
            <h1>4.1</h1><p className="kk">rating</p>

        </div>



        
        </div>
        
    )
}
export default Patel;