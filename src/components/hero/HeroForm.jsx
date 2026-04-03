import React from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./HeroForm.css";

const HeroForm = () => {
  return (
    <div className="hero-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          
          {/* LEFT CONTENT */}
          <Col md={6} className="text-white">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h1 className="fw-bold display-4">
                Whole-Life Final Expense Plans for Seniors 50-80
              </h1>

              <p className="mt-3">
                Protect your loved ones with affordable whole-life coverage. No
                medical exams, guaranteed acceptance, and fixed premiums that
                never increase.
              </p>

              <div className="d-flex gap-4 mt-4">
                <span>✔ No Medical Exam</span>
                <span>✔ Fixed Premiums</span>
              </div>
            </motion.div>
          </Col>

          {/* RIGHT FORM */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} // start smaller
              whileInView={{ opacity: 1, scale: 1 }} // grow to original size
              transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="p-4 shadow-lg border-0 rounded-4">
                <h4 className="text-center fw-bold mb-1">Get Your Free Quote</h4>
                <p className="text-center text-muted mb-4">Fast, Free, and No Obligation.</p>

                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control placeholder="John Doe" />
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone #</Form.Label>
                        <Form.Control placeholder="(555) 123-4567" />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder="you@example.com" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Age (50-85)</Form.Label>
                        <Form.Select>
                          <option>Select your age</option>
                          {[...Array(36)].map((_, i) => (
                            <option key={i}>{50 + i}</option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>State</Form.Label>
                        <Form.Select>
                          <option>Select your state</option>
                          <option>California</option>
                          <option>Texas</option>
                          <option>Florida</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <button className="w-100 btn-orange mt-2 rounded-3">
                      Get Your Free Quote
                    </button>
                  </motion.div>
                </Form>
              </Card>
            </motion.div>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default HeroForm;