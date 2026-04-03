import React from 'react';
import { Button } from 'react-bootstrap';
import { TelephoneFill } from 'react-bootstrap-icons';

const FloatingCallButton = () => {
  const handleCall = () => {
    window.location.href = 'tel:+15616806987';
  };

  return (
    <Button 
      onClick={handleCall}
      className="call-btn shadow position-fixed bottom-0 end-0 m-4 d-flex align-items-center gap-2"
      style={{
        backgroundColor: '#f5a623',
        border: 'none',
        padding: '4px 20px',
        fontSize: '0.9rem',
        fontWeight:'bold',
        zIndex: 1050,
        borderRadius: '50px'
      }}
    >
      <TelephoneFill size={24} />
      Get Your Free Quote <br />
      Call (561) 680-6987
    </Button>
  );
};

export default FloatingCallButton;