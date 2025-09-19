import React from "react";
import { FaShippingFast, FaMoneyBillWave, FaHeadset, FaCreditCard } from "react-icons/fa";
import "./Newsletter.css"; // Make sure to include this CSS file

const Newsletter = () => {
  const features = [
    { icon: <FaShippingFast className="icon" />, title: "Free Shipping"},
    { icon: <FaMoneyBillWave className="icon" />, title: "Money Guarantee"},
    { icon: <FaHeadset className="icon" />, title: "24×7 Support" },
    { icon: <FaCreditCard className="icon" />, title: "Flexible Payment"},
  ];

  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <h2 className="subheading">100% Customer Satisfaction!</h2>
        <h1 className="heading">We Provide Best Customer Experience</h1>
        <div className="features-container">
          {features.map((feature, index) => (
            <div key={index} className="feature-box">
              {feature.icon}
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
