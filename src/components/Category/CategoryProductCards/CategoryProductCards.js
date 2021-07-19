import React, { useEffect } from 'react';
import CategoryOrder from '../CategoryOrder/CategoryOrder'
import ProductCard from '../ProductCard/ProductCard'
import './CategoryProductCards.css'
import { useSelector, useDispatch } from 'react-redux'
import { getAllFavourites, getAllProducts, getProductsOfCategory, getProducts } from '../../../redux/Actions/Products/Actions';
import { useParams } from "react-router";
import { getFavourites } from '../../../redux/Actions/Favourites/Actions';


function CategoryProductCards() {
    const userReducer = useSelector(state => state.userReducer.userData)
    const dispatch = useDispatch();
    var userID = userReducer.id
    const favourites = useSelector(state => state.favouritesReducer.favourites)
    const productsReducer = useSelector (state => state.productsReducer)
    const { categoryName } = useParams()
    const { nombreProducto } = useParams()
    

    useEffect(() => {
        if(nombreProducto)dispatch(getProducts(nombreProducto))
        if(categoryName)dispatch(getProductsOfCategory(categoryName))
        
	}, [/* dispatch, categoryName, nombreProducto, userID */]) 



    
    

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
		}): <h5>No hay productos en esta categoria</h5>}
        </div>
    )
}      



export default CategoryProductCards