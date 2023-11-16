import img1 from "../../../assets/pradhan-main.png"
import img2 from "../../../assets/milan.jpg"
import img3 from "../../../assets/new-patel.png"
import img4 from "../../../assets/images_(1).jpg"
import img5 from "../../../assets/signature.jpeg"
import img6 from "../../../assets/foodwala-ashoka-garden-bhopal-caterers-9ujgh-250.jpg"
import loc from "../../../assets/location.jpg"
import eye from "../../../assets/eyeicon.jpg"
import rup from "../../../assets/rupee.jpg"
import star from "../../../assets/star.jpg"
import "./Caterers.css"
import { Link } from "react-router-dom"



function Caterers(){
    return(
        
        <div className="catererpage">
            <h1 className="heading">Wedding Caterers in India</h1>
            <div className='vgrid'>
        <div className='box'>
        <Link to="/service/Caterers/Pradhan">
          <div className='imgbor'>
            <div className='img'>
              <img src={img1} className='img1'></img>
              <div className='text' >
              Pradhan Mandapam </div>
              <img src={loc} className="locimg"></img>
              <div className="location">Hyderbad</div>
              <img src={eye} className="eye"></img>
              <div className="view">700 views</div>
              <hr className="hr"></hr>
              <img src={rup}className="rup"></img>
              <div className="rupees">400Rs per day</div>
              <div className="rrating">
              <img src={star} className="sstar"></img>
              <div className="rrt">4.0</div>
              </div>


            </div>
          </div></Link>
        </div>


        <div className='box'>
        <Link to="/service/Caterers/Milan">
          <div className='imgbor'>
            <div className='img'>
              <img src={img2} className='img1'></img>
              <div className='text'>
              Milan Tent & Catering </div>
              <img src={loc} className="locimg"></img>
              <div className="location">Delhi</div>
              <img src={eye} className="eye"></img>
              <div className="view">1600 views</div>
              <hr className="hr"></hr>
              <img src={rup}className="rup"></img>
              <div className="rupees">800Rs per day</div>
              <div className="rrating">
              <img src={star} className="sstar"></img>
              <div className="rrt">4.3</div>
              </div>
            </div>
          </div></Link>
        </div>


        <div className='box'>
          <Link to="/service/Caterers/Patel">
          <div className='imgbor'>
            <div className='img'>
              <img src={img3} className='img1'></img>
              <div className='text'>
              New Patel Cattering</div>
              <img src={loc} className="locimg"></img>
              <div className="location">Jaipur</div>
              <img src={eye} className="eye"></img>
              <div className="view">900 views</div>
              <hr className="hr"></hr>
              <img src={rup}className="rup"></img>
              <div className="rupees">700Rs per day</div>
              <div className="rrating">
              <img src={star} className="sstar"></img>
              <div className="rrt">4.1</div>
              </div>
            </div>
          </div></Link>
        </div>
        

        <div className='box'>
          <Link to="/service/Caterers/Kum">
          <div className='imgbor'>
            <div className='img'>
              <img src={img4} className='img1'></img>
              <div className='text'>
              Kum Kum Tent House </div>
              <img src={loc} className="locimg"></img>
              <div className="location">Chennai</div>
              <img src={eye} className="eye"></img>
              <div className="view">300 views</div>
              <hr className="hr"></hr>
              <img src={rup}className="rup"></img>
              <div className="rupees">450Rs per day</div>
              <div className="rrating">
              <img src={star} className="sstar"></img>
              <div className="rrt">3.7</div>
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
              Signature Caterers  </div>
              <img src={loc} className="locimg"></img>
              <div className="location">Mumbai</div>
              <img src={eye} className="eye"></img>
              <div className="view">660 views</div>
              <hr className="hr"></hr>
              <img src={rup}className="rup"></img>
              <div className="rupees">450Rs per day</div>
              <div className="rrating">
              <img src={star} className="sstar"></img>
              <div className="rrt">4.2</div>
              </div>
            </div>
          </div></Link>
        </div>

        <div className='box'>
          <Link to="/service/vendors/Jalsa">
          <div className='imgbor'>
            <div className='img'>
              <img src={img6} className='img1'></img>
              <div className='text'>
              Foodwala Catering Service </div>
              <img src={loc} className="locimg"></img>
              <div className="location">Goa</div>
              <img src={eye} className="eye"></img>
              <div className="view">800 views</div>
              <hr className="hr"></hr>
              <img src={rup}className="rup"></img>
              <div className="rupees">300Rs per day</div>
              <div className="rrating">
              <img src={star} className="sstar"></img>
              <div className="rrt">3.9</div>
              </div>
            </div>
          </div></Link>
        </div>










        </div>
        </div>
    )
}
export default Caterers;