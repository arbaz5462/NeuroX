import React, { useEffect, useState } from 'react';
import './ScrollNav.css';

const ScrollNav = () => {
  const [activeSection, setActiveSection] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'how-it-works', 'reviews'];

      // Determine active section
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sections[i]);
          }
        }
      }

      // Show scroll-nav only when overview is on screen or below
      const overview = document.getElementById('overview');
      if (overview) {
        const rect = overview.getBoundingClientRect();
        if (rect.top <= 150) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`scroll-nav ${visible ? 'visible' : 'hidden'}`}>
      <a href="#overview" className={activeSection === 'overview' ? 'active' : ''}>Overview</a>
      <a href="#how-it-works" className={activeSection === 'how-it-works' ? 'active' : ''}>How It Works</a>
      <a href="#reviews" className={activeSection === 'reviews' ? 'active' : ''}>Reviews</a>
    </div>
  );
};

export default ScrollNav;

