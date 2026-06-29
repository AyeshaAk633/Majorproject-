import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Testimonial() {
  const testimonials = [
    {
      name: "Anjali K",
      role: "Business Owner",
      review:
        "OutPro India delivered an amazing website with great performance and design.",
    },
    {
      name: "Aslan Khan",
      role: "Startup Founder",
      review:
        "Very professional team. The app they built exceeded our expectations.",
    },
    {
      name: "Muskan",
      role: "Marketing Manager",
      review:
        "Excellent service and support. Highly recommended for business websites.",
    },
    {
      name: "Kabir Aman",
      role: "Project Manager",
      review:
        "Amazing experience! The team delivered a modern and responsive website with great attention to detail.",
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center">Client Testimonials</h2>

      <Row xs={1} md={2} lg={4} className="g-4">
        {testimonials.map((item, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle>
                  {item.role}
                </Card.Subtitle>

                <Card.Text>{item.review}</Card.Text>

                <h6>⭐⭐⭐⭐⭐</h6>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div>
        <h3>Client Testimonial Video</h3>

        <div>
          <iframe
            src="https://www.youtube.com/embed/ScMzIvxBSi4"
            title="Client Testimonial Video"
          ></iframe>
        </div>
      </div>
    </Container>
  );
}

export default Testimonial;