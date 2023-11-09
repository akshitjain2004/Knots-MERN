import loc from "../../../../assets/location.jpg"
import group from "../../../../assets/group.jpg"
import img1 from "../../../../assets/ambrosia.jpg"
import like from "../../../../assets/iconmonstr-heart-thin.svg"
import "./Ambrosia.css"
function Ambrosia(){
    return(
        <div><h1 className="heading">Ambrosia Sarovar Portico</h1>
        <img src={loc} className="imgloc"></img>
        <div className="loc">Hyderabad</div>
        <img src={img1} className="locpic"></img>
        <img src={group} className="visicon"></img>
        <div className="number">Visitor Number-800</div>
        <div className="like">
            <div className="icon">
                <img src={like} className="love"/>
                Add To Wishlist
            </div>
        </div>
        <div className="overview"> 
        <h2 className="head1">Overview</h2>
            <div className="veg">
                <div className="prisetext"> Veg Price</div>
                    <div className="price">1250Rs</div>
                
            </div>
            <div className="nonveg">
                <div className="prisetext">NonVeg Price</div>
                    <div className="price">1500Rs</div>
                
            </div>
        </div>



        
        </div>
        
    )
}
export default Ambrosia;