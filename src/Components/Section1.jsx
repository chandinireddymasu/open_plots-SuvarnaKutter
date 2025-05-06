import React from "react";
import { Carousel } from "react-bootstrap";
import img from "../assets/Images/home1.jpg";
import img1 from "../assets/Images/homepage.jpg";
import img2 from "../assets/Images/image4.jpg";
import "../Components/Section1.css";

const ImageSlider = () => {
  return (
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
  );
};

export default ImageSlider;
