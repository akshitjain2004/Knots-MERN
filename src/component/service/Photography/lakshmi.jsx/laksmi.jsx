import loc from "../../../../assets/location.jpg"
import group from "../../../../assets/group.jpg"
import rate from "../../../../assets/Noun_Project_Star_icon_370530_cc.svg.svg"
import like from "../../../../assets/iconmonstr-heart-thin.svg"
import "./laksmi.css"
import tick from"../../../../assets/tick.jpg"
import imf from "../../../../assets/imgg1.jpg"
import wrong from "../../../../assets/icons8-wrong.svg"
import cart from "../../../../assets/cart.svg"
import { Link } from "react-router-dom"
function Lakshmi(){
    return(
        
        <div className="ambody" ><div className="backf"><h1 className="hheading">Laxmi Studios</h1>
       <img src={imf} alt=""  className="weblovc"/> 
        <img src={loc} className="imgloc1"></img>
        <div className="cart">   <Link to="/server">   <button className="cartf">
                <i class="uil uil-message"></i>
                        Message Us
                    </button></Link>
                    </div>        <div className="loc1">Chennai</div>
        <img src={group} className="visicon1"></img>
        <div className="number1">Visitor Number-4500</div>
        <div className="like1">
            <div className="icon1">
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
            <p>18 Years</p>
        </div>
        <div className="about">
            <h2 className="abhead">About</h2>
            <hr />
            <p>
            Laxmi studios Photography is a premier and The Best Wedding Photography company based in India(Bhopal). Our style of Candid wedding photography is deeply rooted in wedding photojournalism ,influenced by fine-art and fashion photography.The results are CREATIVE,TIMELESS,ROMANTIC,FUN,ELEGANT & EMOTIONAL. We pride ourselves on not just being photographers, but rather artists creating unique and expressive imagery.”Each moment captured by the team is special ,it is a story of love and promise between the couple
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
                <div className="box1"><img src={tick} className="tick"  ></img>Photobooth</div>
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
            <p>Upto 50% Advance while booking</p>
            <br />
            <h3>Travel Policy</h3>
            <p>On Client Expense</p>
            <br />
            <h3>Cancellation Policy</h3>
            <p>Full Refund</p>
        </div>
      
        <div className="rating">
            <h2>Ratings</h2>
            <hr />
            <img src={rate} className="rrr" alt="" />
            <h1>4.7</h1><p className="kk">rating</p>

        </div>



        
        </div>
        
    )
}
export default Lakshmi;