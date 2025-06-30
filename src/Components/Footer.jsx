import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub
} from "react-icons/fa";
import "./Footer.css";


const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container style={{ backgroundColor: "#000", padding: "20px" }}>
        <Row className="justify-content-center mb-3">
          <Col md="auto" className="text-center">
            <h5 className="footer-heading">Suvarnakuteer Pvt. Ltd.</h5>
            <p className="footer-description">
              Building Dreams, One Home at a Time
            </p>
            
          </Col>
        </Row>
       
        <Row className="justify-content-center mb-3">
          <Col md="auto" className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#1877f3", // Facebook blue
                borderRadius: "50%",
                
                display: "inline-block",
                marginRight: "10px",
                color: "white"
              }}
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                borderRadius: "50%",
              
                display: "inline-block",
                marginRight: "10px",
                color: "white"
              }}
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
               
                display: "inline-block",
                
                color: "red"
              }}
            >
              <FaYoutube />
            </a>
          </Col>
        </Row>

        <Button variant="danger" href="/Contact">
              Contact Us
            </Button>
            
     
      </Container>
       <Row className="justify-content-center">
          <Col md="auto" className="text-center copyright" style={{ color: "white" }}>
            © 2015 Suvarnakuteer Pvt. Ltd. All rights reserved.
          </Col>
          
        </Row>
    </footer>
  );
};

export default Footer;
