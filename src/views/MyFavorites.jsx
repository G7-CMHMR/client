import Separate from '../components/Utils/Separate/Separate'
import './MyFavorites.css'



import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";

import {getProductDetail} from '../redux/Actions/Products/Actions'

function MyFavorites() {

    const { idProducto } = useParams()

    const dispatch = useDispatch();
    const productsReducer = useSelector(state => state.productsReducer)

  
    useEffect(() => {
      dispatch(getProductDetail(idProducto))
    }, [dispatch, idProducto])


    return (
    
        <div className='DetailContainer'>
            <Separate></Separate>
            <div id='ContentDetail'>
               
            </div>

            <Separate></Separate>
        </div>
    )
}

export default MyFavorites
