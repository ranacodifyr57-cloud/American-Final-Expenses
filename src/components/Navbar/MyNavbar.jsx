import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";   // Added useNavigate
import { TelephoneFill } from "react-bootstrap-icons";
import './Navbar.css'
import piclogo from '../../assets/images/logo.webp'

function MyNavbar() {

  const navigate = useNavigate();   // ← Added this line

  const handleGetQuote = () => {
    navigate("/");                  // ← This switches to Home page
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container className="px-5">

        {/* Logo */}
        <Navbar.Brand as={NavLink} to="/">
          <img src={piclogo} alt="Logo" width="60" />
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          {/* Menu */}
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/careers">
              Careers
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center phone-box">
              <TelephoneFill className="me-2 phone-icon" />
              <span>(561) 680-6987</span>
            </div>

            <button 
              className="custom-btn"
              onClick={handleGetQuote}     // ← Only this was added
            >
              Get Free Quote
            </button>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;