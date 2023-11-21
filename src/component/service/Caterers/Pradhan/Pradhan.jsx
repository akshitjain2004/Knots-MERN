import loc from "../../../../assets/location.jpg"
import group from "../../../../assets/group.jpg"
import rate from "../../../../assets/Noun_Project_Star_icon_370530_cc.svg.svg"
import like from "../../../../assets/iconmonstr-heart-thin.svg"
import "./Pradhan.css"
import tick from"../../../../assets/tick.jpg"
import imf from "../../../../assets/pradhan-main.png"
import wrong from "../../../../assets/icons8-wrong.svg"
import cart from "../../../../assets/cart.svg"
import { Link } from "react-router-dom"
function Pradhan(){
    return(
        
        <div className="ambody" ><div className="backf"><h1 className="hheading">Pradhan Mandapam</h1>
       <img src={imf} alt=""  className="weblovc"/> 
        <img src={loc} className="imgloc1"></img>
        <div className="cart">   <Link to="/server">   <button className="cartf">
                <i class="uil uil-message"></i>
                        Message Us
                    </button></Link>
                    </div>        <div className="loc1">Hyderabad</div>
        <img src={group} className="visicon1"></img>
        <div className="number1">Visitor Number-800</div>
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
            <p>36 Years</p>
        </div>
        <div className="about">
            <h2 className="abhead">About</h2>
            <hr />
            <p>PRADHAN MANDAPAM in Bagh Swaniya has a wide range of products and services to cater to the varied requirements of their customers.

            </p>
        </div>

        <div className="specification">
            <h1 className="sphead">Special Specifications</h1>
            <hr />
            <div className="jk">
            <div className="grid">
                <div className="box1"><img src={tick} className="tick"  ></img>Wedding Grounds</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Air-conditioned</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Banquet Halls</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Event Organisers</div>
                <div className="box1"><img src={tick} className="tick"  ></img>AC Banquet Halls</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Wedding Decorators</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Open Air Banquet Halls</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Function Hall Material Hire</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Party Lawns</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Conference Halls</div>
                <div className="box1"><img src={tick} className="tick"  ></img>AC Conference Halls</div>
            </div></div>
        </div>
        <div className="specification1" >
        <h1 className="sphead">Accommodations / Amenities Included</h1>
            <hr />
            <div className="jk1">
            <div className="grid">
                <div className="box1"><img src={tick} className="tick"  ></img>Decorators</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Valet Parking</div>
                <div className="box1"><img src={tick} className="tick"  ></img>10 km away from Airport</div>
                <div className="box1"><img src={tick} className="tick"  ></img>accessible by roadway</div>
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
export default Pradhan;