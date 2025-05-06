
import React from "react";
import "./Contact.css";
import bannerImg from "../assets/Images/contact2.jpeg";
import { useNavigate } from "react-router-dom";

const ContactBanner = () => {
    let navigate = useNavigate();
  return (
    
    <>
   
    <div
      className="contact-banner"
      style={{ backgroundImage: `url(${bannerImg})`,width:"100vw",  backgroundPosition: "center" }}
    >
      <div className="banner-overlay">
        <h1 className="banner-title">Contact us</h1>
        <div className="breadcrumb">
          <span>Home</span> <span>/</span> <span className="active">Contact us</span>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactBanner;
