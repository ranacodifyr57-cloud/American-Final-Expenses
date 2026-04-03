import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { TelephoneFill } from 'react-bootstrap-icons';
import './CarrierPartners.css'
import { motion } from "framer-motion";
import logo1 from '../../assets/images/1.webp'
import logo2 from '../../assets/images/2.webp'
import logo3 from '../../assets/images/3.webp'
import logo4 from '../../assets/images/4.webp'
import logo5 from '../../assets/images/5.webp'
import logo6 from '../../assets/images/6.webp'
import logo7 from '../../assets/images/7.webp'
const CarrierPartners = () => {
  const carriers = [
    {
      name: "Transamerica",
      logo: logo1,
      description: "A leading provider known for competitive rates and a strong financial history, offering a range of coverage options for seniors.",
      issueAges: "45-85",
      coverage: "$1k - $50k",
      color: "#d32f2f"
    },
    {
      name: "CVS Health / Aetna",
      logo: logo2,
      description: "A trusted health brand offering reliable final expense products with straightforward underwriting and guaranteed acceptance options.",
      issueAges: "45-89",
      coverage: "$2k - $50k",
      color: "#c8102e"
    },
    {
      name: "Aflac",
      logo: logo3,
      description: "A household name providing whole life policies that build cash value, ensuring your premiums are locked in for life.",
      issueAges: "45-80",
      coverage: "$2k - $50k",
      color: "#0072ce"
    },
    {
      name: "Transamerica",
      logo: logo4,
      description: "A leading provider known for competitive rates and a strong financial history, offering a range of coverage options for seniors.",
      issueAges: "45-85",
      coverage: "$1k - $50k",
      color: "#d32f2f"
    },
    {
      name: "CVS Health / Aetna",
      logo: logo5,
      description: "A trusted health brand offering reliable final expense products with straightforward underwriting and guaranteed acceptance options.",
      issueAges: "45-89",
      coverage: "$2k - $50k",
      color: "#c8102e"
    },
    {
      name: "Aflac",
      logo: logo6,
      description: "A household name providing whole life policies that build cash value, ensuring your premiums are locked in for life.",
      issueAges: "45-80",
      coverage: "$2k - $50k",
      color: "#0072ce"
    },
    {
      name: "Aflac",
      logo: logo7,
      description: "A household name providing whole life policies that build cash value, ensuring your premiums are locked in for life.",
      issueAges: "45-80",
      coverage: "$2k - $50k",
      color: "#0072ce"
    }
  ];

  return (
    <section className="py-5 bg-white">
      <Container>
        <Row className="g-4">
          {carriers.map((carrier, index) => (
            <Col lg={4} md={6} key={index}>
              <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, delay: 0.3 }}
    viewport={{ once: true }}
  >
              <Card className="h-100 shadow-sm border-1 overflow-hidden carrier-card" style={{ maxWidth: '400px' }}>
                <Card.Body className="d-flex flex-column p-4">
                  {/* Logo */}
                  <div className="mb-3 text-center" style={{ height: '60px' }}>
                    <img 
                      src={carrier.logo} 
                      alt={carrier.name}
                      style={{ 
                        maxHeight: '70px', 
                        maxWidth: '180px',
                        objectFit: 'contain'
                      }}
                    />
                  </div>

                  {/* Description */}
                  <p className="text-muted mb-4" style={{ minHeight: '110px' }}>
                    {carrier.description}
                  </p>

                  <hr className="my-3" />

                  {/* Details */}
                  <div className="mb-4">
                    <div className="mb-2">
                      <strong>Issue Ages:</strong> {carrier.issueAges}
                    </div>
                    <div>
                      <strong>Coverage:</strong> {carrier.coverage}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto d-flex gap-2">
                    <Button 
                      variant="warning" 
                      className="flex-grow-1 fw-bold text-white"
                      style={{ backgroundColor: '#f5a623', border: 'none' }}
                      onClick={() => window.location.href = 'tel:+15616806987'}
                    >
                      Get a Quote
                    </Button>
                    <Button 
                      variant="outline-secondary" 
                      className="flex-grow-1"
                    >
                      Learn More
                    </Button>
                  </div>
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

export default CarrierPartners;