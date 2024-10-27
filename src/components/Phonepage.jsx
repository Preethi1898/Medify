import React from "react";
import "./Phonepage.css";
import phone from "../assets/phone.png";
import arrow from "../assets/arrow.png";
import appstore from "../assets/appstore.png";
import googleplay from "../assets/googleplay.png";

const Phonepage=()=>{
    return (
        <div className="phone-download">
           <div>
                <img src={phone} alt="phones"/>
                <img src={arrow} alt="arrowdown"/>
           </div>
           <div>
        <h2>
          Download the <span>Medify</span> App
        </h2>
        <p>Get the link to download the app</p>
        <div className="input-button">
          <div className="input">
            <div>+91</div>
            <input type="text" placeholder="Enter phone number" />
          </div>
          <button className="smsS">Send SMS</button>
        </div>
        <div className="appgoogle">
          <img src={googleplay} alt="" srcset="" />
          <img src={appstore} alt="" srcset="" />
        </div>
      </div>
        </div>
    )
}
export default Phonepage;
