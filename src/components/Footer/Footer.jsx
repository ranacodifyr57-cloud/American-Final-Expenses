import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Phone, Envelope } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="text-white py-5" style={{ backgroundColor: '#111169' }}>
      <Container className='py-5'>
        <Row className="gy-4">
          {/* Logo & Description */}
          <Col md={3}>
            <div className="d-flex align-items-center mb-3">
              <div 
                className="bg-warning text-dark fw-bold d-flex align-items-center justify-content-center rounded"
                style={{ width: '60px', height: '50px', fontSize: '1.8rem' }}
              >
                A
              </div>
              <div className="ms-3">
                <h4 className="mb-0 fw-bold">American Final</h4>
                <h5 className="mb-0 text-warning">Expense</h5>
              </div>
            </div>
            <p className="text-light" style={{ fontSize: '1.1rem' }}>
              Providing peace of mind for seniors aged 50-80 with whole-life final expense coverage.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={3}>
            <h6 className="fw-bold text-warning mb-3 mx-5">QUICK LINKS</h6>
            <ul className="list-unstyled mx-5">
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Carriers</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          {/* Contact Us */}
          <Col md={3}>
            <h6 className="fw-bold text-warning mb-3">CONTACT US</h6>
            <div className="d-flex align-items-center mb-2">
              <Phone className="me-2" size={20} />
              <span>(561) 680-6987</span>
            </div>
            <div className="d-flex align-items-center">
              <Envelope className="me-2" size={20} />
              <a 
                href="mailto:info@americanfinalexpenses.com" 
                className="text-white text-decoration-none"
              >
                info@americanfinalexpenses.com
              </a>
            </div>
          </Col>

          {/* Legal */}
          <Col md={3}>
            <h6 className="fw-bold text-warning mb-3">LEGAL</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Terms of Service</a></li>
            </ul>
          </Col>
        </Row>

        {/* Bottom Copyright */}
        <Row className="mt-5 pt-4 border-top border-primary-subtle">
          <Col className="text-center text-light">
            <small>
              © 2026 American Final Expense. All Rights Reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;