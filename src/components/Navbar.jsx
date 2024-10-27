import React,{useState} from "react";
import "./Navbar.css";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";

const Navbar=()=>{
  const navigate=useNavigate();
    return(
        <div>
            <header>
            <p >The health and well being of our patients and their health care team will always be our priority so we follow the best practices for cleanliness</p>
            <div className="navcomp">
  
          <img
        className="close"
        src={Logo}
        alt=""
          
        
      />
      <div className="navheading">
            <a
            onClick={() => {
              navigate("/findDoctor");
            }}
            >
              Find Doctors
            </a>
            <a>Hospitals</a>
            <a>Medicines</a>
            <a>Surgeries</a>
            <a>Software for Provider</a>
            <a>Facilities</a>
            <button
              onClick={() => {
                navigate("/myBookings");
              }}
            >
              My Bookings
            </button>
          
            </div>
            </div>
            </header>
        </div>
    

    )
}
export default Navbar;