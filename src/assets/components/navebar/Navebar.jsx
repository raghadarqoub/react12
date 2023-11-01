import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
function BasicExample() {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Link to="/products">Products</Link>
            <Link to="/resturent">Restaurant</Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default BasicExample;  