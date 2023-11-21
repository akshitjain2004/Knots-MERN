import loc from "../../../../assets/location.jpg"
import group from "../../../../assets/group.jpg"
import rate from "../../../../assets/Noun_Project_Star_icon_370530_cc.svg.svg"
import like from "../../../../assets/iconmonstr-heart-thin.svg"
import "./Bandhancard.css"
import tick from"../../../../assets/tick.jpg"
import imf from "../../../../assets/bandhan-cards.jpg"
import wrong from "../../../../assets/icons8-wrong.svg"
import cart from "../../../../assets/cart.svg"
import { Link } from "react-router-dom"
function Bandhancard(){
    return(
        
        <div className="ambody" ><div className="backf"><h1 className="hheading">Bandhan Cards</h1>
       <img src={imf} alt=""  className="weblovc"/> 
        <img src={loc} className="imgloc1"></img>
        <div className="cart">   <Link to="/server">   <button className="cartf">
                <i class="uil uil-message"></i>
                        Message Us
                    </button></Link>
                    </div>        <div className="loc1">Hyderbad</div>
        <img src={group} className="visicon1"></img>
        <div className="number1">Visitor Number-660</div>
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
            <p>200rs</p>
            <br />
            <h3>Experience</h3>
            <p>8 Years</p>
        </div>
        <div className="about">
            <h2 className="abhead">About</h2>
            <hr />
            <p>
            we take pride in being your premier destination for all your card needs when it comes to weddings and events. We specialize in providing a wide and exquisite range of cards that add a touch of elegance and sophistication to your special occasions.

Whether you're planning a wedding, a corporate event, a birthday celebration, or any other memorable moment, we have the perfect card to suit your style and theme. Our collection includes a diverse array of designs, from classic and traditional to modern and trendy, ensuring that you'll find the ideal match for your vision.

What sets us apart is our commitment to quality and craftsmanship. Each card in our collection is meticulously crafted with attention to detail, using high-quality materials to ensure a luxurious look and feel. We understand that every event is unique, and our customizable options allow you to add a personal touch to your invitations, making them truly one-of-a-kind.
            
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
            <h1>4.1</h1><p className="kk">rating</p>

        </div>



        
        </div>
        
    )
}
export default Bandhancard;