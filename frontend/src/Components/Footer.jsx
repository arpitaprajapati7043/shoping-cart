import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col className="text-center">
              <span>
                Copyright &copy; Arpi
              </span>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
