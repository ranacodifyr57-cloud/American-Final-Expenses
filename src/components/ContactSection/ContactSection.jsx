import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { TelephoneFill, EnvelopeFill, Clock } from 'react-bootstrap-icons';
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent. We'll get back to you soon.");
    setFormData({ fullName: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="g-5">

          {/* Left Side */}
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <h2 className="fw-bold text-primary">Contact Information</h2>
                <p className="text-muted">
                  Reach out to us through any of the methods below.
                </p>
              </div>

              <Card className="border-0 p-4">
                <div className="d-flex align-items-start mb-4">
                  <div className="bg-warning bg-opacity-10 p-3 rounded-circle me-3">
                    <TelephoneFill size={28} color="#f5a623" />
                  </div>
                  <div>
                    <h5 className="mb-1 fw-semibold">Phone</h5>
                    <a href="tel:+15616806987" className="text-dark text-decoration-none">
                      (561) 680-6987
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <div className="bg-warning bg-opacity-10 p-3 rounded-circle me-3">
                    <EnvelopeFill size={28} color="#f5a623" />
                  </div>
                  <div>
                    <h5 className="mb-1 fw-semibold">Email</h5>
                    <a href="mailto:info@americanfinalexpenses.com" className="text-dark text-decoration-none">
                      info@americanfinalexpenses.com
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-start">
                  <div className="bg-warning bg-opacity-10 p-3 rounded-circle me-3">
                    <Clock size={28} color="#f5a623" />
                  </div>
                  <div>
                    <h5 className="mb-1 fw-semibold">Office Hours</h5>
                    <p className="text-muted mb-0">
                      Mon - Fri, 9am - 5pm CST
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </Col>

          {/* Right Side */}
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="border-0 p-5" style={{ backgroundColor: '#ebf1f7' }}>
                <h3 className="fw-bold text-primary mb-4">Send a Message</h3>

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone (Optional)</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      required
                    />
                  </Form.Group>

                  {/* Button Animation */}
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Button 
                      type="submit" 
                      variant="warning" 
                      size="lg" 
                      className="w-100 fw-bold text-white d-flex align-items-center justify-content-center gap-2"
                      style={{ backgroundColor: '#f5a623', border: 'none', padding: '12px' }}
                    >
                      ✉️ Send Message
                    </Button>
                  </motion.div>

                </Form>
              </Card>
            </motion.div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;