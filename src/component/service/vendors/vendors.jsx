import img1 from "../../../assets/ambrosia.jpg"
import img2 from "../../../assets/vrindwoods.jpg"
import img3 from "../../../assets/mark.jpg"
import img4 from "../../../assets/Hotel_Facade.jpg"
import img5 from "../../../assets/3063341kadamb_resort.jpg"
import img6 from "../../../assets/jalsa.jpg"
import loc from "../../../assets/location.jpg"
import eye from "../../../assets/eyeicon.jpg"
import rup from "../../../assets/rupee.jpg"
import star from "../../../assets/star.jpg"
import "./vendors.css"
import { Link } from "react-router-dom"



function Vendors(){
    return(
        
        <div>
            <h1 className="heading">Wedding Venues in India</h1>
            <div className='grid'>
        <div className='box'>
        <Link to="/service/vendors/Ambrosia">
          <div className='imgbor'>
            <div className='img'>
              <img src={img1} className='img1'></img>
              <div className='text' >
              Ambrosia Sarovar Portico </div>
              <img src={loc} className="locimg"></img>
              <div className="location">Hyderbad</div>
              <img src={eye} className="eye"></img>
              <div className="view">600 views</div>
              <hr className="hr"></hr>
              <img src={rup}className="rup"></img>
              <div className="rupees">1000Rs per day</div>
              <div className="rating">
              <img src={star} className="star"></img>
              <div className="rt">4.5</div>
              </div>


            </div>
          </div></Link>
        </div>


        <div className='box'>
          <div className='imgbor'>
            <div className='img'>
              <img src={img2} className='img1'></img>
              <div className='text'>
              The VrindWoods </div>
              <img src={loc} className="locimg"></img>
              <div className="location">Delhi</div>
              <img src={eye} className="eye"></img>
              <div className="view">400 views</div>
              <hr className="hr"></hr>
              <img src={rup}className="rup"></img>
              <div className="rupees">800Rs per day</div>
              <div className="rating">
              <img src={star} className="star"></img>
              <div className="rt">4.1</div>
              </div>
            </div>
          </div>
        </div>


        <div className='box'>
          <div className='imgbor'>
            <div className='img'>
              <img src={img3} className='img1'></img>
              <div className='text'>
              The Mark Hotel & Club </div>
              <img src={loc} className="locimg"></img>
              <div className="location">Jaipur</div>
              <img src={eye} className="eye"></img>
              <div className="view">1000 views</div>
              <hr className="hr"></hr>
              <img src={rup}className="rup"></img>
              <div className="rupees">1200Rs per day</div>
              <div className="rating">
              <img src={star} className="star"></img>
              <div className="rt">4.8</div>
              </div>
            </div>
          </div>
        </div>
        

        <div className='box'>
          <div className='imgbor'>
            <div className='img'>
              <img src={img4} className='img1'></img>
              <div className='text'>
              Hyatt Centric Rajpur Road  </div>
              <img src={loc} className="locimg"></img>
              <div className="location">Chennai</div>
              <img src={eye} className="eye"></img>
              <div className="view">1500 views</div>
              <hr className="hr"></hr>
              <img src={rup}className="rup"></img>
              <div className="rupees">700Rs per day</div>
              <div className="rating">
              <img src={star} className="star"></img>
              <div className="rt">3.8</div>
              </div>
            </div>
          </div>
        </div>

        <div className='box'>
          <div className='imgbor'>
            <div className='img'>
              <img src={img5} className='img1'></img>
              <div className='text'>
              Kadamb Resort  </div>
              <img src={loc} className="locimg"></img>
              <div className="location">Mumbai</div>
              <img src={eye} className="eye"></img>
              <div className="view">900 views</div>
              <hr className="hr"></hr>
              <img src={rup}className="rup"></img>
              <div className="rupees">2200Rs per day</div>
              <div className="rating">
              <img src={star} className="star"></img>
              <div className="rt">4.0</div>
              </div>
            </div>
          </div>
        </div>

        <div className='box'>
          <div className='imgbor'>
            <div className='img'>
              <img src={img6} className='img1'></img>
              <div className='text'>
              Jalsa Banquets </div>
              <img src={loc} className="locimg"></img>
              <div className="location">Goa</div>
              <img src={eye} className="eye"></img>
              <div className="view">750 views</div>
              <hr className="hr"></hr>
              <img src={rup}className="rup"></img>
              <div className="rupees">1300Rs per day</div>
              <div className="rating">
              <img src={star} className="star"></img>
              <div className="rt">4.4</div>
              </div>
            </div>
          </div>
        </div>










        </div>
        </div>
    )
}
export default Vendors;