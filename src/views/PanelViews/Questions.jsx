import Separate from '../../components/Utils/Separate/Separate';
import './Questions.css'


import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";


function Questions() {

    //const dispatch = useDispatch();
    //const productsReducer = useSelector(state => state.productsReducer)

  
    // useEffect(() => {
    //   //dispatch(getProductDetail(idProducto))
    // }, [dispatch, idProducto])


    return (
    
        <div className='PanelContainerQuestion'>
            <Separate></Separate>

            <div id='PanelContentDetail'>
               
            </div>

            <Separate></Separate>
        </div>
    )
}

export default Questions
