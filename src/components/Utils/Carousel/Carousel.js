import React from 'react'
import './Carousel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'



const Carrousel = () => {
    return (
        <div className='CarouselContainer'>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://http2.mlstatic.com/D_NQ_731316-MLA46625389859_072021-OO.webp"
      alt="First slide" height="230px"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.fullh4rd.com.ar/adminrgb/img/banner/69.png"
      alt="Second slide" height="230px"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.fullh4rd.com.ar/adminrgb/img/banner/52.png"
      alt="Third slide" height="230px"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://http2.mlstatic.com/D_NQ_713440-MLA46669463157_072021-OO.webp"
      alt="Second slide" height="230px"
    />
  </Carousel.Item>
</Carousel>

        </div>
    )
}

export default Carrousel