import loc from "../../../../assets/location.jpg"
import group from "../../../../assets/group.jpg"
import rate from "../../../../assets/Noun_Project_Star_icon_370530_cc.svg.svg"
import like from "../../../../assets/iconmonstr-heart-thin.svg"
import "./Ambrosia.css"
import tick from"../../../../assets/tick.jpg"
import imf from "../../../../assets/vrindwoods.jpg"
import cart from "../../../../assets/cart.svg"
import { Link } from "react-router-dom"
function VrindWoods(){
    return(
        
        <div className="ambody" ><div className="backf"><h1 className="heading">The VrindWoods</h1>
       <img src={imf} alt=""  className="weblovc"/> 
        <img src={loc} className="imgloc1"></img>
        <div className="cart">   <Link to="/server">   <button className="cartf">
                <i class="uil uil-message"></i>
                        Message Us
                    </button></Link>
                    </div>        <div className="loc1">Delhi</div>
        <img src={group} className="visicon1"></img>
        <div className="number1">Visitor Number-400</div>
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
            <div ><button className="vegbutton">Veg <br></br>1300Rs </button></div>
                
            </div>
            <div className="nonveg">
            <div ><button className="nonvegbutton">NonVeg <br></br>1800Rs </button></div>
                
            </div>
        </div>
        <div className="about">
            <h2 className="abhead">About</h2>
            <hr />
            <p>Established in 2005, The VrindWoods, located in Haridwar, has been a witness to the celebration of 200 weddings. Our venue is meticulously designed to cater to events of all sizes, from intimate gatherings to grand wedding festivities. At The VrindWoods, we pride ourselves on offering the perfect ambiance, impeccable service, delectable cuisine, and well-maintained spaces, ensuring that every occasion transforms into a stunning and memorable event.

Choose The VrindWoods if you are in search of an exquisite venue to host your wedding ceremonies with grace and sophistication. Our commitment to providing an enchanting setting, skilled service, delightful culinary experiences, and pristine locations makes us the ideal choice for creating beautiful and unforgettable moments on your special day.
 
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
                <div className="box1"><img src={tick} className="tick"  ></img>Bridal Room</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Parking</div>
            </div></div>
        </div>
        <div className="spec">
            <h2 className="abhead">*Policies</h2>
            <hr />
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
            <h1>4.1</h1><p className="kk">rating</p>

        </div>



        
        </div>
        
    )
}
export default VrindWoods;