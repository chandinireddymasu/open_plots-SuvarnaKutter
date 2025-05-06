import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ContactHome.css";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";


const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); // Auto close after 2 seconds
  };

  return (
    <div className="container">
      <div className="footer">
        <div className="corporate-office">
          <h3>CORPORATE OFFICE</h3>
          <p style={{fontSize:"13px",fontWeight:"700",color:"green"}}> <FaMapMarkerAlt  className="cicons"style={{ marginRight: "8px" }} /> F.No:9,3rd Ln ,Old Pichikala Gunta,  </p>

          <p style={{fontSize:"13px",fontWeight:"700",color:"green"}}>
          <FaMapMarkerAlt style={{ marginRight: "8px", visibility: "hidden" }} />
         
           Arundelpet,Guntur</p>
          <p style={{fontSize:"13px",fontWeight:"700",color:"green"}}>   <FaMapMarkerAlt   className="cicons" style={{ marginRight: "8px", visibility: "hidden" }} />Andhra Pradesh 522002</p>

          <p style={{fontSize:"13px",fontWeight:"700",color:"green"}}> <FaPhoneAlt  className="cicons" style={{ marginRight: "8px" }} /> 899977 7222</p>
          <p style={{fontSize:"13px",fontWeight:"700",color:"green"}} >  <FaEnvelope  className="cicons" style={{ marginRight: "8px" }} /> info@suvarnakuteer.co.in</p>

        </div>
        <div className="map">
        <motion.div 
                className="map-container"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                style={{ flex: 1, marginLeft: "20px" ,marginRight: "50px" }}
            >
               <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5028.511960840433!2d80.43704407445186!3d16.308397299079438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a755adeaaaaab%3A0x79745db1f49a5a58!2sf%2C%209%2C%203rd%20Ln%2C%20Old%20Pichikala%20Gunta%2C%20Arundelpet%2C%20Guntur%2C%20Andhra%20Pradesh%20522002!5e0!3m2!1sen!2sin!4v1738577941832!5m2!1sen!2sin"
          width="280"
          height="250"
          style={{ border: 0, borderRadius: "5px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
            </motion.div>

          </div>

        {/* <div className="quick-links">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Gallery</li>
           
            <li>Contact Us</li>
            
          </ul>
        </div> */}

        {/* <div className="projects">
          <h3>PROJECTS</h3>
          <ul>
            <li>Ongoing Projects</li>
            <li>Completed Projects</li>
            <li>Upcoming Projects</li>
          </ul>
        </div> */}

        <div className="quick-enquiry">
          <h3>QUICK ENQUIRY</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Contact no." required />
            <label>
              <input type="checkbox" required /> I agree to the Terms & Conditions
            </label>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Form submitted successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
