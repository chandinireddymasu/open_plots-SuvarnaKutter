import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar'
import Section1 from "./Components/Section1"
import CoreValues from './Components/CoreValue';
import WelcomeSection from './Components/Welcome';

import AboutUs from './Components/AboutUs';
import MainSection from './Components/MainSection';
import Steps from './Components/Steps';
import TestimonialsSection from './Components/Testimonials';
import Media from './Components/Media';
import ContactForm from './Components/ContactHome';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropertyList from './Components/PropertyList';
import Ongoing from './Components/Ongoing';
import Upcoming from './Components/upcoming';
import Completed from './Components/Completed';
import ContactBanner from './Components/Contact';
import SignIn from './Components/signin';
import Footer from './Components/Footer';



let App=()=>{
  return(
    <>
    <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={
        <>
        <Section1/>
    <CoreValues/>
    <WelcomeSection/>

       <div>
            <h2>Our Projects</h2>
            <PropertyList />
           
        </div>
        <br />
        <MainSection />
        <Steps />
        <TestimonialsSection />
        <Media />

        </>
      }
    
      />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/" element={<Ongoing />} />
      <Route path="/Projects/Ongoing" element={<Ongoing />} /> 
      <Route path="/Projects/Upcoming" element={<Upcoming />} /> 
      <Route path="/Projects/Completed" element={<Completed />} />
      <Route path="/Contact" element={<ContactBanner />} />
      <Route path="/signin" element={<SignIn />} />
    
    
      
    </Routes>
    
    
        <ContactForm />
        <Footer />

        

    

    </Router>
    </>
  )
} 
export default App;
