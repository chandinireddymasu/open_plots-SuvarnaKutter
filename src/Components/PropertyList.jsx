import React from 'react';
import PropertyCard from './PropertyCard';
import './PropertyCard.css';
import img1 from '../assets/Images/img3.jpg';
import img2 from '../assets/Images/img3.jpg';
import img3 from '../assets/Images/img3.jpg';
import img4 from '../assets/Images/img3.jpg';


const properties = [
  {
    title: 'Project1',
    description: 'A premium residential venture nestled in the serene surroundings of Kondurg, (Near Shadnagar).',
    image:img1, // Replace with actual image path
  },
  {
    title: 'Green Meadows',
    description: 'A luxurious farmland project offering peace and comfort.',
    image:img2,
    
  },
  {
    title: 'Hill View Residency',
    description: 'Experience the scenic beauty from your dream home.',
    image: img1,
  },
  {
    title: 'Project2',
    description: 'Swargaseema Sandalwood Farms provide DTCP approved plots for sale in Hyderabad.',
    image: img2,
  },
  {
    title: 'Hill View Residency',
    description: 'Experience the scenic beauty from your dream home.',
    image: img1,
  },
  {
    title: 'Project1',
    description: 'Swargaseema provide DTCP approved plots for sale in Hyderabad which anyone can buy at an affordable price.',
    image: img2,
  }
];

const PropertyList = () => {
  return (
    <div className="property-container">
      {properties.map((property, index) => (
        <PropertyCard key={index} {...property} />
      ))}
    </div>
  );
};

export default PropertyList;