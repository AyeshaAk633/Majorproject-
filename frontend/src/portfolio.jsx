import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Portfolio () {
  const projects = [
    {
      title:"Corporate Website",
      description:"A modern, responsive corporate website designed to strengthen brand identity, build credibility, and generate business leads.",
      image:"https://images.pexels.com/photos/15543038/pexels-photo-15543038.jpeg",
      kpi:"Improved Brand Visibility"
    },
    {
      title:"Weather App",
      description:"A real-time weather application using API integration to display live weather updates.",
      image:"https://images.pexels.com/photos/33210885/pexels-photo-33210885.jpeg",
      kpi:"Real-Time Weather updates"
    },
    {
      title:"E-commerce Platform",
      description:"A secure online shopping platform with product management, payment integration, and a seamless customer experience.",
      image:"https://images.pexels.com/photos/7947654/pexels-photo-7947654.jpeg",
      kpi:"Secure Online Shopping Experience"
    },
    {
      title:"To-Do Application",
      description:"A task management app that allows users to add, edit, and delete daily tasks efficiently.",
      image:"https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      kpi:"Improve Daily Task management"
    },
    {
      title:"Buisness Dashboard",
      description:"An interactive analytics dashboard that transforms business data into meaningful insights with real-time reporting.",
      image:"https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg",
      kpi:"Real-Time Business Insights"
    },
    {
      title:"Portfolio website",
      description:"A personal portfolio website built using React and Bootstrap showcasing skills and projects.",
      image:"https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      kpi:"Responsive Design Across All Devices"
    }
  ];
  
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {projects.map((project, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <h6>KPI Highlight</h6>
              <p>✔️ {project.kpi}</p>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Portfolio;