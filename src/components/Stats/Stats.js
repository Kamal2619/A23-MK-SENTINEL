import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaServer, FaGlobe, FaShieldAlt } from 'react-icons/fa';
import './Stats.css';

const Stats = () => {
  const stats = [
    {
      icon: FaUsers,
      number: '10K+',
      label: 'Active Users',
      description: 'Professionals trust MK Sentinel'
    },
    {
      icon: FaServer,
      number: '50M+',
      label: 'Data Points',
      description: 'Processed daily across all sensors'
    },
    {
      icon: FaGlobe,
      number: '99.99%',
      label: 'Uptime',
      description: 'Guaranteed service reliability'
    },
    {
      icon: FaShieldAlt,
      number: '100%',
      label: 'Secure',
      description: 'Enterprise-grade security'
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        <motion.div 
          className="stats-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="stats-title">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="stats-subtitle">
            Join thousands of professionals who rely on MK Sentinel for 
            mission-critical sensor monitoring and IoT infrastructure management.
          </p>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="stat-icon">
                <stat.icon />
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="stats-badges"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="badge">ISO 27001 Certified</div>
          <div className="badge">SOC 2 Compliant</div>
          <div className="badge">GDPR Ready</div>
          <div className="badge">24/7 Support</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
