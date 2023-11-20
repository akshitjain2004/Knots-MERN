import React from "react";
import "../serverit/Serverit.css";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const FormTable = ({ handlesubmit, handleOnChange, handleclose, rest }) => {
    return (
        
        <div className="addcontainer1">
            <form onSubmit={handlesubmit}>
                <div className="close-btn1" onClick={handleclose}>
                    <IoMdClose className="close-btn2" />
                </div>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.name} />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={handleOnChange} value={rest.email} />
                <label htmlFor="name">Vendor Name: </label>
                <input type="text" id="vendorsname" name="vendorsname" onChange={handleOnChange} value={rest.vendorsname} />
                <label htmlFor="numberofguests">No of guests expected:</label>
                <input
                    type="number"
                    id="numberofguests"
                    name="numberofguests"
                    onChange={handleOnChange}
                    value={rest.numberofguests}
                />
                <label htmlFor="Foodtype">Veg (or) NonVeg:</label>
                <input type="text" id="Foodtype" name="Foodtype" onChange={handleOnChange} value={rest.Foodtype} />
                <label htmlFor="Date">From(dd/mm/yyyy)-to(dd/mm/yyyy)</label>
                <input type="text" id="Date" name="Date" onChange={handleOnChange} value={rest.Date} />
        
                <label htmlFor="otherrequirements">Any other Requirements:</label>
                <input
                    type="text"
                    id="otherrequirements"
                    name="otherrequirements"
                    className="des1"
                    onChange={handleOnChange}
                    value={rest.otherrequirements}
                />
          <button type="submit" className="sub11">   Submit</button>
           
            </form>
        </div>
     
    );
};

export default FormTable;
