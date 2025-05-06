import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Media.css';
import img1 from "../assets/Images/img3.jpg";
import img2 from "../assets/Images/img4.jpg";
// import img3 from "../assets/Images/image.jpg";
import img4 from "../assets/Images/img3.jpg";


const images = [img1,img2,img4];
const videos = [
    '/path/to/video1.mp4',
    '/path/to/video2.mp4'
  ];

  const Media = () => {
    const [activeTab, setActiveTab] = useState('Images');
  
    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
  
    return (
      <section className="gallery-section">
        <div className="tabs">
          <button className={`tab ${activeTab === 'Images' ? 'active' : ''}`} onClick={() => handleTabChange('Images')}>Images</button>
          <button className={`tab ${activeTab === 'Videos' ? 'active' : ''}`} onClick={() => handleTabChange('Videos')}>Videos</button>
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
          <Carousel className="carousel-container" interval={3000} indicators={false} controls={true}>
            {videos.map((video, index) => (
              <Carousel.Item key={index}>
                <video controls className="carousel-video fade-in">
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
        <Button variant="warning" className="view-all">VIEW-ALL</Button>
      </section>
    );
  };
  


export default Media;
