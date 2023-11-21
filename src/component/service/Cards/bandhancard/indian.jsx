import loc from "../../../../assets/location.jpg"
import group from "../../../../assets/group.jpg"
import rate from "../../../../assets/Noun_Project_Star_icon_370530_cc.svg.svg"
import like from "../../../../assets/iconmonstr-heart-thin.svg"
import "./Bandhancard.css"
import tick from"../../../../assets/tick.jpg"
import imf from "../../../../assets/imgg4.jpg"
import wrong from "../../../../assets/icons8-wrong.svg"
import cart from "../../../../assets/cart.svg"
import { Link } from "react-router-dom"
function Indian(){
    return(
        
        <div className="ambody" ><div className="backf"><h1 className="hheading">Indian Wedding Cards</h1>
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
            <div className="icon1">
                <img src={like} className="love"/>
                Add To Wishlist
            </div>
        </div></div>
        <hr />
        <div className="overview"> 
        <h2 className="head1">Overview</h2>
        <hr></hr>
            <h3>Prices starts at</h3>
            <p>500rs</p>
            <br />
            <h3>Experience</h3>
            <p>5 Years</p>
        </div>
        <div className="about">
            <h2 className="abhead">About</h2>
            <hr />
            <p>
            Find The Most Exclusive & Large Collection of Indian Wedding Cards & Designer Scroll Invitations with Custom Designing and Printing on The Leading Online Store in India, US, Canada and Europe. Indian wedding cards are always unique and needs to be different. If you are planning a summer wedding then keep these pointers in mind to ensure that you have the best wedding in town. Here are some lovely summer wedding invitation ideas that you can incorporate in your wedding to make it grand and splendid. There are companies like Indian Wedding cards that is owned by NiteshKheria , who specialize in making out of the box wedding invites. They are pioneers in this field and have an experienced team who are known to translate dreams into reality. https://indianweddingcards.in/
            </p>
        </div>

        <div className="specification">
            <h1 className="sphead">Special Specifications</h1>
            <hr />
            <div className="jk">
            <div className="grid-b">
                <div className="box1"><img src={tick} className="tick"  ></img>Traditional Invitations</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Funky & Offbeat Invitations</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Handmade Cards</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Modern Invities</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Boxed Invitesy</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Wedding Stationery</div>
                
            
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
            <h1>4.2</h1><p className="kk">rating</p>

        </div>



        
        </div>
        
    )
}
export default Indian;