import React,{useState} from "react";
import Drugstore from "../assets/Drugstore.png";
import BloodSample from "../assets/BloodSample.png";
import HeartRate from "../assets/HeartRate.png";
import HeartRateMonitor from "../assets/HeartRateMonitor.png";
import Immune from "../assets/Immune.png";
import Stethoscope from "../assets/Stethoscope.png";
import Xray from "../assets/Xray.png";
import "./Specialists.css";

const Specialists=()=>{
    return(
        <div className="specialists">
            <h2>Find By Specialisation</h2>
            <div className="spl-box">
            <div className="box">
                <img src={Drugstore} alt="" srcset="" />
                <h3>Dentistry</h3>
            </div>
            <div className="box">
                <img src={Stethoscope} alt="" srcset="" />
                <h3>Primary Care</h3>
            </div>
            <div className="box">
                <img src={HeartRate} alt="" srcset="" />
                <h3>Cardiology</h3>
            </div>
            <div className="box">
                <img src={HeartRateMonitor} alt="" srcset="" />
                <h3>MRI Resonance</h3>
            </div>
            <div className="box">
                <img src={BloodSample} alt="" srcset="" />
                <h3>Blood Test</h3>
            </div>
            <div className="box">
                <img src={Immune} alt="" srcset="" />
                <h3>Piscologist</h3>
            </div>
            <div className="box">
                <img src={Drugstore} alt="" srcset="" />
                <h3>Laboratory</h3>
            </div>
            <div className="box">
                <img src={Xray} alt="" srcset="" />
                <h3>X-Ray</h3>
            </div>
               <button>View All</button>
            </div>
        </div>
    )
}
export default Specialists;