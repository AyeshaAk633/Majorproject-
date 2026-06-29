import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <Container className="about-section">
      <Row className="align-items-center">

        <Col md={6}>
          <h2>About Outpro.India</h2>

          <p>Outpro.India is a modern digital solutions company focused on building responsive websites,web applicatios ,and user-friendly digital products for business.</p>

          <p>We combine creativity and technology to deliver high-quality solutions that hel businesses grow online.</p>

        </Col>

        <Col md={6}>
          <img
            src="https://images.pexels.com/photos/8128190/pexels-photo-8128190.jpeg"
            alt="about"
            className="img-fluid"
          />
        </Col>

      </Row>
    </Container>
  );
}

export default About;