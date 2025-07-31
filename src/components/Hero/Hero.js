import React from 'react';
import { motion } from 'framer-motion';
import { FaBurn, FaFireAlt, FaThermometerHalf, FaBell } from 'react-icons/fa';
import './Hero.css';

const sensorCards = [
  {
    name: 'LPG Gas',
    value: '180 ppm',
    statusClass: 'active',
    Icon: FaBurn,
    statusDotColor: '#27ca3f' // green for safe (change to red if you want "leak" preview)
  },
  {
    name: 'Fire',
    value: 'Absent',
    statusClass: '',
    Icon: FaFireAlt,
    statusDotColor: '#27ca3f'
  },
  {
    name: 'Temperature',
    value: '24.5°C',
    statusClass: '',
    Icon: FaThermometerHalf,
    statusDotColor: '#27ca3f'
  },
  {
    name: 'Alert',
    value: 'All Clear',
    statusClass: '',
    Icon: FaBell,
    statusDotColor: '#27ca3f'
  }
];

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="floating-elements">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`floating-element element-${i}`}></div>
          ))}
        </div>
      </div>
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge">
            <FaBurn className="badge-icon" />
            <span>Real-Time Fire & Gas Detection</span>
          </div>
          <h1 className="hero-title">
            <span className="gradient-text">MK Sentinel</span><br />
            Secure Homes. Peace of Mind.
          </h1>
          <p className="hero-subtitle">
            Safety-first, smart sensor platform for instant LPG gas and fire detection –
            engineered for affordable, proactive protection in Indian households.
          </p>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="dashboard-preview">
            <div className="preview-header">
              <div className="preview-controls">
                <span></span><span></span><span></span>
              </div>
              <div className="preview-title">MK Sentinel Dashboard (Preview)</div>
            </div>
            <div className="preview-content">
              <div className="sensor-grid">
                {sensorCards.map((card, idx) => (
                  <div key={card.name} className={`sensor-card ${card.statusClass}`}>
                    <div className="sensor-status" style={{ background: card.statusDotColor }}>
                      <card.Icon style={{ fontSize: 22, color: card.statusDotColor, verticalAlign: 'middle' }} />
                    </div>
                    <div className="sensor-name" style={{ marginTop: 10, fontWeight: 600 }}>{card.name}</div>
                    <div className="sensor-value" style={{ marginTop: 5, fontSize: 18 }}>{card.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
