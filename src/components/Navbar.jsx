import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
    return (
        <Navbar>

            <Container>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll d-flex justify-content-between">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Nav.Link href="#action2">Home</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                        <Nav.Link href="#action2">Services</Nav.Link>
                        <Nav.Link href="#action2">Contact</Nav.Link>
                   
                    </Nav>
                    <NavbarBrand className='fw-bold'> LOGO </NavbarBrand>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;