import Separate from '../components/Utils/Separate/Separate'
import './MyShopping.css'

import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";

import BuyCards from '../components/MyShopping/BuyCards/BuyCards';

import { getPurchaseOrderHistory } from '../redux/Actions/PurchaseOrder/Actions'


function MyShopping() {
    const { data } = useParams()

    const dispatch = useDispatch();
    const productsReducer = useSelector(state => state.productsReducer)

    const userReducer = useSelector(state => state.userReducer.userData)


    var query = window.location.search.substring(1);
    var payment_type = ''
    var preference_id = ''
    var status = ''
    query = query.split("&")
    for (var i = 0; i < query.length; i++) {
        var pair = query[i].split("=");
        if (pair[0] == 'payment_type') { payment_type = pair[1]; }
        if (pair[0] == 'preference_id') { preference_id = pair[1]; }
        if (pair[0] == 'status') { status = pair[1]; }
    }

    //const purchaseOrderHistory = useSelector(state => state.purchaseOrderReducer.purchaseOrderHistory)
    if (preference_id) {

    }

    useEffect(() => {
        dispatch(getPurchaseOrderHistory({
            userId: "2"
        }))
    }, [])


    return (

        <div className='DetailContainer'>
            <Separate></Separate>
            <div id='HistorialDeCompras'>
                <h1>Historial de compras</h1>
                <h2>{payment_type}</h2>
                <h2>{preference_id}</h2>
                <h2>{status}</h2>
                <BuyCards></BuyCards>
            </div>
            <Separate></Separate>
        </div>
    )
}

export default MyShopping
