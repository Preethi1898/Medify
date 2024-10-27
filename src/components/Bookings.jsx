import React, { useState } from "react";
import "./Bookings.css";
import Navbar from "./Navbar";
import oralhealth from "../assets/oralhealth.png";
import Hospitals from "./Hospitals";

const Bookings = ({appointments}) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar />
      <div className="blueSection">
      My Bookings
      </div>
      <div className="search-box">
        <div className="input-controll input-width">
         
          <input
            type="text"
            placeholder="search by hospital"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <button className="search-btn">
          
          Search
        </button>        
      </div>

      {appointments ? (
        <div className="medicalCenters">
          <div>
            <div>
              {appointments.length ? (
                appointments.map((center, index) => (
                  <Hospitals
                    center={center}
                    key={index}
                    readOnly

                  />
                ))
              ) : (
                <h1>No bookings yet</h1>
              )}
            </div>

            <img className="oralhealth" src={oralhealth} alt="" srcset="" />
          </div>
        </div>
      ) : (
        <h1 className="Nothing">Please Select State and City</h1>
      )}


    </>
  );
};

export default Bookings;