import React, { useEffect } from 'react';
import CategoryOrder from '../CategoryOrder/CategoryOrder'
import ProductCard from '../ProductCard/ProductCard'
import './CategoryProductCards.css'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts, getProductsOfCategory } from '../../../redux/Actions/Products/Actions';
import { useParams } from "react-router";


function CategoryProductCards() {
    
    const productsReducer = useSelector (state => state.productsReducer)
    const dispatch = useDispatch()
    const { categoryName } = useParams()
    useEffect(() => {
        dispatch(getAllProducts())
        dispatch(getProductsOfCategory(categoryName))
	}, [dispatch, categoryName])
    
    
    return(
        <div id="CategoryProductCards">
            <CategoryOrder></CategoryOrder>
            {productsReducer.products ? productsReducer.products.map((x)=>{
			return(
				<ProductCard name={x.name} images={x.images} 
                valuation={x.valuation} delivery={x.delivery} price={x.price}
                discount={x.discount} seller={x.seller}
                status={x.status} id={x.id} />
			)
		}): <h5>No hay productos en esta categroia</h5>}
        </div>
    )
}      



export default CategoryProductCards