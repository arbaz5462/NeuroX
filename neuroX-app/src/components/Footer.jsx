import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <h3 className='contact-name'>Contact Us</h3>
        <ul className="contact-list">
          <li><strong>Phone:</strong> +1 (000) 000-0000</li>
          <li><strong>Email:</strong> info@neurox.ai</li>
          <li><strong>LinkedIn:</strong> <a href="#">linkedin.com/company/neurox</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} NeuroX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
