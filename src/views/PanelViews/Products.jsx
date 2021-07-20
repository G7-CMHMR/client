import Separate from '../../components/Utils/Separate/Separate';
import './Products.css'
import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";
import MyProductCard from '../../components/Utils/MyProductCard/MyPoductCard'
import { seller_getAllProducts } from '../../redux/Actions/Seller/Actions';


function Products() {
    const userReducer = useSelector(state => state.userReducer.userData)
    const sellerReducer = useSelector(state => state.sellerReducer.Products_NoVisible)
    const dispatch = useDispatch();
    var userId = userReducer.id

    useEffect(() => {
        dispatch(seller_getAllProducts(userId, false))
      }, [ dispatch])

    return (
    
        <div className='ProductPanelContainer'>
            <h1>Mis productos</h1>
            <br></br>
                {
                    sellerReducer? sellerReducer.length>0 ? sellerReducer.map((x) => {
                        return <MyProductCard 
                        price={x.price} discount={x.discount} images={x.images}
                         name={x.name} id={x.id} stock={x.stock} sold={x.sold} warranty={x.warranty} 
                         delivery={x.delivery} status={x.status} description={x.description} category={x.categories[0]}
                         type={x.type}
                        /> 
                    }): <p>Ups no tenes productos!</p>: ''
                }
               
        </div>
    )
}

export default Products
