import { Col, Container, Row } from "react-bootstrap";
import {  Repeat, Smartwatch, Truck } from 'react-bootstrap-icons';



const Category = () => {
    return (
        <Container>
            <Row className="mt-5 mb-5 text-center mx-auto"  >
                <Col xs={12} md={6} lg={4} xl={4} className="bg-danger p-5">
                    <div>  <Truck size={70} /> </div>

                    <br/>
                    <div>
                        <h3> FREE SHOPING </h3>
                        <p> You’ll get loads of concepts from experienced designers around the globe. </p>
                    </div>
                </Col>

                <Col xs={12} md={6} lg={4} xl={4} className="bg-warning p-5">
                    <div>  <Smartwatch size={70} /> </div>
                    <br/>
                    <div>
                        <h3> 30 DAYS RETURN </h3>
                        <p> You’ll get loads of concepts from experienced designers around the globe. </p>
                    </div>
                </Col>

                <Col xs={12} md={6} lg={4} xl={4} className="bg-success p-5">
                    <div>  <Repeat size={70} /> </div>

                    <br/>
                    <div>
                        <h3> 100% PAYMENT SECURE </h3>
                        <p> You’ll get loads of concepts from experienced designers around the globe. </p>
                    </div>
                </Col>

            </Row>
        </Container>
    )
}

export default Category