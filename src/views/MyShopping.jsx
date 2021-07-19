import Separate from '../components/Utils/Separate/Separate'
import './MyShopping.css'

import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";

import {getPurchaseOrderHistory} from '../redux/Actions/PurchaseOrder/Actions'

function MyShopping() {

    const { params } = useParams()

    const dispatch = useDispatch();
    const purchaseOrderHistory = useSelector(state => state.purchaseOrderReducer.purchaseOrderHistory)

  
    useEffect(() => {
      dispatch(getPurchaseOrderHistory({
        userId : "2" 
    }))
    }, [])


    return (
    
        <div className='DetailContainer'>
            <Separate></Separate>
            <h1>Historial de compras</h1>
            <div id='ContentDetail'>
            {console.log('sssssssssssssssssssssssssssssssssssssssssssss')}
            {console.log(purchaseOrderHistory)
        }
            </div>

            <Separate></Separate>
        </div>
    )
}

export default MyShopping
