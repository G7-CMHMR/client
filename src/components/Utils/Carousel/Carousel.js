import React from 'react'
import './Carousel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'

const Carrousel = () => {
    return (
        <div className='CarouselContainer'>

            <Carousel id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://http2.mlstatic.com/D_NQ_945964-MLA46582738101_072021-OO.webp" className="d-block w-100" alt="..." width='80%' height='200px' />
                    </div>
                    <div className="carousel-item">
                        <img src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1606832971353-headerdesktop.jpg" className="d-block w-100" alt="Imagen" width='80%' height='200px' />
                    </div>
                </div>
                
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>

                </button>
            </Carousel>

        </div>
    )
}

export default Carrousel