import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Media.css';

import img1 from "../assets/Images/img3.jpg";
import img2 from "../assets/Images/img4.jpg";
import img4 from "../assets/Images/img3.jpg";
import img5 from "../assets/gallery/Appikatla.jpg";
import img6 from "../assets/gallery/Bapatlaetheru.jpg";
import img7 from "../assets/gallery/Bapatlamap.jpg";
import img8 from "../assets/gallery/damarapalli.jpg";
import img9 from "../assets/gallery/damarapalli2.jpg";
import img10 from "../assets/gallery/kakani_Phase3.jpg";
import img11 from "../assets/gallery/KakaniPhase2.jpg";
import img12 from "../assets/gallery/KakaniPhase-4.jpg";
import img13 from "../assets/gallery/kantheru.jpg";
import img14 from "../assets/gallery/LamNewtownship.jpg";
import img15 from "../assets/gallery/lamphase12.jpg";
import img16 from "../assets/gallery/lamphase45.jpg";
import img17 from "../assets/gallery/lamvillage.jpg";
import img18 from "../assets/gallery/Lingapuram.jpg";
import img19 from "../assets/gallery/MangamuruOngole.jpg";
import img20 from "../assets/gallery/Ongole.jpg";
import img21 from "../assets/gallery/PalapaduDharaniPhaseI_II.jpg";
import img22 from "../assets/gallery/PALAPADULAY-OUT.jpg";
import img23 from "../assets/gallery/Piduguralla.jpg";
import img24 from "../assets/gallery/Annavaram.jpg";
import viedo1 from "../assets/viedo/viedo1.mp4";
import viedo2 from "../assets/viedo/viedeo2.mp4"; 

// Image and local video data
const images = [img1, img2, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24];

const videos = [
  viedo1,
  viedo2
];

const Media = () => {
  const [activeTab, setActiveTab] = useState('Images');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="gallery-section">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'Images' ? 'active' : ''}`}
          onClick={() => handleTabChange('Images')}
        >
          Images
        </button>
        <button
          className={`tab ${activeTab === 'Videos' ? 'active' : ''}`}
          onClick={() => handleTabChange('Videos')}
        >
          Videos
        </button>
      </div>

      {activeTab === 'Images' ? (
        <Carousel className="carousel-container" interval={3000} indicators={false} controls={true}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="carousel-image fade-in" />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <Carousel className="carousel-container" interval={1000} indicators={false} controls={true}>
          {videos.map((video, index) => (
            <Carousel.Item key={index}>
              <div className="video-wrapper fade-in">
                <video className="local-video" controls>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      )}

      <Button variant="warning" className="view-all animate-button">VIEW-ALL</Button>
    </section>
  );
};

export default Media;
