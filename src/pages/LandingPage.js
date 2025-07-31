import React from 'react';
import Hero from '../components/Hero/Hero';
//import Features from '../components/Features/Features';
import Dashboard from '../components/Dashboard/Dashboard';
//import Stats from '../components/Stats/Stats';
//import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';
import '../styles/globals.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <Hero />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default LandingPage;
