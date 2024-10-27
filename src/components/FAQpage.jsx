import React,{useState} from "react";
import "./FAQpage.css";
import FAQ from "../assets/FAQ.png";
import smiley from "../assets/smiley.png";

import plus from "../assets/plus.png";


const FAQpage=()=>{
    return(
        <div className="faq-box">
             <h4>Get your answer</h4>
             <h1>Frequently Asked Questions</h1>
             <div className="full-box">
             <div className="image-section">
        <img className="doctor" src={FAQ} alt=""  />
        <img className="likes" src={smiley} alt="" />
        
        </div>
        <div className="faq-list">
            <div>
            <p>Why choose our medical for your family?</p>
            <img src={plus} alt=""  />
            </div>
            <div>
            <p>Why we are different from others?</p>
            <img src={plus} alt=""  />
            </div>
            <div>
            <p>Trusted & experience senior care & love</p>
            <img src={plus} alt=""   />
            </div>
            <div>
            <p>How to get appointment for emergency cases?</p>
            <img src={plus} alt=""   />
            </div>            
        </div>
             </div>
            
      
        </div>
    )
}
export default FAQpage;