import React from 'react';
import './OverviewSection.css';

const OverviewSection = () => {
  return (
    <section  id="overview" className="overview-section">
      <h2 className="overview-title">
        Artificial intelligence to solve the neurological health crisis
      </h2>
      <p className="overview-text">
        Detect Neurological Conditions Early — Simply Through Voice and Video<br /><br />
        Millions of people live with undiagnosed neurological disorders due to the lack of accessible, early-stage diagnostic tools. Our platform changes that.<br /><br />
        We use cutting-edge AI models trained on clinical data to analyze subtle patterns in speech, facial movement, and behavior that are often invisible to the human eye.
      </p>
    </section>
  );
};

export default OverviewSection;
