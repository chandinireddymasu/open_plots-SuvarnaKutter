import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/Images/logo1.png";
// import '../Components/Script.js'
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu
import { Router, useNavigate,NavLink } from 'react-router-dom';
 // Import CSS file
 import "../Components/NavBar.css";

const NavBar = () => {
  let  navigate = useNavigate();
  function aboutus(){
            navigate('/AboutUs.jsx')
          }
  function Ongoing(){
            navigate('/Ongoing.jsx')
          }
  function Upcoming(){
            navigate('/Upcoming.jsx')
    }
    function Completed(){
            navigate('/Completed.jsx')
    }
    

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navBar ${scrolled ? "scrolled" : ""}`}>
      <div className="navContainer">
        {/* Logo */}
        <Link to="/">
          <img src={img1} alt="Logo" className="logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="navLinks">
          <Link to="/" className="navItem">Home</Link>
          <Link to="/AboutUs" className="navItem">About Us</Link>
          <div className="dropdown">
            <span className="navItem">Projects</span>
            <div className="dropdown-content">
              <Link to="/projects/Ongoing">Ongoing Projects</Link>
              <Link to="/projects/Upcoming">Upcoming Projects</Link>
              <Link to="/projects/Completed">Completed Projects</Link>
            </div>
          </div>
          <Link to="/Contact" className="navItem">Contact Us</Link>
        </div>

        {/* Sign Up Button */}
        
        <Link to="/signup" className="signUpBtn">Sign Up</Link>

        {/* Mobile Menu Button */}
        <button className="menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="mobileMenu">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/AboutUs" onClick={() => setMenuOpen(false)}>About Us</Link>
          <details>
            <summary>Projects</summary>
            <div className="mobileDropdown">
            {/* <Link to="./" onClick={() => setMenuOpen(false)}>Ongoing Projects</Link> */}


              <Link to="/projects/Ongoing" onClick={() => setMenuOpen(false)}>Ongoing Projects</Link>
              <Link to="/projects/Upcoming" onClick={() => setMenuOpen(false)}>Upcoming Projects</Link>
              <Link to="/projects/Completed" onClick={() => setMenuOpen(false)}>Completed Projects</Link>
            </div>
          </details>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          <Link to="/signup" className="mobileSignUpBtn" onClick={() => setMenuOpen(false)}>Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
