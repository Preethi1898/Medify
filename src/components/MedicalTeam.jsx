import React from "react";
import "./MedicalTeam.css";
import { Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ahmadkhan from "../assets/ahmadkhan.png";
import heena from "../assets/heena.png";
import ankur from "../assets/ankur.png";

const MedicalTeam=()=>{
    return(
        <div className="medicalteam">
            <h2>Our Medical Specialist</h2>
            <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={3}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{ width: 1200 }}
      >
         <SwiperSlide>
          <div className="doctor-details">
            <div className="doc-image">
              <img className="image" src={ahmadkhan} alt="" srcset="" />
            </div>
            <div className="details">
              <h1>Dr. Ahmad Khan</h1>
              <p>Neurologist</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="doctor-details">
            <div className="doc-image">
              <img className="image" src={heena} alt="" srcset="" />
            </div>
            <div className="details">
              <h1>Dr. Heena Sachdeva</h1>
              <p>Orthopadics</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="doctor-details">
            <div className="doc-image">
              <img className="image" src={ankur} alt="" srcset="" />
            </div>
            <div className="details">
              <h1>Dr. Ankur Sharma</h1>
              <p>Medicine</p>
            </div>
          </div>
        </SwiperSlide>
        </Swiper>

        </div>
    )
}
export default MedicalTeam;