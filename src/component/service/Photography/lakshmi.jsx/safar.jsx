import loc from "../../../../assets/location.jpg"
import group from "../../../../assets/group.jpg"
import rate from "../../../../assets/Noun_Project_Star_icon_370530_cc.svg.svg"
import like from "../../../../assets/iconmonstr-heart-thin.svg"
import "./laksmi.css"
import tick from"../../../../assets/tick.jpg"
import imf from "../../../../assets/img4.jpg"
import wrong from "../../../../assets/icons8-wrong.svg"
import cart from "../../../../assets/cart.svg"
import { Link } from "react-router-dom"
function Safar(){
    return(
        
        <div className="ambody" ><div className="backf"><h1 className="hheading">Safarsaga Films</h1>
       <img src={imf} alt=""  className="weblovc"/> 
        <img src={loc} className="imgloc1"></img>
        <div className="cart">   <Link to="/server">   <button className="cartf">
                <i class="uil uil-message"></i>
                        Message Us
                    </button></Link>
                    </div>        <div className="loc1">Chennai</div>
        <img src={group} className="visicon1"></img>
        <div className="number1">Visitor Number-550</div>
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
            <p>25 Years</p>
        </div>
        <div className="about">
            <h2 className="abhead">About</h2>
            <hr />
            <p>
            We begin our journey as a wedding photographer in Chennai, but now we offer wide range of photography services like fashion photography, pre wedding shoot photographer, maternity shoot, baby shoot, music videos, best wedding highlight, product shoot and all photography services. We can do anything that goes under the radar of photography. Safarsaga Films will create your wedding photography collection as a story from the beginning to the end, covering all the moments and ceremonies. The wedding album conserving through candid wedding photography and videography that lasts till the generations. You will never regret choosing us as your wedding photographer

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
            <h1>4.8</h1><p className="kk">rating</p>

        </div>



        
        </div>
        
    )
}
export default Safar;