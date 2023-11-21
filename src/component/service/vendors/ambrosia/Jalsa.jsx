import loc from "../../../../assets/location.jpg"
import group from "../../../../assets/group.jpg"
import rate from "../../../../assets/Noun_Project_Star_icon_370530_cc.svg.svg"
import like from "../../../../assets/iconmonstr-heart-thin.svg"
import "./Ambrosia.css"
import tick from"../../../../assets/tick.jpg"
import imf from "../../../../assets/3063341kadamb_resort.jpg"
import cart from "../../../../assets/cart.svg"
import { Link } from "react-router-dom"
function Jalsa(){
    return(
        
        <div className="ambody1" ><div className="backf"><h1 className="heading">Jalsa Banquets </h1>
       <img src={imf} alt=""  className="weblovc"/> 
        <img src={loc} className="imgloc1"></img>
        <div className="cart">   <Link to="/server">   <button className="cartf">
                <i class="uil uil-message"></i>
                        Message Us
                    </button></Link>
                    </div>
        <div className="loc1">goa</div>
        <img src={group} className="visicon1"></img>
        <div className="number1">Visitor Number-750</div>
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
            Jalsa is one of the most sumptuous and fascinating venues in the city of Indore suitable for all kinds of celebrations and social happening ranging from functions like weddings to sophisticated corporate conferences and meetings. To make every event beautiful nostalgia. Jalsa offers a variety of banquets and rooms specially designed to make your special time precious and memorable. The banquets and gardens at Jalsa are just the right kinds of place if you are looking for a premium place. We believe in making your happy moments a lavish affair. Our premium venue is located at a tranquil location in Indore. A beautifully nurtured lawn with great space to make your receptions grand and glorious. Open from all the sides and floor with lush green grass, the lawn gives a mesmerizing feel under the starlit sky at night. Our venue is just perfect for you if you are planning a splendid event or a wedding. We have got you covered for all your needs at one place.
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
    
                
                <div className="box1"><img src={tick} className="tick"  ></img>Wifi</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Pool</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Parking</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Bar</div>
                

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
            <p>Upto 50% Advance while booking</p>
            <br />
            <h3>Cancellation Policy</h3>
            <p>Refund Upto 25% Advance</p>
        </div>
        <div className="rating">
            <h2>Ratings</h2>
            <hr />
            <img src={rate} className="rrr" alt="" />
            <h1>4.4</h1><p className="kk">rating</p>

        </div>



        
        </div>
        
    )
}
export default Jalsa;