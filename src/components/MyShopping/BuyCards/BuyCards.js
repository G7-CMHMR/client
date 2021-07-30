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

    const purchaseOrder = useSelector(state => state.purchaseOrderReducer.ProductsHistory)
	console.log('PURCHASEORDER: ',purchaseOrder);
    return (
        <div id='Container_Cards'>
            <br></br>
            {
                purchaseOrder.map((x) => {
                    if (x.product) {
                        return (
                            <BuyCard productId={x.product.id} images={x.product.images[0].image} price={x.product.price}
                                amount={x.amount} promotion={x.product.promotion.delivery} status={x.product.status}
                                name={x.product.name} />
                        )
                    }

                    if (x.save_product_state) {
                        return (
                            <BuyCard productId={x.save_product_state.productId} images={x.save_product_state.images[0].image} price={x.save_product_state.price}
                                amount={x.amount} promotion={{ delivery: x.save_product_state.prom_delivery }} status={x.save_product_state.status}
                                name={x.save_product_state.name} />
                        )
                    }
                })

            }
        </div>
    );
}

{/* {
                purchaseOrder_Products && purchaseOrder_Products.product ? purchaseOrder_Products.map((x) => {
                    return (
                        <BuyCard id={x.id} amount={x.amount}
                            cartId={x.cartId} productId={x.productId} purchaseOrderId={x.purchaseOrderId}
                            name={x.product.name} status={x.product.status} price={x.product.price}
                            valuation={x.product.valuation} stock={x.product.stock} brand={x.product.brand}
                            description={x.product.description} type={x.product.type} warranty={x.product.warranty}
                            sellerId={x.product.sellerId} promotion={x.product.promotion} images={x.product.images}
                            category={x.product.categories} />
                    )
                }) : <h1>Noup</h1>
            }
            {
                purchaseOrder_Products && purchaseOrder_Products.save_product_state ? purchaseOrder_Products.map((x) => {
                    return (
                        <BuyCard productId='1' images={{ image: '0' }} price={x.save_product_state.price}
                            amount={x.amount} promotion={{ delivery: x.save_product_state.prom_delivery }} status={x.save_product_state.status} />
                    )
                }) : <h1>Noup</h1>
            } */}

export default BuyCards
