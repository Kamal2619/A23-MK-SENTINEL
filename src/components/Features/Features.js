import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaShieldAlt, FaChartBar, FaBolt, FaGlobe, FaMobile } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: FaCloud,
      title: "Cloud Integration",
      description: "Seamless cloud connectivity with real-time data synchronization and automatic backups."
    },
    {
      icon: FaShieldAlt,
      title: "Enterprise Security",
      description: "Military-grade encryption and security protocols to protect your sensitive sensor data."
    },
    {
      icon: FaChartBar,
      title: "Advanced Analytics",
      description: "AI-powered insights and predictive analytics to optimize your sensor network performance."
    },
    {
      icon: FaBolt,
      title: "Real-time Processing",
      description: "Lightning-fast data processing with sub-100ms response times for critical applications."
    },
    {
      icon: FaGlobe,
      title: "Global Accessibility",
      description: "Access your sensor data from anywhere in the world with our distributed cloud architecture."
    },
    {
      icon: FaMobile,
      title: "Adaptive Interface",
      description: "Responsive design optimized for professional desktop environments and workflows."
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <motion.div 
          className="features-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="features-title">
            <span className="gradient-text">Premium Features</span><br />
            Built for Enterprise
          </h2>
          <p className="features-subtitle">
            Experience the next generation of IoT monitoring with features designed 
            for mission-critical applications and enterprise-scale deployments.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="feature-icon">
                <feature.icon />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
