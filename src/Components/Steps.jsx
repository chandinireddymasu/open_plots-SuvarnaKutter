

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import image1 from "../assets/Images/image10.jpg";
import image2 from "../assets/Images/image9.jpg";
import image3 from "../assets/Images/image2.jpg";
import "./Steps.css"

// Animation Variants for Images
const imageTopVariant = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const imageBottomVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const imageMiddleVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

// Text and Icon Animations
const textVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const iconVariant = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const Steps = () => {
  return (
    <Container fluid className="container2">
      <Row className="align-items-center flex-column-reverse flex-md-row">
        {/* Left Side - Images */}
        <Col md={6} className="image-section">
          <motion.img
            src={image1}
            className="img-fluid image1"
            alt="Happy family moving in"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageTopVariant}
          />

          <motion.img
            src={image2}
            className="img-fluid image2"
            alt="Consultation with agent"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageBottomVariant}
          />

          <motion.img
            src={image3}
            className="img-fluid image3"
            alt="Secure your investment"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageMiddleVariant}
          />
        </Col>

        {/* Right Side - Content */}
        <Col md={6} className="content">
          <motion.h6
            className="text-danger fw-bold main"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariant}
          >
            HOW IT WORKS
          </motion.h6>

          <motion.h2
            className="fw-bold text-dark heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariant}
          >
            Our Simple 3-Step Process
          </motion.h2>

          <br />

          {/* Step 1 */}
          <motion.div
            className="step d-flex align-items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariant}
          >
            <motion.div initial="hidden" whileInView="visible" variants={iconVariant}>
              <FontAwesomeIcon icon={faAnglesRight} className="step-icon" />
            </motion.div>

            <div>
              <h5 className="heading">Explore Our Properties</h5>
              <p style={{fontFamily:"sans-serif",fontSize:"15px",color:"black",fontWeight:"500",letterSpacing:"0.1vw"}}>
                Browse our diverse range of residential and commercial projects to find the perfect match for your needs.
              </p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="step d-flex align-items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariant}
          >
            <motion.div initial="hidden" whileInView="visible" variants={iconVariant}>
              <FontAwesomeIcon icon={faAnglesRight} className="step-icon" />
            </motion.div>

            <div>
              <h5 className="heading">Schedule A Consultation</h5>
              <p style={{fontFamily:"sans-serif",fontSize:"15px",color:"black",fontWeight:"500",letterSpacing:"0.1vw"}}>Contact our team to discuss your preferences, ask questions, and receive personalized guidance.</p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="step d-flex align-items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariant}
          >
            <motion.div initial="hidden" whileInView="visible" variants={iconVariant}>
              <FontAwesomeIcon icon={faAnglesRight} className="step-icon" />
            </motion.div>

            <div>
              <h5 className="heading" >Secure Your Investment</h5>
              <p style={{fontFamily:"sans-serif",fontSize:"15px",color:"black",fontWeight:"500",letterSpacing:"0.1vw"}}>
                Once you’ve chosen a property, we’ll assist you with the necessary documentation and payment procedures
                to finalize your purchase.
              </p>
            </div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Steps;
