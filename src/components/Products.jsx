import { Col, Container, Row } from "react-bootstrap"
import ProductCard from "./card/ProductCard";

const Products = () => {

    const cardData = [
        { id: 1, img: "./images/p01.jpg", title: "product 1", desc: " this is  text for present product1 ", price: 43, disc: 23 },
        { id: 2, img: "./images/p01.jpg", title: "product 2", desc: " this is  text for present product2 ", price: 72 },
        { id: 3, img: "./images/p01.jpg", title: "product 3", desc: " this is  text for present product3 ", price: 48 },
        { id: 4, img: "./images/p01.jpg", title: "product 4", desc: " this is  text for present product4 ", price: 82, disc: 18 },
        { id: 5, img: "./images/p01.jpg", title: "product 5", desc: " this is  text for present product5 ", price: 37 },
        { id: 6, img: "./images/p01.jpg", title: "product 6", desc: " this is  text for present product6 ", price: 86, disc: 15 },
        { id: 7, img: "./images/p01.jpg", title: "product 7", desc: " this is  text for present product7 ", price: 58 },
        { id: 8, img: "./images/p01.jpg", title: "product 8", desc: " this is  text for present product8 ", price: 74 },
    ]

    return (
        <Container className="products">
            <Row>

                {cardData.map(item => {
                    return (
                        <>
                            <Col key={item.id} sm={12} md={6} lg={4} xl={3} >
                                <ProductCard img={item.img} title={item.title} desc={item.desc} price={item.price} disc={item.disc} />
                            </Col>
                        </>
                    )

                })}
            </Row>
        </Container>
    )
}

export default Products