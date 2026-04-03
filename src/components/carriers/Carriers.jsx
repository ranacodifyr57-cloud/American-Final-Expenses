import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Carriers.css";

// logos
import transamerica from "../../assets/images/1.webp";
import aetna from "../../assets/images/2.webp";
import aflac from "../../assets/images/3.webp";
import mutual from "../../assets/images/4.webp";
import american from "../../assets/images/5.webp";
import cica from "../../assets/images/6.webp";
import corebridge from "../../assets/images/7.webp";

const Carriers = () => {
  const images = [
    transamerica,
    aetna,
    aflac,
    mutual,
    american,
    cica,
    corebridge,
  ];

  return (
    <div className="carriers-section text-center" style={{ backgroundColor: '#f5f5f5', padding: '60px 0' }}>
      <Container>
        <motion.h2
          className="fw-bold text-primary mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          Carriers We Work With
        </motion.h2>

        <motion.p
          className="text-muted mb-5 mx-auto"
          style={{ fontSize: '1.25rem', maxWidth: '600px' }}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true }}
        >
          We partner with the nation's top-rated insurance companies to find you the
          best coverage at the best price.
        </motion.p>

        {/* Logos with staggered animation */}
        <div className="carriers-logos py-5">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="images-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: index * 0.3 }} // each logo delayed slightly
              viewport={{ once: true }}
            >
              <img src={image} alt="carrier" />
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Carriers;