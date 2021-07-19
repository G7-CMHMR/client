import Separate from '../components/Utils/Separate/Separate'
import './Success.css'



import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";

import { getProductDetail } from '../redux/Actions/Products/Actions'

function Success() {

    const { data } = useParams()

    const dispatch = useDispatch();
    const productsReducer = useSelector(state => state.productsReducer)

    const userReducer = useSelector(state => state.userReducer.userData)


    var query = window.location.search.substring(1);
    var payment_type = ''
    query = query.split("&")
    for (var i = 0; i < query.length; i++) {
        var pair = query[i].split("=");
        console.log(pair)
        if (pair[0] == 'payment_type') { payment_type = pair[1]; }
    }

    return (

        <div className='DetailContainerSuccess'>
            <Separate></Separate>
            <div id='ContentDetailSuccess'>
                <br></br>
                <h1>¡Has comprado exitosamente!</h1>
                <h3>Datos de la compra:</h3>

                <h5>ID USUARIO: {userReducer.id}</h5>
                <h5>METODO PAGO: {payment_type} </h5>

            </div>

            <Separate></Separate>
        </div>
    )
}

export default Success
