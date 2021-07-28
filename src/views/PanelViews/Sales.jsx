import Separate from '../../components/Utils/Separate/Separate';
import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from "react-router";
import MySales from '../../components/Utils/MySales/MySales'
import { getFavourites } from '../../redux/Actions/Favourites/Actions';
import { seller_GetSolds_WithFilter } from '../../redux/Actions/Seller/Actions';
import SalesFilter from '../../components/Sales/SalesFilter';


function Sales() {
    const sellerReducer = useSelector(state => state.sellerReducer.ProductsSold)
    const userReducer = useSelector(state => state.userReducer.userData)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(seller_GetSolds_WithFilter(input))
    }, [dispatch])

    const [input, setInput] = useState({
        id: userReducer.idSeller,
        status: null,
        productId: null,
        category: null,
    })

    return (

        <div className='ProductPanelContainer'>
            <h1>Mis ventas</h1>
            <SalesFilter></SalesFilter>
            {   
                sellerReducer && sellerReducer.length > 0 ? sellerReducer.map((e) => {
                    return <MySales
                        date={e.date} buyer={e.buyer} id_buyer={e.id_buyer} product_status={e.product_status}
                        address={e.address} productId={e.productId} amount={e.amount} sellerId={e.sellerId}
                        item={e.item} name={e.item.product.name} price={e.item.product.price} 
                        discount={e.item.product.promotion.value} images={e.item.product.images}
                    />
                }) : <p>Ups no tenes ventas!</p>
            }
        </div>
    )
}

export default Sales
