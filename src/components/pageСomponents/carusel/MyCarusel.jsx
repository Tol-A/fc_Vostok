import Carousel from 'react-bootstrap/Carousel';
import logo from '../../images/images2.jpeg';
import logo2 from '../../images/vostok1.jpeg';
import './CaruselModule.css'




function MyCarousel() {
  return (
   <div className='carusel_block'>
        <Carousel fade interval={30000}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo2}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
   </div>
  );
}

export default MyCarousel;