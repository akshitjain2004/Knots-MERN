import React from 'react';
import './Ambrosia.css'; // Make sure to import your CSS file

import loc from '../../../../assets/location.jpg';
import group from '../../../../assets/group.jpg';
import rate from '../../../../assets/Noun_Project_Star_icon_370530_cc.svg.svg';
import like from '../../../../assets/iconmonstr-heart-thin.svg';
import tick from '../../../../assets/tick.jpg';
import imf from '../../../../assets/ambrosia.jpg';
import cart from '../../../../assets/cart.svg';
import { Link } from 'react-router-dom'

function Ambrosia() {
    return (
        <div className="ambody">
            <div className="backf">
                <h1 className="hheading">Ambrosia Sarovar Portico</h1>
                
                <img src={imf} alt="" className="weblovc" />
                <img src={loc} className="imgloc1" alt="Location" />
                <div className="cart">
                <Link to="/server">   <button className="cartf">
                <i class="uil uil-message"></i>
                        Message Us
                    </button></Link>
                </div>
                <div className="loc1">Hyderabad</div>
                <img src={group} className="visicon1" alt="Group Icon" />
                <div className="number1">Visitor Number-800</div>
                <div className="like1">
                    <div className="icon">
                        <img src={like} className="love" alt="Heart Icon" />
                        Add To Wishlist
                    </div>
                </div>
            </div>
            <hr />
            <div className="overview">
                <h2 className="head1">Overview</h2>
                <hr />
                <div className="veg">
                    <div>
                        <button className="vegbutton">Veg <br />1250Rs </button>
                    </div>
                </div>
                <div className="nonveg">
                    <div>
                        <button className="nonvegbutton">NonVeg <br />1500Rs </button>
                    </div>
                </div>
            </div>
            <div className="about">
                <h2 className="abhead">About</h2>
                <hr />
                <p>
                    Ambrosia Sarovar Portico, established in 2010, is located in Haridwar. We have covered 200 weddings
                    yet. Ambrosia Sarovar Portico offers the ideal setting for events of every size, from intimate
                    get-togethers to lavish wedding festivities. We provide the ideal ambiance, competent service,
                    excellent food, and well-kept locations to turn any occasion into a gorgeous and outstanding
                    event. This is the place to pick if you're seeking for a gorgeous location to hold any of your
                    nuptial ceremonies with elegance.
                </p>
            </div>
            <div className="specification">
                <h1 className="sphead">Special Specifications</h1>
                <hr />
                <div className="jk">
                    <div className="grid">
                        <div className="box1">
                            <img src={tick} className="tick" alt="Tick Icon" />
                            Electricity Backup
                        </div>
                        <div className="box1">
                            <img src={tick} className="tick" alt="Tick Icon" />
                            Air-conditioned
                        </div>
                        <div className="box1">
                            <img src={tick} className="tick" alt="Tick Icon" />
                            Restaurant
                        </div>
                        <div className="box1">
                            <img src={tick} className="tick" alt="Tick Icon" />
                            Bar
                        </div>
                        <div className="box1">
                            <img src={tick} className="tick" alt="Tick Icon" />
                            Conference Center
                        </div>
                        <div className="box1">
                            <img src={tick} className="tick" alt="Tick Icon" />
                            Wifi
                        </div>
                        <div className="box1">
                            <img src={tick} className="tick" alt="Tick Icon" />
                            Spa
                        </div>
                        <div className="box1">
                            <img src={tick} className="tick" alt="Tick Icon" />
                            Valet Parking
                        </div>
                        <div className="box1">
                            <img src={tick} className="tick" alt="Tick Icon" />
                            Bridal Room
                        </div>
                        <div className="box1">
                            <img src={tick} className="tick" alt="Tick Icon" />
                            Parking
                        </div>
                    </div>
                </div>
            </div>
            <div className="spec">
                <h2 className="abhead">*Policies</h2>
                <hr />
                <br />
                <h3>Payment Policy</h3>
                <p>Up to 50% Advance while booking</p>
                <br />
                <h3>Cancellation Policy</h3>
                <p>No Refund</p>
            </div>
            <div className="rating">
                <h2>Ratings</h2>
                <hr />
                <img src={rate} className="rrr" alt="Rating Icon" />
                <h1>4.5</h1>
                <p className="kk">rating</p>
            </div>
        </div>
    );
}

export default Ambrosia;