import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import { Lock, ShieldCheck, Heart } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import "./Features.css";

const Features = () => {
  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: <Lock size={38} />,
      title: "Lock in Low Rates Today",
      text: "Your premiums are fixed and guaranteed to never increase for the life of the policy.",
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "Guaranteed Acceptance",
      text: "No medical exams are required for approval. Your acceptance is guaranteed for ages 50-80.",
    },
    {
      icon: <Heart size={30} />,
      title: "Support for Loved Ones",
      text: "Ensure your family isn't burdened with final expenses during a difficult time.",
    },
  ];

  return (
    <div className="features-section text-center">
      <Container>
        {/* Heading */}
        <motion.h2
          className="fw-bold mb-3 text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          Peace of Mind is Just a Call Away
        </motion.h2>

        <motion.p
          className="text-muted mb-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.3 }}
          viewport={{ once: true }}
        >
          We make it simple and affordable to protect your family's future.
        </motion.p>

        {/* 3 Columns */}
        <Row>
          {features.map((feature, index) => (
            <Col md={4} className="mb-4" key={index}>
              <motion.div
                className="feature-box"
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 2, delay: index * 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="icon-circle">{feature.icon}</div>
                <h5 className="fw-bold mt-3 text-primary">{feature.title}</h5>
                <p className="text-muted">{feature.text}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Features;