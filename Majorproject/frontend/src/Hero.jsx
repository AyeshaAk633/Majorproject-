import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Hero() {
  return (
    <Container className="hero-section">
      <Row className="hero-row">

        <Col md={6}>
          <h1>Outpro.India - Modern Digital Solutions</h1>

          <p>Empowering businesses with modern web development, mobile applications, AI solutions, cybersecurity, and UI/UX design.
          </p>

          <Button as={NavLink} to="/services" variant="primary" className="me-2">Get Started</Button>

          <Button as={NavLink} to="/about" variant="outline-primary">Learn More</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;