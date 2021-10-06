import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center bg-info text-white text-uppercase fixed-bottom p-3 mt-5"
    >
      <strong>&copy; Github Users Search with Firebase Auth</strong>
    </Container>
  );
};

export default Footer;
