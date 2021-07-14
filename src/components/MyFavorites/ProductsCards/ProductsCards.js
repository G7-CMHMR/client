import './ProductsCards.css'
import ProductCard from '../ProductCard/ProductCard'

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts, getProductsOfCategory } from '../../../redux/Actions/Products/Actions';
import { useParams } from "react-router";

function ProductsCards() {

    const productsReducer = useSelector (state => state.productsReducer)
    const dispatch = useDispatch()
    const { categoryName } = useParams()
    useEffect(() => {
        dispatch(getAllProducts())
	}, [dispatch, categoryName])

    return (
    
        <div id='CategoryProductCards'>
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