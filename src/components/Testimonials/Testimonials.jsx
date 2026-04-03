import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { StarFill } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';
import pic11 from '../../assets/images/8.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Margaret S.",
      text: "The process was so simple and the agents were incredibly helpful. I have peace of mind knowing my family is protected.",
      stars: 5,
    },
    {
      name: "Robert T.",
      text: "No medical exam and instant approval! I wish I had done this sooner. Highly recommend American Final Expense.",
      stars: 5,
    },
    {
      name: "Dorothy P.",
      text: "Fixed rates and guaranteed coverage. My children won't have to worry about my final expenses anymore.",
      stars: 5,
    },
  ];

  return (
    <div className="py-5 bg-light">
      <Container>
        <motion.h2
          className="text-center mb-5 fw-bold text-primary"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>

        <Row className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col key={index} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: index * 0.5 }}
                viewport={{ once: true }}
              >
                <Card
                  className="h-100 border-0 shadow-sm testimonial-card"
                  style={{
                    backgroundColor: '#e7eff7',
                    padding: '20px',
                    borderRadius: '15px',
                  }}
                >
                  <Card.Body className="d-flex flex-column">
                    {/* Stars */}
                    <div className="mb-3">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <StarFill key={i} className="text-warning" size={20} />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <Card.Text className="flex-grow-1 fs-6 text-muted">
                      "{testimonial.text}"
                    </Card.Text>

                    {/* Client Info */}
                    <div className="d-flex align-items-center mt-4">
                      <div
                        className="rounded-circle overflow-hidden me-3"
                        style={{ width: '50px', height: '50px' }}
                      >
                        <img
                          src={pic11}
                          alt={testimonial.name}
                          className="w-100 h-100 object-fit-cover"
                        />
                      </div>
                      <h6 className="mb-0 fw-semibold">{testimonial.name}</h6>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .testimonial-card {
          transition: transform 0.3s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-8px);
        }
      `}</style>
    </div>
  );
};

export default Testimonials;