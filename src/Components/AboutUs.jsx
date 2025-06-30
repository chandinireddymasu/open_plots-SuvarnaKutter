import React from 'react';
import { motion } from "framer-motion";
import houseImage1 from "../assets/Images/img3.jpg"; // Replace with actual images
import houseImage2 from "../assets/Images/img4.jpg";
import familyImage from "../assets/Images/image.png";
import { useNavigate } from 'react-router-dom';
import './AboutUs.css';

const milestonesData = [
  { icon: "✈️", title: "3200+", description: "Plots Handed Over" },
  { icon: "👍", title: "12", description: "Projects Delivered" },
  { icon: "✔️", title: "10 Lakh+", description: "Square Yards Developed" },
  { icon: "🤝", title: "Zero Dispute", description: "Clear Title Residential Plots" },
  { icon: "📄", title: "Transparent", description: "Documentation" },
  { icon: "⚖️", title: "Great", description: "Appreciation Potential" },
];

const AboutUs = () => {
  let navigate = useNavigate();


  return (
    <>
     <div className="about-container">
      <div className="overlay"></div>
      <div className="content">
        {/* <h1>About Us</h1> */}
        <div className="breadcrumb-container">
          <h2 style={{color:"white"}}>About Us</h2>
        </div>
      </div>

    </div>
    <div className="about-container2">
      <h2 style={{color: "#444"}}>About us</h2>
      {/* <h1>Creating Icons of Perfection!</h1> */}
      <p className="underline"></p>
      <p className='about-content'>
        At SR Group, converting land parcels into best lifestyle destinations is our passion. 
        Led by a first-generation young and dynamic managing director with more than two decades 
        of experience behind him, we comprise a team of professionals who are experts in 
        architecture, geology, town planning, finance, hospitality, IT, administration, and marketing.
      </p>
      <p className='about-content'>
        Driven by our goal and ambition to avail the best plots to buy in Hyderabad that 
        perceive and fulfill all of our customers’ requirements, we aspire to be among the 
        top developers in Hyderabad someday.
      </p>

      <div className="features-container">
        <div className="feature-box">
          <span className="icons">🎨</span>
          <h3>Immaculate Designs</h3>
          <p>Every square inch is crafted to ensure supreme quality and perfection.</p>
        </div>
        <div className="feature-box">
          <span className="icons">💰</span>
          <h3>Value-for-money Deals</h3>
          <p>We try our best to give maximum returns for the trust our customers show in us.</p>
        </div>
        <div className="feature-box">
          <span className="icons">⚡</span>
          <h3 className="prompt">Prompt Service</h3>
          <p>Time is a privilege, and we are always on our toes to deliver value to our customers.</p>
        </div>
        <div className="feature-box">
          <span className="icons">😊</span>
          <h3>Happy Community</h3>
          <p>
            We are building gated communities at prime locations of a metro city growing at a 
            fast pace.
          </p>
        </div>
      </div>

      <h2 className="exploring-heading">EXPLORING NEW AVENUES:</h2>
      <p className="underline"></p>
      <p>Plotting growth beyond Hyderabad to other states of India</p>
      <p>Diversifying portfolios for development of infrastructure</p>
    </div>
    <div className="milestones-container">
      <h2 className="title">MILESTONES & ADVANTAGES</h2>
      <div className="milestone-grid">
        {milestonesData.map((milestone, index) => (
          <div className="milestone fade-in" key={index}>
            <div className="icons">{milestone.icon}</div>
            <h3>{milestone.title}</h3>
            <p>{milestone.description}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="realtors-container">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
       Realtors for you.
      </motion.h1>

      <div className="realtors-content">
      <div className="background-dots"></div>
        {/* Images Section */}
        <motion.div
          className="realtors-images"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={houseImage1} alt="House 1" className="image-left" />
          <img src={houseImage2} alt="House 2" className="image-top-right" />
          <img src={familyImage} alt="Happy Family" className="image-bottom-right" />
        </motion.div>

        {/* Features List */}
        <motion.ul
          className="realtors-features"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {[
            "Great Appreciation on Investment",
            "Projects Located near High Growth Corridor",
            "Trust and Transparency",
            "Resale Support",
            "Free Site Visit",
            "Dedicated Account Manager",
            "Payment/Loan Facility",
            "Support on Registration Process",
          ].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              ✅ {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
    


    
        
         
          
       
          
          
       
    
    </>
  );
};

export default AboutUs;
