import React, { useState } from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/Images/img3.jpg';
import img2 from '../assets/Images/img3.jpg';

const Upcoming = () => {
  const [visiblePriceIndex, setVisiblePriceIndex] = useState(null);

  const cardsData = [
    {
      title: "LINGAPURAM",
      location: "Lingapuram, Amaravati, AP",
      size: "120 to 500 Sq. yards",
      description: "60 acres well planned CRDA and DTCP approved venture Situated in the Amaravati capital city of Navyandhra, Central Government Land Allotments for CBI, GSI, IT Depots. Seed Access Road  Phase 3, Rail Link of Amaravati, Outer Ring Road & Expressways...",
      image: img1,
      price: "₹9,999 per Sq. Yard",
    },
    {
      title: "PUDAMI",
      location: "Pudami, Narasaraopet, AP",
      size: "165.00 to 475.00 sq. yards",
      description: "PUDAMI offers over 450+ thoughtfully planned open plots across 4 phases in Narasaraopet, Andhra Pradesh. Embrace a lifestyle surrounded by nature's beauty, with plots located near JNTU Narasaraopet...                                                 ",
      image: img2,
      price: "₹8,499 per Sq. Yard",
    },
    {
      title: "DHARANI",
      location: "Dharani, Palapadu Road, Narasaraopet, AP",
      size: "165.00 to 475.00 sq. yards",
      description: "Discover a prime opportunity to build your future at Dharani, an open plots venture on Palapadu Road in Narasaraopet, Andhra Pradesh. Dharani offers the perfect blend of convenient location and a peaceful environment....",
      image: img2,
      price: "₹8,499 per Sq. Yard",
    },
    {
      title: "SUKHIBAVA",
      location: "Sukhibava, Appikatla, Bapatla, AP",
      size: "150 to 300 sq. yards",
      description: "A serene environment with temple views and a peaceful layout ideal for weekend homes and rental income opportunities...",
      image: img1,
      price: "₹7,800 per Sq. Yard",
    },
    {
      title: "SUKHIBAVA",
      location: "Sukhibava, Etheru, Bapatla, AP",
      size: "150 to 300 sq. yards",
      description: "A serene environment with temple views and a peaceful layout ideal for weekend homes and rental income opportunities...",
      image: img1,
      price: "₹7,800 per Sq. Yard",
    },
    {
      title: "LOGILLU",
      location: "LOGILLU, Mangamuru Road, ONGOLE, AP",
      size: "150 to 300 sq. yards",
      description: "A serene environment with temple views and a peaceful layout ideal for weekend homes and rental income opportunities...",
      image: img1,
      price: "₹7,800 per Sq. Yard",
    },
    {
      title: "Health City",
      location: "Health City, Near Medical College, PIDUGURALLA, AP",
      size: "200 to 600 sq. yards",
      description: "City Gardens offers top-class infrastructure in one of the most elite residential pockets of Hyderabad. Investment ready...",
      image: img2,
      price: "₹10,200 per Sq. Yard",
    },
    {
      title: "LAM",
      location: "LAM, Amaravati Road, Guntur, AP",
      size: "200 to 600 sq. yards",
      description: "City Gardens offers top-class infrastructure in one of the most elite residential pockets of Hyderabad. Investment ready...",
      image: img2,
      price: "₹10,200 per Sq. Yard",
    },
    {
      title: "NEW TOWNSHIP",
      location: "NEW TOWNSHIP, LAM, Amaravati Road, Guntur, AP",
      size: "200 to 600 sq. yards",
      description: "City Gardens offers top-class infrastructure in one of the most elite residential pockets of Hyderabad. Investment ready...",
      image: img2,
      price: "₹10,200 per Sq. Yard",
    },
    {
      title: "DAMARAPALLI PHASE 1",
      location: "DAMARAPALLI PHASE 1, Amaravati, AP",
      size: "200 to 600 sq. yards",
      description: "City Gardens offers top-class infrastructure in one of the most elite residential pockets of Hyderabad. Investment ready...",
      image: img2,
      price: "₹10,200 per Sq. Yard",
    },
    {
      title: "KANTHERU PHASE 1",
      location: "KANTHERU PHASE 1, Amaravati, AP",
      size: "200 to 600 sq. yards",
      description: "City Gardens offers top-class infrastructure in one of the most elite residential pockets of Hyderabad. Investment ready...",
      image: img2,
      price: "₹10,200 per Sq. Yard",
    }
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
        <h2 style={styles.introHeading}> Completed Projects</h2>
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
    height: '160px',
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
