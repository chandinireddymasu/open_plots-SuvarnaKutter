import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" loading="lazy" />
      <div className="card-content">
        <h3 style={{fontSize:"15px",fontWeight:"500",color:"green"}}>{title}</h3>
        <p style={{fontSize:"15px",fontWeight:"500",color:"black"}}>{description}</p>
        <button className="read-more">READ MORE</button>
      </div>
    </div>
  );
};

export default PropertyCard;