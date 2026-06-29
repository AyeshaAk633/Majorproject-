import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Metrices() {
  return (
    <Container className="Metric-section">
    
      <Row className="text">
        <Col md={3}>
          <h2>150+</h2>
          <p>Project Completed </p>
        </Col>
      
        <Col md={3}>
          <h2>200+</h2>
          <p>Happy clients</p>
        </Col>
        
        <Col md={3}>
          <h2>3+</h2>
          <p>Years Experience</p>
        </Col>
        
        <Col md={3}>
          <h2>24/7</h2>
          <p>Support </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Metrices;