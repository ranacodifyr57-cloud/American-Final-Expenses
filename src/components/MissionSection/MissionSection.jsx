import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const MissionSection = () => {
  return (
    <section 
      className="py-5 text-white position-relative overflow-hidden d-flex align-items-center mt-5"
      style={{ 
        backgroundColor: '#0a2540',
        minHeight: '50vh'
      }}
    >
      <Container className="text-center position-relative">
        <motion.h1 
          className="display-5 fw-bold mb-4"
          style={{ fontSize: '3.5rem' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          Our Mission: Your Peace of Mind
        </motion.h1>
        
        <motion.p 
          className="lead mx-auto"
          style={{ 
            maxWidth: '820px',
            fontSize: '1.18rem',
            lineHeight: '1.65'
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true }}
        >
          We are dedicated to helping seniors protect their families from financial 
          hardship with simple, affordable, and reliable final expense insurance.
        </motion.p>
      </Container>
    </section>
  );
};

export default MissionSection;