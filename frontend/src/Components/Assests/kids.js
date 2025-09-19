import React from "react";
import "./kids.css"; // Styling file import kara
import kidsBanner from './KidBanner1.jpg'; // Banner image import kara

const Kids = () => {
  return (
    <div className="kids-page">
      {/* Banner Section */}
      <div className="banner-container">
        <img src={kidsBanner} alt="Kids Banner" className="banner-image" />
      </div>

      {/* Content Section (Tumhi ya khali je hava te add karu shakta) */}
      <div className="kids-content">
        <h1>Welcome to Kids Section</h1>
        <p>Find amazing products for kids!</p>
      </div>
    </div>
  );
};

export default Kids;
