import React from "react";
import "./Aboutus.css"; // Importing CSS file
import aboutBanner from "../Components/Assests/aboutus.jpg"; // Import your banner image
import Newsletter from '../Components/Newsletter/Newsletter';

const Aboutus = () => {
  return (
    <div className="about-page">
      {/* Banner Section */}
      <div className="about-banner">
        <img src={aboutBanner} alt="About Us" />
        
      </div>

      {/* Content Section */}
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to <strong>StyleHub</strong>, your go-to destination for stylish and comfortable fashion. 
          We believe in quality, uniqueness, and affordability. Our mission is to provide clothing that makes you feel confident and trendy.
        </p>
        <p>
          Whether it's casual wear, street style, or elegant outfits, we bring you the latest trends 
          that fit every occasion. Explore our collection and redefine your fashion journey with us.
        </p>
      </div>
      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default Aboutus;
