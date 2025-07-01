import React, { useState } from 'react';
import { motion } from 'framer-motion';
import newtownship from '../assets/Images/newtownship_arch.jpg';
import lam from '../assets/Images/lam1.jpg';
import etheru from '../assets/Images/etheru.jpg';
import sukhibava from '../assets/Images/sukhibava2.jpg';
import healthcity from '../assets/Images/healthcity.jpg';
import kantheru from '../assets/Images/kantheru.jpg';
import logillu from '../assets/Images/logillu.jpg';
import damarapalli from '../assets/Images/damarapalli.jpg';


const Ongoing = () => {
  const [visiblePriceIndex, setVisiblePriceIndex] = useState(null);

  const cardsData = [
    {
      title: "NEW TOWNSHIP",
      location: "NEW TOWNSHIP Phase 4 & 5, LAM, Amaravati Road, Guntur, AP",
      size: "200 to 900 sq. yards",
      description: "Our DTCP and CRDA approved venture near Lam, Guntur offers 455+ open plots across 6 phases, complete with essential amenities like a Children's park, Yoga space, Gym, Street Lights, Avenue plants, Compound wall, and water tank etc..",
      image: newtownship,
      price: "₹25,000 per Sq. Yard",
    },
    {
      title: "DAMARAPALLI PHASE 2",
      location: "DAMARAPALLI PHASE 2, Amaravati, AP",
      size: "150 to 1100 sq. yards",
      description: "We developed a premium open plots venture spread across 26 acres with 300+ well-planned plots, offering all modern amenities. The venture is strategically located near the Amaravati Inner Ring Road, ensuring excellent connectivity. It is also close to leading educational institutions, making it ideal for families and investors...",
      image: damarapalli,
      price: "₹15,000 per Sq. Yard",
    },
    {
      title: "KANTHERU PHASE 2",
      location: "KANTHERU PHASE 2, Amaravati, AP",
      size: "200 to 600 sq. yards",
      description: "Kantheru is experiencing a surge in development, driven by its proximity to the Amaravati capital region and ongoing infrastructure projects. This makes it an attractive location for both residential and investment purposes. The area is witnessing rapid appreciation in land value, making now the perfect time to invest.",
      image: kantheru,
      price: "₹10,200 per Sq. Yard",
    },
    {
      title: "LOGILLU",
      location: "LOGILLU Phase 2, Mangamuru Road, ONGOLE, AP",
      size: "150 to 300 sq. yards",
      description: "Ongole is a rapidly growing city in Andhra Pradesh, benefiting from strong highway connectivity and participation in the Amrit Bharat Scheme. The city relies on its Summer Storage Tank for drinking water and has seen significant development, including a 25-acre open plot venture with comprehensive facilities, greenery, and wide roads....",
      image: logillu,
      price: "₹7,800 per Sq. Yard",
    },
    {
      title: "SUKHIBAVA",
      location: "Sukhibava Block 2C, Etheru, Bapatla, AP",
      size: "150 to 680 sq. yards",
      description: "We’ve launched a premium open‑plots venture across 20 acres with 200 meticulously planned plots near Eheturu, Bapatla, equipped with modern infrastructure and amenities. Positioned along NH‑216 and the upcoming Bengaluru–Vijayawada expressway corridor, the site offers exceptional connectivity With Bapatla district being developed as a major tourism and aquaculture hub...",
      image: etheru,
      price: "₹10,800 per Sq. Yard",
    },
    {
      title: "Health City",
      location: "Health City, Near Medical College, PIDUGURALLA, AP",
      size: "200 to 1200 sq. yards",
      description: "Health City Layout by Suvarna Kuteer Developers, a DTCP-approved open plots venture in Piduguralla, Palnadu District, near the government hospital and college. Spread across prime residential land with wide roads, open space, and modern planning across Phase I & II. Ideal for peaceful living and smart investment in a rapidly developing location......",
      image: healthcity,
      price: "₹10,200 per Sq. Yard",
    },
  ];

  return (
    <div style={styles.ongoingContainer}>
      {/* Intro Paragraph */}
      <motion.div 
        style={styles.introText}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={styles.introHeading}>Our Ongoing Projects</h2>
        <p style={styles.introParagraph}>
          Explore our latest plotted developments across premium locations in Hyderabad. Designed for smart investments and serene living, our projects offer outstanding infrastructure and amenities.
        </p>
      </motion.div>

      {/* Cards Section */}
      <div style={styles.cardContainer}>
        {cardsData.map((card, index) => (
          <motion.div 
            key={index} 
            style={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={card.image} alt={card.title} style={styles.image} />
            <h2 style={styles.cardTitle}>{card.title}</h2>
            <div style={styles.infoSection}>
              <p><strong>Location</strong><br />{card.location}</p>
              <p><strong>Plots Size</strong><br />{card.size}</p>
            </div>
            <p style={styles.description}>{card.description}</p>
            {visiblePriceIndex === index && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={styles.priceText}
              >
                {card.price}
              </motion.p>
            )}
            <div style={styles.buttons}>
              <button style={{ ...styles.button, ...styles.primary }}>
                View Details
              </button>
              <button
                style={{ ...styles.button, ...styles.secondary }}
                onClick={() =>
                  setVisiblePriceIndex(
                    visiblePriceIndex === index ? null : index
                  )
                }
              >
                {visiblePriceIndex === index ? "Hide Price" : "Get Price"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Ongoing;

// Inline CSS Styles
const styles = {
  ongoingContainer: {
    padding: '80px 20px 40px',
    background: '#f9f9f9',
  },
  introText: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  introHeading: {
  marginTop:'50px',
    fontSize: '28px',
    color: '#F26522',
    marginBottom: '10px',
  },
  introParagraph: {
    fontSize: '16px',
    color: '#666',
    maxWidth: '700px',
    margin: '0 auto',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
  },
  card: {
    background: '#fff',
    border: '1px solid #eee',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    padding: '20px',
    width: '420px',
    borderRadius: '15px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  image: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '10px',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  infoSection: {
    display: 'flex',
    justifyContent: 'space-around',
    textAlign: 'left',
    fontSize: '14px',
    color: 'green',
    margin: '10px 0',
  },
  description: {
    fontSize: '14px',
    color: '#444',
    margin: '15px 0',
  },
  priceText: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#f26522',
    marginBottom: '10px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    padding: '10px',
    margin: '5px',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '6px',
    transition: 'background 0.3s ease',
  },
  primary: {
    background: '#111',
  },
  secondary: {
    background: '#f26522',
  },
};
