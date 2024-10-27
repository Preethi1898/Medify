import React,{useState} from "react";
import "./HeroSection.css";
import {Swiper,SwiperSlide} from "swiper/react";
import Navbar from "./Navbar";
import Herodoctors from "../assets/Herodoctors.png";
import Doctor from "../assets/Doctor.png";
import Capsule from "../assets/Capsule.png";
import Ambulance from "../assets/Ambulance.png";
import Drugstore from "../assets/Drugstore.png";
import Hospital from "../assets/Hospital.png";
import Offer1 from "../assets/Offer1.png";
import Offer2 from "../assets/Offer2.png";
import Offer3 from "../assets/Offer3.png";
import { Pagination, A11y } from "swiper/modules";
import Specialists from "./Specialists";
import MedicalTeam from "./MedicalTeam";
import BlogsandNews from "./BlogsandNews";
import Caring from "./Caring";
import Family from "./Family";
import FAQpage from "./FAQpage";


const HeroSection=({
    selectedState,
    setSelectedState,
    states,
    selectedCity,
    setSelectedCity,
    cities,
  })=>{
    return(
        <div className="mainhero">
            <Navbar/>
            <div className="Herobox">
                <div className="Herotext">
                <h3>
              Skip the travel! Find Online <span>Medical</span>{" "}
              <span>Centers</span>
            </h3>
            <p>
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </p>
            <button>
              Find Centers
            </button>
                </div>
            <img src={Herodoctors} alt="Heroimage"/>
            </div>
            <div className="suggestion-form">
                <div className="inner-form">
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
                
                
                <button>Search</button>
                </div>
                <h3 style={{color:"black"}}>You may be looking for</h3>
                
                <div className="suggestions">
                <div>
              <img src={Doctor} alt="" />
              <h6>Doctors</h6>
            </div>
            <div>
              <img src={Drugstore} alt="" />
              <h6>Labs</h6>
            </div>
            <div>
              <img src={Hospital} alt="" />
              <h6>Hospitals</h6>
            </div>
            <div>
              <img src={Capsule} alt="" />
              <h6>Medical Store</h6>
            </div>
            <div>
              <img src={Ambulance} alt="" />
              <h6>Ambulance</h6>
            </div>
                </div>
            </div>
            
            <div className="offer-area">
            <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={3}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            style={{ width: 1250 }}
          >
      <SwiperSlide>
      <img className="offer" src={Offer1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img className="offer" src={Offer2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img className="offer" src={Offer3} alt=""  />
      </SwiperSlide>
      
      
    </Swiper>
            </div>
           <Specialists/>
           <MedicalTeam/>
           <Caring/>
           <BlogsandNews/>
           <Family/>
           <FAQpage/>
           
        </div>
    )
}
export default HeroSection;