import { CardText } from 'react-bootstrap';
import { ArrowRight, StarFill, StarHalf } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({ img, title, desc, price,}) {
    return (
        <Card className='mb-3 position-relative ' >
            

            <Card.Img variant="top" src={img} />
            <Card.Body>

                <Card.Title> {title} </Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <CardText className='fs-4 ' >
                    {price}$
                </CardText>
                <CardText>
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarHalf />
                    
                </CardText>
                <Button size='sm' variant="outline-secondary ">Go To Shop <ArrowRight/> </Button>
            </Card.Body>
        </Card>
    );
}
export default ProductCard;
