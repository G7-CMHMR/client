//card que se renderiza en Shoppin History (historial del compras)
import './BuyCards.css'
import BuyCard from "../BuyCard/BuyCard";
import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";
import { getUserItems } from '../../../redux/Actions/PurchaseOrder/Actions';



function BuyCards() {
    const dispatch = useDispatch();
    const userReducer = useSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(getUserItems(userReducer.userData.id))
    }, [])

    const purchaseOrderReducer = useSelector(state => state.purchaseOrderReducer.ProductsHistory)

    return (
        <div id='Container_Cards'>
            <br></br>
            {
                purchaseOrderReducer.length > 0 ? purchaseOrderReducer.map((x) => {
                    return (
                        <BuyCard id={x.id} amount={x.amount}
                        cartId={x.cartId} productId={x.productId} purchaseOrderId={x.purchaseOrderId}
                        name={x.product.name} status={x.product.status} price={x.product.price}
                        valuation={x.product.valuation} stock={x.product.stock} brand={x.product.brand}
                        description = {x.product.description} type={x.product.type} warranty={x.product.warranty} 
                        sellerId={x.product.sellerId} promotion={x.product.promotion} images={x.product.images}
                        category={x.product.categories}/> 
                    )
                }) : <h1>Noup</h1>
            }
        </div>
    );
}



export default BuyCards