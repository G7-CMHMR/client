//Imagenes de la publiacion
import './Images.css'

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
    }, [dispatch])


    return (
        <div id='ContainerImages'>
            <img id='LargeImage' src={productsReducer.images? productsReducer.images[0] : ''} width='600px'></img>
            <div id='MiniImages'>
                {}
                <img src={productsReducer.images? productsReducer.images[1] : ''} width='140px' height='120px'></img>
                <img src={productsReducer.images? productsReducer.images[2] : ''} width='140px' height='120px'></img>
                <img src={productsReducer.images? productsReducer.images[3] : ''} width='140px' height='120px'></img>
                <img src={productsReducer.images? productsReducer.images[4] : ''} width='140px' height='120px'></img>
            </div>
            
        </div>
    )
}



export default Images