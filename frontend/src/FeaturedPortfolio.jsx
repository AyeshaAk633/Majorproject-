import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function FeaturedPortfolio() {
  const projects = [
    {
      title:"Corporate Website",
      description:"A modern, responsive corporate website designed to strengthen brand identity, build credibility, and generate business leads.",
      image:"https://images.pexels.com/photos/15543038/pexels-photo-15543038.jpeg"
      
    },
    {
      title:"E-commerce Platform",
      description:"A secure online shopping platform with product management, payment integration, and a seamless customer experience.",
      image:"https://images.pexels.com/photos/7947654/pexels-photo-7947654.jpeg"
    },
    {
      title:"Buisness Dashboard",
      description:"An interactive analytics dashboard that transforms business data into meaningful insights with real-time reporting.",
      image:"https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg"
    }
    ]
  return (
    <Container className="portfolio-section">
      <h2>Featured portfolio </h2>
      <Row xs={1} md={2} className="g-4">
        {projects.map((project, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Link to="/portfolio">
                  <Button variant="primary">View Project</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FeaturedPortfolio;