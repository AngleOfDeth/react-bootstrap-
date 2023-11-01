import { Button, Col, Container, Row } from "react-bootstrap"
import "./footer.css"
import { ArrowRight } from "react-bootstrap-icons"
import Nav from 'react-bootstrap/Nav';

import Form from 'react-bootstrap/Form';

const Footer = () => {
  return (
    <Container fluid className="fotoer p-5 text-white">
      <section className="footer__box m-auto">
        <Row>
          <Col className="p-4" >
          <h4 className="font-weight-bold">About Shop</h4>
            <p className="font-weight-light">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, .</p>
            <Button size='sm' variant="outline-light ">Read More <ArrowRight /> </Button>

          </Col>
          <Col className="p-4 text-center">
          <h4 className="font-weight-bold"> Site Map </h4>

            <Nav className="flex-column ">
              <Nav.Link className="text-light"  href="#action2">Home</Nav.Link>
              <Nav.Link className="text-light"  href="#action2">About</Nav.Link>
              <Nav.Link className="text-light"  href="#action2">Services</Nav.Link>
              <Nav.Link className="text-light"  href="#action2">Contact</Nav.Link>
            </Nav>

          </Col>
          <Col className="p-4" >
          <p className="font-weight-bold">Bold text.</p>
            <Form>
              
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
         
              <Button size='sm' variant="outline-light" type="submit" > Submit <ArrowRight /> </Button>

            </Form>
          </Col>
  
        </Row>

      </section>
    </Container>
  )
}

export default Footer