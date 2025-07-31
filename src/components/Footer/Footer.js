import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <h3 className="brand-name" style={{ fontWeight: 700 }}>
            MK Sentinel
          </h3>
          <p className="brand-description">
            MK Sentinel is dedicated to empowering every household with affordable, real-time fire and gas detection.
            Our project aims to enhance safety and peace of mind—using modern sensing and IoT for every home.
          </p>
        </div>
        <div className="footer-bottom" style={{ justifyContent: 'center', textAlign: 'center', marginTop: '2rem' }}>
          <p style={{ fontSize: '0.95rem', color: '#888' }}>
            &copy; MK Sentinel 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
