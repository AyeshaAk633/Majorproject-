import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Testimonials() {
  const reviews= [
    {
      name:"Anjali k",
      text:"Outpro.India delivered an amazing website with great performance and design."
    },
    {
      name:"Aslan khan",
      text:"Very professional team. The app they built exceeded our expectations."
    },
    {
      name:"Muskan",
      text:"Excellent service and support. Highly recommended for business websites."
    },
    {
      name:"Kabir Aman",
      text:"Amazing experience! The team delivered a modern and responsive website with great attention to detail."
    }
  ]
  return (
    <Container className="testimonial-section">
      <h2>What Our Clients Say</h2>
      <Row xs={1} md={3} className="g-4">
      {reviews.map((item, idx) => (
        <Col key={idx}>
          <Card className="testimonial-card">
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.text}</Card.Text>
              <h5>⭐⭐⭐⭐⭐</h5>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    
    <div>
      <Link to="/testimonial">
        <Button variant="primary">View All Testimonials </Button>
      </Link>
    </div>
    </Container>
  );
}

export default Testimonials;