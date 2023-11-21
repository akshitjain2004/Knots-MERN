import loc from "../../../../assets/location.jpg"
import group from "../../../../assets/group.jpg"
import rate from "../../../../assets/Noun_Project_Star_icon_370530_cc.svg.svg"
import like from "../../../../assets/iconmonstr-heart-thin.svg"
import "./laksmi.css"
import tick from"../../../../assets/tick.jpg"
import imf from "../../../../assets/img3.jpg"
import wrong from "../../../../assets/icons8-wrong.svg"
import cart from "../../../../assets/cart.svg"
import { Link } from "react-router-dom"
function Bandhan(){
    return(
        
        <div className="ambody" ><div className="backf"><h1 className="hheading">THE WEDDING BANDHAN</h1>
       <img src={imf} alt=""  className="weblovc"/> 
        <img src={loc} className="imgloc1"></img>
        <div className="cart">   <Link to="/server">   <button className="cartf">
                <i class="uil uil-message"></i>
                        Message Us
                    </button></Link>
                    </div>        <div className="loc1">Chennai</div>
        <img src={group} className="visicon1"></img>
        <div className="number1">Visitor Number-1000</div>
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
            <p>19 Years</p>
        </div>
        <div className="about">
            <h2 className="abhead">About</h2>
            <hr />
            <p>
            I, Rakesh owner of The Wedding Bandhan, working since 2004 and based in Bhopal. We promise to capture those benign emotions and give you much more to smile about. Be a part of the magical journey, we promise you will cherish forever and always. We capture beautiful pictures without interrupting the flow of the events. Each frame is artfully captured with the latest technology, according to the client's wishes and specifications. We are best in what we do!
           

            </p>
        </div>

        <div className="specification">
            <h1 className="sphead">Special Specifications</h1>
            <hr />
            <div className="jk">
            <div className="grid">
                <div className="box1"><img src={tick} className="tick"  ></img>Maternity Shoot</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Drone</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Crane</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Candid Photography</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Pre-Wedding Films</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Traditional Videography</div>
            
            </div></div>
        </div>
        <div className="spec">
            <h2 className="abhead">*Policies</h2>
            <hr />
            <br />
            <h3>Payment Policy</h3>
            <p>Upto 25% Advance while booking</p>
            <br />
            <h3>Travel Policy</h3>
            <p>On Client Expense</p>
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
export default Bandhan;