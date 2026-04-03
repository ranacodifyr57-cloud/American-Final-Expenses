import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from "framer-motion";

const TrustedCarriers = () => {
  return (
    <section className="py-4" style={{ backgroundColor: '#ebf1f7' }}>
      <Container>

        <motion.div
          className="text-center py-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="display-4 fw-bold text-primary mb-4">
            Our Trusted Carrier Partners
          </h2>
          
          <p className="lead text-muted mx-auto" style={{ maxWidth: '680px' }}>
            We've hand-picked the nation's most reputable insurance companies to 
            ensure you get reliable coverage and competitive rates.
          </p>
        </motion.div>

      </Container>
    </section>
  );
};

export default TrustedCarriers;