
import React from "react";
import "./Caring.css";
import tick from "../assets/tick.png";
import caringimage from "../assets/caringimage.png";

const Caring = () => {
  return (
    <div className="caring-box">
      <img src={caringimage} alt="" srcset="" />
      <div>
        <h2>HELPING PATIENTS FROM AROUND THE GLOBE!!</h2>
        <h1><span>Patient</span> <span>Caring</span> </h1>
        <p>
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </p>
        <div style={{display:"flex"}}>
          <img src={tick} alt="" srcset="" />
          <p>Stay Updated About Your Health</p>
        </div>
        <div style={{display:"flex"}}>
          <img src={tick} alt="" srcset="" />
          <p>Check Your Results Online</p>
        </div>
        <div style={{display:"flex"}}>
          <img src={tick} alt="" srcset="" />
          <p>Manage Your Appointments</p>
        </div>
      </div>
    </div>
  );
};

export default Caring;