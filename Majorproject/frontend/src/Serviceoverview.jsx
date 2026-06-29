import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ServiceOverview() {
  return (
    <Container className="Service-overview">
      <h2>Our Services </h2>
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card className="card-overview">
            <Card.Body>Web Development</Card.Body>
          </Card>
        </Col>
        
        <Col>
          <Card className="card-overview">
            <Card.Body>App Development</Card.Body>
          </Card>
        </Col>
        
        <Col>
          <Card className="card-overview">
            <Card.Body>Cyber security</Card.Body>
          </Card>
        </Col>
        
        <Col>
          <Card className="card-overview">
            <Card.Body>AI Solutions</Card.Body>
          </Card>
        </Col>
        
        <Col>
          <Card className="card-overview">
            <Card.Body>UI/UX Design</Card.Body>
          </Card>
        </Col>
    </Row>
    </Container>
  );
}

export default ServiceOverview;