import React from "react";
import "./FindDoctors.css";
import Navbar from "./Navbar";

    import FAQpage from "./FAQpage";
    import roundtick from "../assets/roundtick.png";
    import Hospitals from "./Hospitals";
    import oralhealth from "../assets/oralhealth.png";

const FindDoctors=(
    {
        selectedState,
        setSelectedState,
        states,
        selectedCity,
        setSelectedCity,
        cities,
        medicalCenters,
        appointments,
        addAppointment,
        availableSlots,
        setAvailableSlots,
      }
)=>{
    return(
        <>
    <Navbar/>
    <div className="find-form">
    <div className="input-control">
         
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">Select a state</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className="input-control ">
         
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <button className="searchbutton">
          Search
        </button>
        </div>
        {selectedState ? (
        <div className="medicalCenters">
            <div>
              <div className="info">
                <h1>
                  {medicalCenters.length} medical centers available in{" "}
                  {selectedState}
                </h1>
                <h6>
                  <img src={roundtick} alt=""  />
                  Book appointments with minimum wait-time & verified doctor
                  details
                </h6>
              </ div>
              {medicalCenters.length ? (
                medicalCenters.map((center, index) => (
                  <Hospitals
                    center={center}
                    key={index}
                    appointments={appointments}
                    addAppointment={addAppointment}
                    availableSlots={availableSlots}
                    setAvailableSlots={setAvailableSlots}
                  />
                ))
              ) : (
                <h1>Loading ...</h1>
              )}
            </div>

            <img src={oralhealth} alt=""  />
          </div>
      ) : (
        <h1 className="disp">Please Select State and City</h1>
      )}

      <FAQpage/>
      
        </>
    )
}
export default FindDoctors;