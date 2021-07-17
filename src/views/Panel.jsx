import Separate from '../components/Utils/Separate/Separate'
import './Panel.css'

import Menu from '../components/Panel/Menu/Menu';

import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";
import VerticalTabs from '../components/Panel/VerticalTabs/VerticalTabs';



function Panel() {

    //const dispatch = useDispatch();
    //const productsReducer = useSelector(state => state.productsReducer)


    // useEffect(() => {
    //   //dispatch(getProductDetail(idProducto))
    // }, [dispatch, idProducto])


    return (

        <div className='PanelContainerPanel'>
            <Separate></Separate>

            <div id='PanelContentDetail'>
                <VerticalTabs></VerticalTabs>
            </div>

            <Separate></Separate>
        </div>
    )
}

export default Panel
