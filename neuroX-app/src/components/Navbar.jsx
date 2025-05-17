import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setSearchQuery('');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">NeuroX</h2>
      </div>

      <div className="navbar-center">
        {!searchOpen ? (
          <ul className="navbar-links">
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Technologies</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        ) : (
          <input
            type="text"
            className="search-input-wide"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            autoFocus
          />
        )}
      </div>

      <div className="navbar-right">
        <button className="search-icon" onClick={toggleSearch}>
          🔍 Search
        </button>
         
     <button className="Longin-button">Log in</button>


      </div>
    </nav>
  );
};

export default Navbar;
