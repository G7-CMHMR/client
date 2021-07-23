
//Imagenes de la publiacion
import './Images.css'
import { Carousel } from 'react-bootstrap'
import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";
import { getProductDetail } from '../../../redux/Actions/Products/Actions'

function Images() {

    const { idProducto } = useParams()
    const dispatch = useDispatch();
    const productsReducer = useSelector(state => state.productsReducer.productDetail)
    useEffect(() => {
        dispatch(getProductDetail(idProducto))
    }, [dispatch, idProducto])

    let productimages = productsReducer.images
    
   

    return (
        <div id='ContainerImages'>
            <Carousel>
              {productimages? productimages.map((x)=>{
                
                  return <Carousel.Item>
    <img
      className="d-block w-100"
      src={x.image}
      alt="First slide" height="500px"
    />
  </Carousel.Item>
                }) : "Loading..."
              }
  {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src={productsReducer.images? productsReducer.images[0] : ''}
      alt="First slide" height="500px"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={productsReducer.images? productsReducer.images[1] : ''}
      alt="Second slide" height="500px"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={productsReducer.images? productsReducer.images[2] : ''}
      alt="Third slide" height="500px"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={productsReducer.images? productsReducer.images[3] : ''}
      alt="Second slide" height="500px"
    />
  </Carousel.Item> */}
</Carousel>
            
        </div>
    )
}



export default Images
