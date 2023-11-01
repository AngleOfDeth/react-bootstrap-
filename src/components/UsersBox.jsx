import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardImg, Container, Row, Col } from "react-bootstrap";
import { ArrowRight, Facebook, Instagram, Telegram, Twitter } from "react-bootstrap-icons";


const UsersBox = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Container className="mt-5 mb-5" >
            <Row  >
                <Carousel responsive={responsive}>

                    <Col className="m-3" >
                        <Card className="text-center p-2">
                            <CardImg src="./images/avatar.jpg" className="rounded-circle w-25 m-auto" />
                            <Card.Body>
                                <Card.Title> Jason newsted </Card.Title>
                                <Card.Text>
                                    With supporting text below as bass guitar player
                                </Card.Text>

                                <Card.Text>
                                    <Telegram /> <Instagram /> <Twitter /> <Facebook />
                                </Card.Text>

                                <Button size='sm' variant="outline-secondary "> More <ArrowRight /> </Button>

                            </Card.Body>

                        </Card>
                    </Col>

                    <Col className="m-3"  >
                        <Card className="text-center p-2">
                            <CardImg src="./images/avatar.jpg" className="rounded-circle w-25 m-auto" />
                            <Card.Body>
                                <Card.Title> Jason newsted </Card.Title>
                                <Card.Text>
                                    With supporting text below as bass guitar player
                                </Card.Text>

                                <Card.Text>
                                    <Telegram /> <Instagram /> <Twitter /> <Facebook />
                                </Card.Text>

                                <Button size='sm' variant="outline-secondary "> More <ArrowRight /> </Button>

                            </Card.Body>

                        </Card>
                    </Col>

                    <Col className="m-3" >
                        <Card className="text-center p-2">
                            <CardImg src="./images/avatar.jpg" className="rounded-circle w-25 m-auto" />
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as bass guitar player
                                </Card.Text>

                                <Card.Text>
                                    <Telegram /> <Instagram /> <Twitter /> <Facebook />
                                </Card.Text>



                                <Button size='sm' variant="outline-secondary "> More <ArrowRight /> </Button>

                            </Card.Body>

                        </Card>
                    </Col>

                    <Col className="m-3" >
                        <Card className="text-center p-2">
                            <CardImg src="./images/avatar.jpg" className="rounded-circle w-25 m-auto" />
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as bass guitar player
                                </Card.Text>

                                <Card.Text>
                                    <Telegram /> <Instagram /> <Twitter /> <Facebook />
                                </Card.Text>



                                <Button size='sm' variant="outline-secondary ">More <ArrowRight /> </Button>

                            </Card.Body>

                        </Card>
                    </Col>

                    <Col className="m-3" >
                        <Card className="text-center p-2">
                            <CardImg src="./images/avatar.jpg" className="rounded-circle w-25 m-auto" />
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as bass guitar player
                                </Card.Text>
                                <Card.Text>
                                    <Telegram /> <Instagram /> <Twitter /> <Facebook />
                                </Card.Text>



                                <Button size='sm' variant="outline-secondary "> More <ArrowRight /> </Button>

                            </Card.Body>

                        </Card>
                    </Col>

                </Carousel>;
            </Row>
        </Container>
    )
}

export default UsersBox