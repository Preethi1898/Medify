import React from "react";
import "./BlogsandNews.css";
import detox from "../assets/detox.png";
import blogdoctor from "../assets/blogdoctor.png";
const BlogsandNews=()=>{
    return(
        <div className="blog-box">
            <h4>Blogs&News</h4>
            <h1>Read our Latest News</h1>
            <div className="blogs">
                <div className="blog-card">
                <img src={detox} alt="detox image"/>
                <div className="content">
                <h5>Medical <span>|</span> March 31, 2022</h5>
                <h3>6 Tips To Protect Your Mental Health When You’re Sick</h3>
                <div className="editor">
                    <img src={blogdoctor} alt=""  />
                    <h4>Rebecca Lee</h4>
                 </div>
                </div>
                </div>

                <div className="blog-card">
                <img src={detox} alt="detox image"/>
                <div className="content">
                <h5>Medical <span>|</span> March 31, 2022</h5>
                <h3>6 Tips To Protect Your Mental Health When You’re Sick</h3>
                <div className="editor">
                    <img src={blogdoctor} alt=""  />
                    <h4>Rebecca Lee</h4>
                 </div>
                </div>
                </div>

                <div className="blog-card">
                <img src={detox} alt="detox image"/>
                <div className="content">
                <h5>Medical <span>|</span> March 31, 2022</h5>
                <h3>6 Tips To Protect Your Mental Health When You’re Sick</h3>
                <div className="editor">
                    <img src={blogdoctor} alt=""  />
                    <h4>Rebecca Lee</h4>
                 </div>
                </div>
                </div>
                

            </div>
        </div>
    )
}
export default BlogsandNews;