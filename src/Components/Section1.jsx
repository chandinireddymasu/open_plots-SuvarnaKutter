import React from "react";
import { Carousel } from "react-bootstrap";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import img from "../assets/Images/home1.jpg";
import img1 from "../assets/Images/image4.jpg";
import img2 from "../assets/Images/homepage2.jpg";
import "../Components/Section1.css";

const ImageSlider = () => {
  return (
    <div className="carousel-container">
      <Carousel fade className="full-screen-carousel">
        <Carousel.Item>
          <img className="carousel-img" src={img} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={img1} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={img2} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

    
      <div className="floating-icons">
        <a
          href="https://wa.me/919999999999"
          className="icon whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a href="tel:9999999999" className="icon call">
          <FaPhoneAlt />
        </a>
      </div>
    </div>
  );
};

export default ImageSlider;