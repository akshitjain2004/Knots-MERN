import img1 from "../../../assets/imgg1.jpg"
import img2 from "../../../assets/img2.jpeg"
import img3 from "../../../assets/img3.jpg"
import img4 from "../../../assets/img4.jpg"
import img5 from "../../../assets/img5.jpeg"
import img6 from "../../../assets/img6.jpg"
import loc from "../../../assets/location.jpg"
import eye from "../../../assets/eyeicon.jpg"
import rup from "../../../assets/rupee.jpg"
import star from "../../../assets/star.jpg"
import "./photo.css"
import { Link } from "react-router-dom"



function Photo(){
    return(
        
        <div className="photopgraphy">
            <h1 className="heading">Wedding Photographers in India</h1>
            <div className='vgrid'>
        <div className='box'>
        <Link to="/service/photo/lakshmi">
          <div className='imgbor'>
            <div className='img'>
              <img src={img1} className='img1'></img>
              <div className='text' >
              Laxmi Studios </div>
              <img src={loc} className="locimg"></img>
              <div className="location">Hyderbad</div>
              <img src={eye} className="eye"></img>
              <div className="view">450 views</div>
              <hr className="hr"></hr>
              <img src={rup}className="rup"></img>
              <div className="rupees">20000Rs </div>
              <div className="rrating">
              <img src={star} className="sstar"></img>
              <div className="rrt">4.7</div>
              </div>


            </div>
          </div></Link>
        </div>


        <div className='box'>
        <Link to="/service/photo/Flash">
          <div className='imgbor'>
            <div className='img'>
              <img src={img2} className='img1'></img>
              <div className='text'>
              Flash Back Film</div>
              <img src={loc} className="locimg"></img>
              <div className="location">Delhi</div>
              <img src={eye} className="eye"></img>
              <div className="view">600 views</div>
              <hr className="hr"></hr>
              <img src={rup}className="rup"></img>
              <div className="rupees">10000Rs </div>
              <div className="rrating">
              <img src={star} className="sstar"></img>
              <div className="rrt">4.1</div>
              </div>
            </div>
          </div></Link>
        </div>


        <div className='box'>
          <Link to="/service/photo/Bandhan">
          <div className='imgbor'>
            <div className='img'>
              <img src={img3} className='img1'></img>
              <div className='text'>
              THE WEDDING BANDHAN</div>
              <img src={loc} className="locimg"></img>
              <div className="location">Jaipur</div>
              <img src={eye} className="eye"></img>
              <div className="view">1000 views</div>
              <hr className="hr"></hr>
              <img src={rup}className="rup"></img>
              <div className="rupees">15000Rs </div>
              <div className="rrating">
              <img src={star} className="sstar"></img>
              <div className="rrt">4.1</div>
              </div>
            </div>
          </div></Link>
        </div>
        

        <div className='box'>
          <Link to="/service/photo/safar">
          <div className='imgbor'>
            <div className='img'>
              <img src={img4} className='img1'></img>
              <div className='text'>
              Safarsaga Films </div>
              <img src={loc} className="locimg"></img>
              <div className="location">Chennai</div>
              <img src={eye} className="eye"></img>
              <div className="view">550 views</div>
              <hr className="hr"></hr>
              <img src={rup}className="rup"></img>
              <div className="rupees">15000Rs</div>
              <div className="rrating">
              <img src={star} className="sstar"></img>
              <div className="rrt">4.8</div>
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
              Partap Photography  </div>
              <img src={loc} className="locimg"></img>
              <div className="location">Mumbai</div>
              <img src={eye} className="eye"></img>
              <div className="view">750 views</div>
              <hr className="hr"></hr>
              <img src={rup}className="rup"></img>
              <div className="rupees">12000Rs per Functionay</div>
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
              <div className='text'>Dheer Photography Studio</div>
              <img src={loc} className="locimg"></img>
              <div className="location">Goa</div>
              <img src={eye} className="eye"></img>
              <div className="view">980 views</div>
              <hr className="hr"></hr>
              <img src={rup}className="rup"></img>
              <div className="rupees">30000Rs per Function</div>
              <div className="rrating">
              <img src={star} className="sstar"></img>
              <div className="rrt">4.4</div>
              </div>
            </div>
          </div></Link>
        </div>










        </div>
        </div>
    )
}
export default Photo;