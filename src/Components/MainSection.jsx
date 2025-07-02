import React from "react";
import { Container } from "react-bootstrap";
import r from "../assets/Images/Refinance.png";
import h2 from "../assets/Images/home2.png";
import l from "../assets/Images/Loan.png";
import i3 from "../assets/Images/image3.png";
import { motion } from "framer-motion";
import "./MainSection.css"

// Animation Variants
const textVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const floatAnimation = {
  y: [0, -5, 0], // Moves up and down
  transition: {
    duration: 3,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};

const MainSection = () => {
  return (
    <Container fluid className="main-container" >
      {/* Section Header */}
      <Container className="section-header">
        <h3 style={{ fontWeight: "900",fontSize:"25px", color: "brown" }}>WHY CHOOSE SUVARNAKUTEER?</h3>
        <p style={{ fontSize: "2rem", fontWeight: "500" }}>Choose SuvarnaKuteer For A Better Tomorrow</p>
      </Container>

      {/* Icons Section */}
      <Container className="icons-container d-flex justify-content-evenly">
        <div className="icon-box">
          <motion.img src={h2} alt="Affordable Homes" className="icon-img" animate={floatAnimation} />
          <p style={{ fontWeight: "600", fontSize: "15px",fontFamily:"sans-serif",color:"black" }}>Affordable Luxurious Homes</p>
        </div>
        <div className="icon-box">
          <motion.img src={r} alt="Trusted Families" className="icon-img" animate={floatAnimation} />
          <p style={{ fontWeight: "600", fontSize: "15px",fontFamily:"sans-serif",color:"black" ,textAlign:"center"}}>Trusted By Hundreds of Happy Families</p>
        </div>
        <div className="icon-box">
          <motion.img src={l} alt="Loan Options" className="icon-img" animate={floatAnimation} />
          <p style={{ fontWeight: "600", fontSize: "15px",fontFamily:"sans-serif" ,color:"black"}}>Loan Options</p>
        </div>
      </Container>

      {/* Content & Image Section with Unique Scroll Animations */}
      <Container className="content-container">
        <motion.div
          className="text-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }} // Triggers at 50% view
          variants={textVariant}
        >
          <h6 className="text-success"  style={{fontWeight:"900",fontSize:"25px"}}>Your Trusted Partner in Real Estate</h6>
          <p  style={{fontFamily:"sans-serif",fontSize:"20px",color:"black",fontWeight:"500",letterSpacing:"0.1vw"}}>
            Choosing the right real estate partner is crucial for achieving your dream of owning a home. 
            At SuvarnaKuteer, we prioritize trust, quality, and customer satisfaction. Our team of experts 
            is committed to providing exceptional service and guidance throughout your home-buying journey.
          </p>
          <p style={{fontFamily:"sans-serif",fontSize:"20px",color:"black",fontWeight:"500",letterSpacing:"0.1vw"}}>
            With years of experience, transparent processes, and a wide range of properties to choose from, 
            we are confident in our ability to exceed your expectations. Let us help you make your dream a reality.
          </p>
          <ul style={{ listStyle: "none" }}>
            <li style={{fontFamily:"sans-serif",fontSize:"18px",color:"orangered",fontWeight:"500",letterSpacing:"0.1vw"}}>✅ Trusted By Hundreds of Happy Families</li>
            <li style={{fontFamily:"sans-serif",fontSize:"18px",color:"orangered",fontWeight:"500",letterSpacing:"0.1vw"}}>✅ Affordable Luxurious Homes</li>
            <li style={{fontFamily:"sans-serif",fontSize:"18px",color:"orangered",fontWeight:"500",letterSpacing:"0.1vw"}}>✅ Flexible Loan Options</li>
            <li style={{fontFamily:"sans-serif",fontSize:"18px",color:"orangered",fontWeight:"500",letterSpacing:"0.1vw"}}>✅ Commitment to Quality & Timely Delivery</li>
            <li style={{fontFamily:"sans-serif",fontSize:"18px",color:"orangered",fontWeight:"500",letterSpacing:"0.1vw"}}>✅ Transparent Transactions & Customer-Centric Approach</li>
          </ul>
        </motion.div>
        <motion.div
          className="image-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }} // Triggers at 50% view
          variants={imageVariant}
        >
          <img src={i3} alt="Real Estate" className="content-img" />
        </motion.div>
      </Container>
    </Container>
  );
};

export default MainSection;
