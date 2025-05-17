import React from 'react';
import './HowItWorksSection.css';

const HowItWorksSection = () => {
  return (
    <section  id="how-it-works" className="howitworks-section">
      <h2 className="howitworks-title">How It Works</h2>
      <div className="howitworks-text">
        <p><strong>1. You speak or record a short video.</strong><br />
        Our platform guides you through simple tasks — like describing your day, repeating phrases, or answering prompts.</p>

        <p><strong>2. AI analyzes your inputs in seconds.</strong><br />
        We examine key neurological indicators in your voice, facial movements, and behavior using clinically validated AI models.</p>

        <p><strong>3. You get clear, personalized results.</strong><br />
        We generate an easy-to-understand risk report, with the option to explore custom cognitive therapy plans or speak with a specialist.</p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
