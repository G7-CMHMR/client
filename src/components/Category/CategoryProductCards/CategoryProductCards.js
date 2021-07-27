import React, { useEffect } from 'react';
import CategoryOrder from '../CategoryOrder/CategoryOrder'
import ProductCard from '../ProductCard/ProductCard'
import './CategoryProductCards.css'
import { useSelector, useDispatch } from 'react-redux'
import { getAllFavourites, getAllProducts, getProductsOfCategory, getProducts, getProductsOffer } from '../../../redux/Actions/Products/Actions';
import { useParams } from "react-router";
import { getFavourites } from '../../../redux/Actions/Favourites/Actions';


function CategoryProductCards() {
    const userReducer = useSelector(state => state.userReducer.userData)
    const dispatch = useDispatch();
    var userID = userReducer.id
    const { categoryName } = useParams()
    const { nombreProducto } = useParams()
    let offer = false;
    if(!categoryName && !nombreProducto){offer = true}
  

    useEffect(() => {
        if (nombreProducto) dispatch(getProducts(nombreProducto))
        if (categoryName) dispatch(getProductsOfCategory(categoryName))
        if (offer) dispatch(getProductsOffer()) 
    }, [dispatch, categoryName, nombreProducto, offer])

    const productsReducer = useSelector(state => state.productsReducer)



    return (
        <div id="CategoryProductCards">
            <CategoryOrder></CategoryOrder>
            {productsReducer.products.length>0 ? productsReducer.products.map((x) => {
                return (
                    <ProductCard name={x.name} images={x.images}
                        valuation={x.valuation} delivery={x.delivery} price={x.price}
                        discount={x.discount} seller={x.seller}
                        status={x.status} id={x.id} />
                )
            }): <h4>No hay productos que coincidan!</h4> }
        </div>
    )
}



export default CategoryProductCards