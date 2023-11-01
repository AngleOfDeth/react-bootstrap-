import { Col, Container, Row } from "react-bootstrap"

import Card from 'react-bootstrap/Card';
const Blogs = () => {
    return (
        <Container>
            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 3 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src="./images/blog01.jpg" />
                            <Card.Body>
                                <Card.Title>Blog title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Blogs