import React, { useState } from "react";
import "./Hospitals.css";
import center1 from "../assets/center1.png";
import likebutton from "../assets/likebutton.png";
import Appointments from "./Appointments";

const Hospitals = ({
    center,
    appointments,
    addAppointment,
    availableSlots,
    setAvailableSlots,
    readOnly,
  }) => {
    const [showLower, setShowLower] = useState(false);
  
    return (
      <div className="center">
        <div className="upper">
          <div className="leftimg">
            <img src={center1} alt="" />
          </div>
          <div className="middlepart">
            {readOnly ? <><h3>{center.hospital}</h3> <h6>
              {center.city}, {center.state}
            </h6></> : <><h3>{center["Hospital Name"]}</h3> <h6>
              {center.City}, {center.State}
            </h6></>}
            
            <p>Smilessence Center for Advanced Dentistry + 1</p>
            <p>more</p>
            <div>
              <span className="free">FREE</span>
              <span className="price">₹500</span>
              <span className="fee">Consultation fee at clinic</span>
            </div>
            <div className="likebutton">
              <img src={likebutton} alt=""  />
            </div>
          </div>
          {readOnly ?( <div className="mybookings">
            <div className="time">{center.time}</div>
            <div className="date">{center.date}</div>
          </div> )
          
          :
          ( 
          <div className="rightside">
            <p>Available Today</p>
            <button onClick={() => setShowLower(!showLower)}>
              Book FREE Center Visit
            </button>
          </div>
          )}
          
        </div>
        {showLower && (
          <div className="lower">
            <Appointments
              name={center["Hospital Name"]}
              state={center.State}
              city={center.City}
              appointments={appointments}
              addAppointment={addAppointment}
              availableSlots={availableSlots}
                      setAvailableSlots={setAvailableSlots}
            />
          </div>
        )}
      </div>
    );
  }
  export default Hospitals;