import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFireAlt, FaThermometerHalf, FaBurn } from 'react-icons/fa';
import './Dashboard.css';

const SENSOR_TEMPLATE = [
  {
    id: 1,
    name: 'LPG Gas',
    value: '180',
    unit: 'ppm',
    icon: FaBurn,
    status: 'safe',
    trend: 'stable'
  },
  {
    id: 2,
    name: 'Fire',
    value: 'Absent',
    unit: '',
    icon: FaFireAlt,
    status: 'safe',
    trend: 'stable'
  },
  {
    id: 3,
    name: 'Temperature',
    value: '27.0',
    unit: '°C',
    icon: FaThermometerHalf,
    status: 'normal',
    trend: 'stable'
  }
];

export default function Dashboard() {
  const [sensorData, setSensorData] = useState(SENSOR_TEMPLATE);

  // Simulate only minor value changes (for demo)
  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData(prev =>
        prev.map(sensor => {
          if (sensor.name === "LPG Gas") {
            let val = Math.max(80, Math.min(450, parseFloat(sensor.value) + (Math.random() - 0.5) * 10)); // 80–450 ppm
            let status = val < 200 ? 'safe' : val < 400 ? 'warning' : 'danger';
            return { ...sensor, value: val.toFixed(0), status, trend: status === 'safe' ? 'stable' : status === 'warning' ? 'up' : 'up' };
          } else if (sensor.name === "Fire") {
            // 7% chance of fire. Otherwise "Absent"
            const detected = Math.random() < 0.07;
            return { ...sensor, value: detected ? 'Detected' : 'Absent', status: detected ? 'danger' : 'safe', trend: detected ? 'up' : 'stable' };
          } else if (sensor.name === "Temperature") {
            let temp = Math.max(18, Math.min(65, parseFloat(sensor.value) + (Math.random() - 0.5) * 1.2));
            let status = temp < 45 ? 'normal' : temp < 60 ? 'warning' : 'danger';
            return { ...sensor, value: temp.toFixed(1), status, trend: temp > 45 ? 'up' : 'stable' };
          }
          return sensor;
        })
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'danger': return '#ff5f56';
      case 'warning': return '#f093fb';
      case 'normal': return '#667eea';
      case 'safe': return '#27ca3f';
      default: return '#888';
    }
  };

  const formatLabel = status => {
    if (status === "danger") return "Danger";
    if (status === "warning") return "Warning";
    if (status === "normal") return "Normal";
    if (status === "safe") return "Safe";
    return status;
  };

  return (
    <section className="dashboard-section">
      <div className="dashboard-container">
        <motion.div
          className="dashboard-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="dashboard-title">
            MK Sentinel <span className="gradient-text">Live Status</span>
          </h2>
          <p className="dashboard-subtitle">
            View your essential fire and gas sensor readings with instant visual alerts.
          </p>
        </motion.div>

        <div className="dashboard-grid">
          {sensorData.map((sensor, index) => (
            <motion.div
              key={sensor.id}
              className={`sensor-dashboard-card ${sensor.status}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="sensor-header">
                <div className="sensor-icon" style={{ backgroundColor: getStatusColor(sensor.status) }}>
                  <sensor.icon />
                </div>
                <div className="sensor-info">
                  <div className="sensor-name">{sensor.name}</div>
                  <div className={`sensor-status-badge ${sensor.status}`}>
                    {formatLabel(sensor.status)}
                  </div>
                </div>
              </div>
              
              <div className="sensor-reading">
                <div className="sensor-value">
                  {sensor.value}
                  {sensor.unit && <span className="sensor-unit">{sensor.unit}</span>}
                </div>
                <div className={`sensor-trend ${sensor.trend}`}>
                  {sensor.trend === 'up' ? '▲' : sensor.trend === 'down' ? '▼' : '●'}
                </div>
              </div>

              {/* You can keep or remove the sensor chart. If you want it simple, remove below */}
              <div className="sensor-chart">
                <div className="chart-bars">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="chart-bar"
                      style={{
                        height: `${Math.random() * 100}%`,
                        backgroundColor: getStatusColor(sensor.status),
                        opacity: 0.3 + (i * 0.08)
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="sensor-footer">
                <div className="last-updated">Updated few seconds ago</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="dashboard-controls"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button className="control-btn primary">Export Data</button>
          <button className="control-btn secondary">Alert History</button>
        </motion.div>
      </div>
    </section>
  );
}
