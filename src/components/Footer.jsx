import React from "react";
import "./Footer.css";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import pinterest from "../assets/facebook.png";
import Logo from "../assets/Logo.png";
import arrowicon from "../assets/arrowicon.png";
const Footer=()=>{
    return(
        <div className="footer-box">
              <div className="footer">
        <div className="footerlogo">
          <img src={Logo} alt="logo" />
          <div>
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={youtube} alt="youtube" />
            <img src={pinterest} alt="pintrest" />
          </div>
        </div>

        <div className="col-1">
          <i>
            <img className="arrow" src={arrowicon} alt="arrow" />
            About Us
          </i>
          <i>
            <img className="arrow" src={arrowicon} alt="arrow" />
            Our Pricing
          </i>
          <i>
            <img className="arrow" src={arrowicon} alt="arrow" />
            Our Gallery
          </i>
          <i>
            <img className="arrow" src={arrowicon} alt="arrow" />
            Appointment
          </i>
          <i>
            <img className="arrow" src={arrowicon} alt="arrow" />
            Privacy Policy
          </i>
        </div>
        <div className="col-1">
          <i>
            <img className="arrow" src={arrowicon} alt="arrow" />
            Orthology
          </i>
          <i>
            <img className="arrow" src={arrowicon} alt="arrow" />
            Neurology
          </i>
          <i>
            <img className="arrow" src={arrowicon} alt="arrow" />
            Dental Care
          </i>
          <i>
            <img className="arrow" src={arrowicon} alt="arrow" />
            Opthalmology
          </i>
          <i>
            <img className="arrow" src={arrowicon} alt="arrow" />
            Cardiology
          </i>
        </div>
        <div className="col-1 sm">
          <i>
            <img className="arrow" src={arrowicon} alt="arrow" />
            About Us
          </i>
          <i>
            <img className="arrow" src={arrowicon} alt="arrow" />
            Our Pricing
          </i>
          <i>
            <img className="arrow" src={arrowicon} alt="arrow" />
            Our Gallery
          </i>
          <i>
            <img className="arrow" src={arrowicon} alt="arrow" />
            Appointment
          </i>
          <i>
            <img className="arrow" src={arrowicon} alt="arrow" />
            Privacy Policy
          </i>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
      </div>  
        </div>
    )
}
export default Footer;