import React, { useState } from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/Images/img3.jpg';
import img2 from '../assets/Images/img3.jpg';
import futurecity from '../assets/Images/futurecity.jpg';
import vijayawada from '../assets/Images/vijayawada.jpg';
import mokila from '../assets/Images/mokila.jpg';
import lingapuram from '../assets/Images/lingapuram.jpg';

const Upcoming = () => {
  const [visiblePriceIndex, setVisiblePriceIndex] = useState(null);

  const cardsData = [
    {
      title: "FUTURE CITY",
      location: "FUTURE CITY, Hyderabad",
      size: "46.67 to 500 Sq. yards",
      description: "Situated in the rapidly growing area of Bheemaram, Shadnagar, Southern Vista is a high-end plotted community designed for those who value exclusivity and long-term investment potential...",
      image: futurecity,
      price: "₹9,999 per Sq. Yard",
    },
    {
      title: "VIJAYAWADA ",
      location: "Bandar Road, Vijayawada, AP",
      size: "165.00 to 475.00 sq. yards",
      description: "Green Meadows offers open plots for sale in Chegunta, Hyderabad with nature-centric surroundings and future developments...",
      image: vijayawada,
      price: "₹8,499 per Sq. Yard",
    },
    {
      title: "DAMARAPALLI PHASE 2",
      location: "DAMARAPALLI PHASE 2, Amaravati, AP",
      size: "200 to 600 sq. yards",
      description: "City Gardens offers top-class infrastructure in one of the most elite residential pockets of Hyderabad. Investment ready...",
      image: lingapuram,
      price: "₹10,200 per Sq. Yard",
    },
    {
      title: "NATURE'S NEST",
      location: "Future City, Sri Sailam Highway, Hyderabad",
      size: "150 to 300 sq. yards",
      description: "A serene environment with temple views and a peaceful layout ideal for weekend homes and rental income opportunities...",
      image: futurecity,
      price: "₹6,200 per Sq. Yard",
    },
    {
      title: "CITY GARDENS",
      location: "Mokila, Hyderabad",
      size: "200 to 600 sq. yards",
      description: "City Gardens offers top-class infrastructure in one of the most elite residential pockets of Hyderabad. Investment ready...",
      image: mokila,
      price: "₹20,200 per Sq. Yard",
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
        <h2 style={styles.introHeading}>Our Upcoming Projects</h2>
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

export default Upcoming;

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
   marginTop:'20px',
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
