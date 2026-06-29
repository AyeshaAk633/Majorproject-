import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="logo">Outpro.India</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/" className="links">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="links">About</Nav.Link>
            <Nav.Link as={NavLink} to="/services" className="links">Services</Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio" className="links">Portfolio</Nav.Link>
            <Nav.Link as={NavLink} to="/testimonial" className="links">Testimonials</Nav.Link>
            <Button as={NavLink} to="/contact" variant="primary" className="contact-btn">Contact Us</Button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;