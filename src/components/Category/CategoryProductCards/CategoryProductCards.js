import React, { useEffect } from 'react';
import CategoryOrder from '../CategoryOrder/CategoryOrder'
import ProductCard from '../ProductCard/ProductCard'
import './CategoryProductCards.css'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from '../../../redux/Actions/Products/Actions';



function CategoryProductCards() {
    
    const productsReducer = useSelector (state => state.productsReducer)
    const dispatch = useDispatch()
    useEffect(() => {
		dispatch(getAllProducts())
	}, [dispatch])
    
    return(
        <div id="CategoryProductCards">
            <CategoryOrder></CategoryOrder>
            {productsReducer.products.map((x)=>{
			return(
				<ProductCard name={x.name} images={x.images} 
                valuation={x.valuation} delivery={x.delivery} price={x.price}
                discount={x.discount} serller={x.seller}
                status={x.status} />
			)
		})}
        </div>
    )
}      



export default CategoryProductCards