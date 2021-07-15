import './ProductsCards.css'
import ProductCard from '../ProductCard/ProductCard'

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getProductsOfCategory, getAllFavourites } from '../../../redux/Actions/Products/Actions'
import { useParams } from "react-router";
import axios from 'axios' 




function ProductsCards() {

    const favouritesReducer = useSelector(state => state.favouritesReducer)
    const productsReducer = useSelector(state => state.productsReducer)
    const dispatch = useDispatch()

    const userReducer = useSelector(state => state.userReducer.userData)
    var userId = userReducer.id

    useEffect(() => {
        getAllFavourites(userId)
    }, [dispatch, userId])

    return (

        <div id='CategoryProductCards'>
            {console.log(favouritesReducer)}
            {console.log(userId)}
            {console.log(userReducer)}
            {productsReducer.products ? productsReducer.products.map((x) => {
                return (
                    <ProductCard name={x.name} images={x.images}
                        valuation={x.valuation} delivery={x.delivery} price={x.price}
                        discount={x.discount} seller={x.seller}
                        status={x.status} id={x.id} />
                )
            }) : <h5>No hay productos en esta categroia</h5>}
        </div>
    )
}



export default ProductsCards