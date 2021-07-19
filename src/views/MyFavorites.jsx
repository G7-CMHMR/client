import Separate from '../components/Utils/Separate/Separate'
import './MyFavorites.css'



import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";

import {getProductDetail} from '../redux/Actions/Products/Actions'

import ProductsCards from '../components/MyFavorites/ProductsCards/ProductsCards'
import { getFavourites } from '../redux/Actions/Favourites/Actions';
import ProductCard from '../components/MyFavorites/ProductCard/ProductCard';

function MyFavorites() {

    
    const userReducer = useSelector(state => state.userReducer.userData)
    const dispatch = useDispatch();
    //var userID = userReducer.id
    const favourites = useSelector(state => state.favouritesReducer.favourites)
    useEffect(() => {
      dispatch(getFavourites(userReducer.id))
    }, [ dispatch, userReducer])

    return (
    
        <div className='DetailContainer'>
            <Separate></Separate>
            <div id='ContentDetail'>
                <h1>Mis favoritos</h1>
                <br></br>
                <br></br>
                {
                    favourites.length>0 ? favourites.map((x) => {
                        return <ProductCard 
                        price={x.price} discount={x.discount} images={x.images}
                         name={x.name} seller={x.seller} status={x.status} valuation={x.valuation}
                          delivery={x.delivery} id={x.id} 
                        /> 
                    }): <p>Aun no agregaste favoritos</p>
                }
            </div>

            <Separate></Separate>
        </div>
    )
}

export default MyFavorites
