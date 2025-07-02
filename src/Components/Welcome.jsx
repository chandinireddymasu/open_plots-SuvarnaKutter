import { motion } from 'framer-motion';
import "../Components/Welcome.css"
import img from "../assets/Images/image3.png"

const WelcomeSection = () => {
    return (
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-section"
        >
          <h1 style={{color:"green"}}>Welcome to SuvarnaKuteer PVT LTD</h1>
          <p style={{color:"black",fontSize:"15px",fontWeight:"500"}}>
            "Since our inception in 2014, we have been committed to offering our clients premium CRDA, DTCP and RERA-approved open plots and farmlands...
          </p>
          <p style={{color:"black",fontSize:"15px",fontWeight:"500"}}>"Thank you for visiting our website. We look forward to helping you find the perfect piece of land that meets your needs and aspirations."</p>
          <p style={{color:"black" ,fontSize:"15px",fontWeight:"500"}}>"Warm regards,"</p>
          <h3></h3>
          <p style={{color:"black" ,fontSize:"15px",fontWeight:"500"}}>Managing Director & Executive Director</p>
          <p style={{color:"black",fontSize:"15px",fontWeight:"500"}}>SuvarnaKuteer PVT LTD.</p>
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
            className="know-more-btn"
          >
            KNOW MORE
          </motion.button>
        </motion.div>
        <motion.img 
          src={img}
          alt="Managing Director" 
          className="image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        />
      </div>
    );
  };
  

export default WelcomeSection;