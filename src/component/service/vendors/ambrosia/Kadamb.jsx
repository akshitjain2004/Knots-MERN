import loc from "../../../../assets/location.jpg"
import group from "../../../../assets/group.jpg"
import rate from "../../../../assets/Noun_Project_Star_icon_370530_cc.svg.svg"
import like from "../../../../assets/iconmonstr-heart-thin.svg"
import "./Ambrosia.css"
import tick from"../../../../assets/tick.jpg"
import imf from "../../../../assets/3063341kadamb_resort.jpg"
import cart from "../../../../assets/cart.svg"
import { Link } from "react-router-dom"
function Kadamb(){
    return(
        
        <div className="ambody1" ><div className="backf"><h1 className="heading">Hyatt Centric Rajpur Road </h1>
       <img src={imf} alt=""  className="weblovc"/> 
        <img src={loc} className="imgloc1"></img>
        <div className="cart">   <Link to="/server">   <button className="cartf">
                <i class="uil uil-message"></i>
                        Message Us
                    </button></Link>
                    </div>        <div className="loc1">Mumbai</div>
        <img src={group} className="visicon1"></img>
        <div className="number1">Visitor Number-900</div>
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
            <div className="veg">
            <div ><button className="vegbutton">Veg <br></br>1200Rs </button></div>
                
            </div>
            <div className="nonveg">
            <div ><button className="nonvegbutton">NonVeg <br></br>1800Rs </button></div>
                
            </div>
        </div>
        <div className="about">
            <h2 className="abhead">About</h2>
            <hr />
            <p>
            Vrindavan is just not about Vrindavan Darshan or Temple Darshan , its a opportunity to raise your spiritual levels to new heights , its a experience which makes your Soul pure .

Kadamb Resort is the one of the best destination wedding venue in Vrindavan .
            </p>
        </div>
        <div className="specification">
            <h1 className="sphead">Special Specifications</h1>
            <hr />
            <div className="jk">
            <div className="grid">
                <div className="box1"><img src={tick} className="tick"  ></img>Electricity Backup</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Air-conditioned</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Restaurant</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Airport Pickup/Drop</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Conference Center</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Wifi</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Pool</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Vallet Parking</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Bar</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Bridal Room</div>

            </div></div>
        </div>
        <div className="spec1">
            <h2 className="abhead">*Policies</h2>
            <hr />
            <br />
            <h3>Travel Policy</h3>
            <p>DJ on Panel</p>
            <br />
            <h3>Catering Policy</h3>
            <p>Provided by the Venue</p>
            <br />
            <h3>Decoration Policy</h3>
            <p>Fixed Decoration Available</p>
            <br />
            <h3>Payment Policy</h3>
            <p>Upto 25% Advance while booking</p>
            <br />
            <h3>Cancellation Policy</h3>
            <p>Refund Upto 25% Advance</p>
        </div>
        <div className="rating">
            <h2>Ratings</h2>
            <hr />
            <img src={rate} className="rrr" alt="" />
            <h1>4.0</h1><p className="kk">rating</p>

        </div>



        
        </div>
        
    )
}
export default Kadamb;