import { Col, Container, Row } from "react-bootstrap";


const Category = () => {
    return (
 <Container>
            <Row className="mt-5 mb-5 text-center mx-auto"  >
                <Col xs={12} md={6} lg={4} xl={4} className="bg-danger p-5">
                    <div>   </div>
                    <div> 
                        <h3> FREE SHOPING </h3>
                        <p> You’ll get loads of concepts from experienced designers around the globe. </p>    
                    </div>
                </Col>

                <Col xs={12} md={6} lg={4} xl={4} className="bg-warning p-5">
                    <div>
                        <h3> 30 DAYS RETURN </h3>
                        <p> You’ll get loads of concepts from experienced designers around the globe. </p>
                    </div>
                </Col>

                <Col xs={12} md={6} lg={4} xl={4} className="bg-success p-5">
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