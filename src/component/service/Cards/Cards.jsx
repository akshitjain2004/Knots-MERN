import img1 from "../../../assets/bandhan-cards.jpg"
import img2 from "../../../assets/imgg2.jpg"
import img3 from "../../../assets/imgg3.jpg"
import img4 from "../../../assets/imgg4.jpg"
import img5 from "../../../assets/imgg5.jpg"
import img6 from "../../../assets/imgg6.png"
import loc from "../../../assets/location.jpg"
import eye from "../../../assets/eyeicon.jpg"
import rup from "../../../assets/rupee.jpg"
import star from "../../../assets/star.jpg"
import "./Cards.css"
import { Link } from "react-router-dom"



function Card(){
    return(
        
        <div className="weddingcard">
            <h1 className="heading">Wedding Cards in India</h1>
            <div className='vgrid'>
        <div className='box'>
        <Link to="/service/card/bhandhancard">
          <div className='imgbor'>
            <div className='img'>
              <img src={img1} className='img1'></img>
              <div className='text' >
              Bandhan Cards </div>
              <img src={loc} className="locimg"></img>
              <div className="location">Hyderbad</div>
              <img src={eye} className="eye"></img>
              <div className="view">660 views</div>
              <hr className="hr"></hr>
              <img src={rup}className="rup"></img>
              <div className="rupees">200Rs </div>
              <div className="rrating">
              <img src={star} className="sstar"></img>
              <div className="rrt">4.1</div>
              </div>


            </div>
          </div></Link>
        </div>


        <div className='box'>
        <Link to="/service/card/badhai">
          <div className='imgbor'>
            <div className='img'>
              <img src={img2} className='img1'></img>
              <div className='text'>
              Badhai Cards</div>
              <img src={loc} className="locimg"></img>
              <div className="location">Delhi</div>
              <img src={eye} className="eye"></img>
              <div className="view">200 views</div>
              <hr className="hr"></hr>
              <img src={rup}className="rup"></img>
              <div className="rupees">700Rs </div>
              <div className="rrating">
              <img src={star} className="sstar"></img>
              <div className="rrt">3.8</div>
              </div>
            </div>
          </div></Link>
        </div>


        <div className='box'>
          <Link to="/service/card/Mdam">
          <div className='imgbor'>
            <div className='img'>
              <img src={img3} className='img1'></img>
              <div className='text'>
              Madam Card Creation</div>
              <img src={loc} className="locimg"></img>
              <div className="location">Jaipur</div>
              <img src={eye} className="eye"></img>
              <div className="view">900 views</div>
              <hr className="hr"></hr>
              <img src={rup}className="rup"></img>
              <div className="rupees">300Rs </div>
              <div className="rrating">
              <img src={star} className="sstar"></img>
              <div className="rrt">4.6</div>
              </div>
            </div>
          </div></Link>
        </div>
        

        <div className='box'>
          <Link to="/service/card/indian">
          <div className='imgbor'>
            <div className='img'>
              <img src={img4} className='img1'></img>
              <div className='text'>
              Indian Wedding Cards</div>
              <img src={loc} className="locimg"></img>
              <div className="location">Chennai</div>
              <img src={eye} className="eye"></img>
              <div className="view">550 views</div>
              <hr className="hr"></hr>
              <img src={rup}className="rup"></img>
              <div className="rupees">500Rs</div>
              <div className="rrating">
              <img src={star} className="sstar"></img>
              <div className="rrt">4.3</div>
              </div>
            </div>
          </div></Link>
        </div>

        <div className='box'>
          <Link to="/service/vendors/KadambResort">
          <div className='imgbor'>
            <div className='img'>
              <img src={img5} className='img1'></img>
              <div className='text'>
              Subhash Traders  </div>
              <img src={loc} className="locimg"></img>
              <div className="location">Mumbai</div>
              <img src={eye} className="eye"></img>
              <div className="view">330 views</div>
              <hr className="hr"></hr>
              <img src={rup}className="rup"></img>
              <div className="rupees">1200Rs per Functionay</div>
              <div className="rrating">
              <img src={star} className="sstar"></img>
              <div className="rrt">4.1</div>
              </div>
            </div>
          </div></Link>
        </div>

        <div className='box'>
          <Link to="/service/vendors/Jalsa">
          <div className='imgbor'>
            <div className='img'>
              <img src={img6} className='img1'></img>
              <div className='text'>CLASSY CARDS</div>
              <img src={loc} className="locimg"></img>
              <div className="location">Goa</div>
              <img src={eye} className="eye"></img>
              <div className="view">500 views</div>
              <hr className="hr"></hr>
              <img src={rup}className="rup"></img>
              <div className="rupees">300Rs per Function</div>
              <div className="rrating">
              <img src={star} className="sstar"></img>
              <div className="rrt">4.2</div>
              </div>
            </div>
          </div></Link>
        </div>










        </div>
        </div>
    )
}
export default Card;