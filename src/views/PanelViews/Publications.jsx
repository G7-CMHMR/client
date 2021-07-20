import Separate from '../../components/Utils/Separate/Separate';
import './Publications.css'
import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";
import MyPublicationCard from '../../components/Utils/MyPublicationCard/MyPublicationCard'
import {seller_getAllProducts} from '../../redux/Actions/Seller/Actions'


function Publications() {
    const userReducer = useSelector(state => state.userReducer.userData)
    const sellerReducer = useSelector(state => state.sellerReducer.Products_Visible)
    const dispatch = useDispatch();
    var userId = userReducer.id

    useEffect(() => {
        dispatch(seller_getAllProducts(userId, true))
      }, [ dispatch])



    return (
    
        <div className='ProductPanelContainer'>
            <h1>Mis publicaciones</h1>
            <br></br>
                {
                    sellerReducer? sellerReducer.length>0 ? sellerReducer.map((x) => {
                        return <MyPublicationCard
                        price={x.price} discount={x.discount} images={x.images}
                         name={x.name} id={x.id} stock={x.stock} sold={x.sold}
                        /> 
                    }): <p>Ups no tenes publicaciones! Activa uno de tus productos o bien, crea uno</p>:''
                }
        </div>
    )
}

export default Publications
