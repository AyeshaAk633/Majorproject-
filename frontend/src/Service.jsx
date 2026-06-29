import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";

function Services() {
    const services =[
        {
            icon:"💻",
            title:"Web Development",
            text:"We design and develop responsive, high-performance websites that strengthen modern digital presence.",
            path:"/services/web-development"

        },
        {
            icon:"📱",
            title:"App Development",
            text:"We build mobile applications that solve real-world problems and deliver seamless digital experiences across platforms.",
            path:"/services/app-development"
        },
        {
            icon:"🤖",
            title:"Artificial Intelligence",
            text:"Explore intelligent systems and real-world AI applications that transform industries and drive innovation.",
            path:"/services/ai"
        },
        {
            icon:"🔐",
            title:"Cybersecurity",
            text:"Protect networks, data, and systems with advanced security solutions in an increasingly digital world.",
            path:"/services/cybersecurity"
        },
        {
            icon:"🎨",
            title:"UI/UX Design",
            text:"Design intuitive and user-friendly interfaces that enhance user experience and engagement.",
            path:"/services/uiux"
        }
    ]

  return (
    <Container className="services-page">
        <div className="service-header">
            <h1>Our Services</h1>
            <p>We deliver complete digital solutions to help businesse grow online and scale faster.</p>
        </div>

            <Row xs={1} md={2} className="g-4">
                {services.map((item, idx) => (
                    <Col key={idx}>
                        <Card className="services-card">
                            <Card.Body>
                                <div className="service-icon">{item.icon}</div>
                                <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{item.text}</Card.Text>
                            <Link to={item.path} className="service-btn">View Details</Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
  );
}

export default Services;