import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from "framer-motion";

const GetInTouch = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#ebf1f7' }}>
      <Container className="text-center py-4">

        {/* Heading */}
        <motion.h2
          className="display-5 fw-bold text-primary mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="lead text-muted mx-auto"
          style={{ maxWidth: '720px' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          We're here to help. Whether you have a question about our plans or need 
          assistance, our team is ready to answer all your questions.
        </motion.p>

      </Container>
    </section>
  );
};

export default GetInTouch;