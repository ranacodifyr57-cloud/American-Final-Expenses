import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import img12 from '../../assets/images/ourStoryImage.jpeg';

const OurStory = () => {
  return (
    <section className="py-5 bg-white">
      <Container className="py-5">
        <Row className="align-items-center g-5">
          {/* Left - Text Content */}
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <h2 className="display-5 fw-bold text-primary mb-4">
                Our Story
              </h2>
              
              <div className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.75' }}>
                <p>
                  American Final Expense was founded on a simple belief: planning for the 
                  future shouldn't be complicated or stressful. After seeing our own family 
                  members struggle with the high costs of final expenses, we knew there had 
                  to be a better way.
                </p>
                <p>
                  Today, we've helped thousands of seniors across the country secure the 
                  coverage they need, ensuring their final wishes are honored without leaving 
                  a financial burden on their loved ones. Our commitment is to provide 
                  compassionate guidance and straightforward solutions, every step of the way.
                </p>
              </div>
            </motion.div>
          </Col>

          {/* Right - Image */}
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <div className="position-relative rounded-4 overflow-hidden shadow-lg">
                <img 
                  src={img12}
                  alt="Happy senior couple"
                  className="img-fluid w-100"
                  style={{ height: '410px', objectFit: 'cover' }}
                />
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurStory;