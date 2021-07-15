import Separate from '../components/Utils/Separate/Separate'
import './Panel.css'

import Menu from '../components/Panel/Menu/Menu';

import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";


function Panel() {

    //const dispatch = useDispatch();
    //const productsReducer = useSelector(state => state.productsReducer)

  
    // useEffect(() => {
    //   //dispatch(getProductDetail(idProducto))
    // }, [dispatch, idProducto])


    return (
    
        <div className='PanelContainer'>
            <Separate></Separate>

            <div id='PanelContentDetail'>
                <Menu></Menu>
            </div>

            <Separate></Separate>
        </div>
    )
}

export default Panel
