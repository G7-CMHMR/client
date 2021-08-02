import './ProductsCards.css'
import ProductCard from '../ProductCard/ProductCard'

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { getFavourites } from '../../../redux/Actions/Favourites/Actions';


function ProductsCards() {

    const favouritesReducer = useSelector(state => state.favouritesReducer)
    const userReducer = useSelector(state => state.userReducer.userData)
    const idUser = userReducer.id
    const dispatch = useDispatch()

    useEffect(() => {
        if (userReducer.id) {
            dispatch(getFavourites(idUser))
        }
        return () => {

        }
    }, [dispatch, userReducer])


    return (

        <div id='FavoritesProductCards'>
            {favouritesReducer.favourites.length != 0 ? favouritesReducer.favourites.map((x) => {
                return (
                    <ProductCard price={x.price} discount={x.discount} images={x.images}
                        name={x.name} seller={x.seller} status={x.status} valuation={x.valuation}
                        delivery={x.delivery} id={x.id} />
                )
            }) : <h5>¡Aún no tienes, Agrega productos a favoritos!</h5>}
        </div>
    )
}



export default ProductsCards