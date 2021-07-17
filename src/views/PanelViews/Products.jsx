import Separate from '../../components/Utils/Separate/Separate';
import './Products.css'



import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";


function Products() {

    //const dispatch = useDispatch();
    //const productsReducer = useSelector(state => state.productsReducer)

  
    // useEffect(() => {
    //   //dispatch(getProductDetail(idProducto))
    // }, [dispatch, idProducto])


    return (
    
        <div className='ProductPanelContainer'>
            <h1>Products</h1>
        </div>
    )
}

export default Products
