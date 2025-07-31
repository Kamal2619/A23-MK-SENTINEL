import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'IoT Solutions Architect',
      company: 'TechCorp Industries',
      rating: 5,
      text: 'MK Sentinel has revolutionized how we monitor our industrial sensors. The real-time analytics and predictive capabilities have prevented multiple system failures.',
      avatar: '👩‍💼'
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Operations Manager',
      company: 'Smart Manufacturing Co.',
      rating: 5,
      text: 'The dashboard is incredibly intuitive and the cloud integration seamless. Our team productivity increased by 40% since implementing MK Sentinel.',
      avatar: '👨‍💼'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      title: 'Research Director',
      company: 'Advanced Labs',
      rating: 5,
      text: 'Outstanding sensor monitoring platform. The enterprise-grade security and reliability make it perfect for our sensitive research environments.',
      avatar: '👩‍🔬'
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="testimonials-title">
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
          <p className="testimonials-subtitle">
            Don't just take our word for it. Here's what industry professionals 
            are saying about MK Sentinel.
          </p>
        </motion.div>

        <div className="testimonials-carousel">
          <button className="carousel-btn prev" onClick={prevTestimonial}>
            <FaChevronLeft />
          </button>

          <motion.div 
            className="testimonial-card"
            key={currentTestimonial}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="testimonial-content">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">
                {testimonials[currentTestimonial].text}
              </p>
              
              <div className="testimonial-rating">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
            </div>

            <div className="testimonial-author">
              <div className="author-avatar">
                {testimonials[currentTestimonial].avatar}
              </div>
              <div className="author-info">
                <div className="author-name">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="author-title">
                  {testimonials[currentTestimonial].title}
                </div>
                <div className="author-company">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>
          </motion.div>

          <button className="carousel-btn next" onClick={nextTestimonial}>
            <FaChevronRight />
          </button>
        </div>

        <div className="testimonials-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
