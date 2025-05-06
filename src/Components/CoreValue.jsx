import React from "react";
import { FaThumbsUp, FaSearch, FaCheck, FaUsers } from "react-icons/fa";
import "./CoreValue.css"; // Import the CSS file

const coreValues = [
  { icon: <FaThumbsUp />, title: "Trust" },
  { icon: <FaSearch />, title: "Transparency" },
  { icon: <FaCheck />, title: "Quality" },
  { icon: <FaUsers />, title: "Customer Gratification" },
];

const CoreValues = () => {
  return (
    <section className="core-values">
      <h2 style={{color:"red"}}>OUR CORE VALUES</h2>
      <div className="custom-underline">
        <span className="circle"></span>
      </div>
      <div className="values-container">
        {coreValues.map((value, index) => (
          <div className="value-card" key={index}>
            <span className="icon1">{value.icon}</span>
            <p>{value.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
