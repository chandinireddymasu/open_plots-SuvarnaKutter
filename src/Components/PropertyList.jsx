import React from 'react';
import PropertyCard from './PropertyCard';
import './PropertyCard.css';
import img1 from '../assets/Images/img3.jpg';
import img2 from '../assets/Images/img3.jpg';
import newtownship from '../assets/Images/newtownship_arch.jpg';
import damarapalli from '../assets/Images/damarapalli2.jpg';
import kantheru from '../assets/Images/kantheru.jpg';
import logillu from '../assets/Images/logillu.jpg';
import sukhibava from '../assets/Images/sukhibava2.jpg';
import healthcity from '../assets/Images/healthcity.jpg';


const properties = [
  {
    title: "NEW TOWNSHIP",
    location: "NEW TOWNSHIP, LAM, Amaravati Road, Guntur, AP",
    size: "200 to 600 sq. yards",
    description: "Our DTCP and CRDA approved venture near Lam, Guntur offers 455+ open plots across 6 phases, complete with essential amenities like a Children's park, Yoga space, Gym, Street Lights, Avenue plants, Compound wall, and water tank and many more amneties. We have all banks loan facility and all type of payment methods.",
    image: newtownship
  },
  {
    title: "DAMARAPALLI PHASE 2",
    location: "DAMARAPALLI PHASE 2, Amaravati, AP",
    size: "200 to 600 sq. yards",
    description: "We developed a premium open plots venture spread across 26 acres with 300+ well-planned plots, offering all modern amenities. The venture is strategically located near the Amaravati Inner Ring Road, ensuring excellent connectivity. It is also close to leading educational institutions, making it ideal for families and investors..",
    image: damarapalli
  },
  {
    title: "KANTHERU PHASE 2",
    location: "KANTHERU PHASE 2, Amaravati, AP",
    size: "200 to 600 sq. yards",
    description: "Kantheru is experiencing a surge in development, driven by its proximity to the Amaravati capital region and ongoing infrastructure projects. This makes it an attractive location for both residential and investment purposes. The area is witnessing rapid appreciation in land value, making now the perfect time to invest.",
    image: kantheru
  },
  {
    title: "LOGILLU",
    location: "LOGILLU Phase 2, Mangamuru Road, ONGOLE, AP",
    size: "150 to 300 sq. yards",
    description: "Ongole is a rapidly growing city in Andhra Pradesh, benefiting from strong highway connectivity and participation in the Amrit Bharat Scheme. The city relies on its Summer Storage Tank for drinking water and has seen significant development, including a 25-acre open plot venture with comprehensive facilities, greenery, and wide roads....",
    image: logillu
  },
  {
    title: "SUKHIBAVA",
    location: "Sukhibava Block 2C, Etheru, Bapatla, AP",
    size: "150 to 300 sq. yards",
    description: "We developed a 20-acre open plots venture with 200 plots near Eheturu, Bapatla, offering modern amenities and clear titles. Located close to NH-216 and Suryalanka Beach, it ensures great connectivity and lifestyle appeal. The area is rapidly growing as a tourism and investment hotspot.",
    image: sukhibava
  },
  {
    title: "Health City",
    location: "Health City, Near Medical College, PIDUGURALLA, AP",
    size: "200 to 600 sq. yards",
    description: "Health City Layout by Suvarna Kuteer Developers, a DTCP-approved open plots venture in Piduguralla, Palnadu District, near the government hospital and college. Spread across prime residential land with wide roads, open space, and modern planning across Phase I & II. Ideal for peaceful living and smart investment in a rapidly developing location.",
    image: healthcity
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