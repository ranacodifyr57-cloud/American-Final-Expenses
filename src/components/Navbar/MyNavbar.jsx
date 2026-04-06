import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { TelephoneFill } from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import piclogo from "../../assets/images/logo.webp";

function MyNavbar() {
  const navigate = useNavigate();

  const handleGetQuote = () => {
    navigate("/");
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm" fixed="top">
      <Container className="px-4">

        {/* Logo */}
        <Navbar.Brand as={NavLink} to="/">
          <img src={piclogo} alt="Logo" width="45" />
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* Navbar Content */}
        <Navbar.Collapse id="main-navbar">
          
          {/* Center Menu */}
          <Nav className="mx-auto text-center">
            {/* Home */}
<Nav.Link
  as={NavLink}
  to="/"
  end
  style={({ isActive }) => ({
    borderBottom: isActive ? "3px solid #ff6600" : "none"
  })}
>
  Home
</Nav.Link>

{/* About */}
<Nav.Link
  as={NavLink}
  to="/about"
  style={({ isActive }) => ({
    borderBottom: isActive ? "3px solid #ff6600" : "none"
  })}
>
  About Us
</Nav.Link>
            <Nav.Link as={NavLink} to="/carriers">
              Carriers
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <div className="d-flex align-items-center phone-box">
              <TelephoneFill className="me-2 phone-icon" />
              <span>(561) 680-6987</span>
            </div>

            <button className="custom-btn" onClick={handleGetQuote}>
              Get Free Quote
            </button>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;