import loc from "../../../../assets/location.jpg"
import group from "../../../../assets/group.jpg"
import rate from "../../../../assets/Noun_Project_Star_icon_370530_cc.svg.svg"
import like from "../../../../assets/iconmonstr-heart-thin.svg"
import "./Ambrosia.css"
import tick from"../../../../assets/tick.jpg"
import imf from "../../../../assets/ambrosia.jpg"
import cart from "../../../../assets/cart.svg"
function Ambrosia(){
    return(
        
        <div className="ambody" ><div className="backf"><h1 className="hheading">Ambrosia Sarovar Portico</h1>
       <img src={imf} alt=""  className="weblovc"/> 
        <img src={loc} className="imgloc1"></img>
        <div className="cart"><button className="cartf"><img src={cart} alt="" />Add to Cart</button></div>
        <div className="loc1">Hyderabad</div>
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
            <div className="veg">
            <div ><button className="vegbutton">Veg <br></br>1250Rs </button></div>
                
            </div>
            <div className="nonveg">
            <div ><button className="nonvegbutton">NonVeg <br></br>1500Rs </button></div>
                
            </div>
        </div>
        <div className="about">
            <h2 className="abhead">About</h2>
            <hr />
            <p>Ambrosia Sarovar Portico, established in 2010 is located in Haridwar. We have covered 200 weddings yet. Ambrosia Sarovar Portico offers the ideal setting for events of every size, from intimate get-togethers to lavish wedding festivities. We provides the ideal ambiance, competent service, excellent food, and well-kept locations to turn any occasion into a gorgeous and outstanding event. This is the place to pick if you're seeking for a gorgeous location to hold any of your nuptial ceremonies with elegance.</p>
        </div>
        <div className="specification">
            <h1 className="sphead">Special Specifications</h1>
            <hr />
            <div className="jk">
            <div className="grid">
                <div className="box1"><img src={tick} className="tick"  ></img>Electricity Backup</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Air-conditioned</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Restaurant</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Bar</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Conference Center</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Wifi</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Spa</div>
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
            <p>Upto 50% Advance while booking</p>
            <br />
            <h3>Cancellation Policy</h3>
            <p>No Refund</p>
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
export default Ambrosia;