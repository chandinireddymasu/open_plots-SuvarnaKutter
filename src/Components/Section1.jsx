import React from "react";
import { Carousel } from "react-bootstrap";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import img from "../assets/Images/home1.jpg";
import img1 from "../assets/Images/image4.jpg";
import img2 from "../assets/Images/homepage2.jpg";
import img3 from "../assets/Images/Neppal-Invitation.jpeg";
import img4 from "../assets/Images/nv-mon.jpeg"
import img5 from "../assets/Images/MLA-Brocher.jpg"
import img6 from "../assets/Images/Raghubabu-brocher.jpg"
import img7 from "../assets/Images/homebanner.jpg"
import "../Components/Section1.css";

const ImageSlider = () => {
  return (
    <div className="carousel-container">
      <Carousel fade className="full-screen-carousel">
        <Carousel.Item>
          <img className="carousel-img" src={img1} alt="Invitation slide2" loading="lazy" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img invite-img" src={img6} alt="Invitation slide" loading="lazy" />
        </Carousel.Item>
        {/* <Carousel.Item>
          <img className="carousel-img" src={img} alt="First slide" />
        </Carousel.Item> */}
        <Carousel.Item>
          <img className="carousel-img" src={img5} alt="Second slide" loading="lazy" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img invite-img" src={img7} alt="Invitation slide" loading="lazy" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={img2} alt="Third slide" loading="lazy" />
        </Carousel.Item>
      </Carousel>

    
      <div className="floating-icons">
        <a
          href="https://wa.me/918999777222"
          className="icon whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a href="tel:8999777222" className="icon call">
          <FaPhoneAlt />
        </a>
      </div>
    </div>
  );
};

export default ImageSlider;