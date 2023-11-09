import img1 from "../../assets/wedding-venu.jpg";
import img2 from "../../assets/wedding-caterer.jpg";
import img3 from "../../assets/wedding-photographer.jpg";
import img4 from "../../assets/wedding-cards.jpg";
import img5 from "../../assets/wedding-decorators.jpg";
import img6 from "../../assets/wedding-cake.jpg";
import "./Service.css";
import { Link } from "react-router-dom";
function Service() {
  return (
    <div>
      <div className="service-text">
      <h1 className="heading">Vendors by Category</h1>
      <p className="text-head">
        Browse vendors here by their categories like wedding lawns, marriage
        gardens, photographers, bridal wear, makeup artists and many more with
        Shaadiyari.
      </p></div>
      <div className="grid">
        <div className="box">
          <Link to="/service/vendors" className="text">
            <div className="imgbor">
              <div className="img">
                <img src={img1} className="img1" alt=""></img>
                <div>Wedding venues </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="box">
          <div className="imgbor">
            <div className="img">
              <img src={img2} className="img1" alt=""></img>
              <div className="text">Wedding Caterers </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="imgbor">
            <div className="img">
              <img src={img3} className="img1" alt=""></img>
              <div className="text">Wedding Photographer </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="imgbor">
            <div className="img">
              <img src={img4} className="img1" alt=""></img>
              <div className="text">Wedding Cards </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="imgbor">
            <div className="img">
              <img src={img5} className="img1" alt=""></img>
              <div className="text">Wedding Decorators </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="imgbor">
            <div className="img">
              <img src={img6} className="img1" alt=""></img>
              <div className="text">Wedding Cakes </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
