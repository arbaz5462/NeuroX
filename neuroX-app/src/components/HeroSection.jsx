import React from 'react';
import './HeroSection.css';
import neuroImage from '../assets/neuro-image.jpg'; // add your image in src/assets/

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-title">NeuroX</h1>
        <div className="red-line"></div>
        <p className="hero-subtext">
            Detect Early. Act Early. Improve Life.
        </p>
        <button className="cta-button">Start Free Assessment</button>
      </div>
      <div className="hero-right">
        <img src={neuroImage} alt="Neuro illustration" className="hero-image" />
      </div>
    </section>
  );
};

export default HeroSection;
