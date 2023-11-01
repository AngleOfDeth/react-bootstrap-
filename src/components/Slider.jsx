import Carousel from 'react-bootstrap/Carousel';
const Slider = () => {
  return (
    <div className='h-50' >
      <Carousel data-bs-theme="dark">
        <Carousel.Item >
          <img
            className="d-block w-100 "
            style={{height : "95vh"}}
            src="./images/s01.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
 
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100 "
            style={{height : "95vh"}}
            src="./images/s02.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100 "
            style={{height : "95vh"}}
            src="./images/s03.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
         
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slider