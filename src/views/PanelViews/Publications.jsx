import Separate from '../../components/Utils/Separate/Separate';
import './Publications.css'



import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";

import Menu from '../../components/Panel/Menu/Menu';

function Publications() {

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
                <div>
                    <h1>Publicaciones</h1>
                </div>

            </div>

            <Separate></Separate>
        </div>
    )
}

export default Publications
