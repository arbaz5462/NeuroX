import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import HowItWorksSection from './components/HowItWorksSection';
import ReviewsSection from './components/ReviewsSection';
import ScrollNav from './components/ScrollNav';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
       <ScrollNav />
     <HeroSection />
     <OverviewSection />
      <HowItWorksSection />
       <ReviewsSection />
       <Footer/>
        
    </div>
  );
}

export default App;
