import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ShieldCheck, GraphUpArrow, CheckCircle } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <ShieldCheck size={28} />,
      title: "No Medical Exam",
      description: "Apply in minutes without any intrusive medical exams or tests."
    },
    {
      icon: <GraphUpArrow size={22} />,
      title: "Fixed Premiums",
      description: "Your rate is locked in and will never increase for any reason."
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Fast Approval",
      description: "Most applicants get approved for coverage in a matter of minutes."
    }
  ];

  return (
    <section className="py-5 bg-light">
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary mb-3">
            Why Choose Us?
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '680px' }}>
            We focus on making the process as easy as possible for you.
          </p>
        </div>

        <Row className="g-4">
          {benefits.map((benefit, index) => (
            <Col md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: index * 0.2 }} // 2s duration + stagger
                viewport={{ once: true }}
              >
                <Card className="h-100 border-0 shadow-sm text-center p-4 hover-card">
                  <Card.Body>
                    <div 
                      className="mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: '55px',
                        height: '55px',
                        backgroundColor: '#fff3d9',
                        color: '#f5a623'
                      }}
                    >
                      {benefit.icon}
                    </div>
                    
                    <h5 
                      className="fw-bold mb-3" 
                      style={{ color: 'indigo' }}
                    >
                      {benefit.title}
                    </h5>
                    
                    <p className="text-muted mb-0" style={{ lineHeight: '1.7' }}>
                      {benefit.description}
                    </p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;