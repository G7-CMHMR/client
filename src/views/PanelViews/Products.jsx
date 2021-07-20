import Separate from '../../components/Utils/Separate/Separate';
import './Products.css'
import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";
import MyProductCard from '../../components/Utils/MyProductCard/MyPoductCard'
import { getFavourites } from '../../redux/Actions/Favourites/Actions';


function Products() {
    const userReducer = useSelector(state => state.userReducer.userData)
    const dispatch = useDispatch();
    var userID = userReducer.id
    const favourites = useSelector(state => state.favouritesReducer.favourites)
    useEffect(() => {
        dispatch(getFavourites(userID))
      }, [ dispatch, userID])

    return (
    
        <div className='ProductPanelContainer'>
            <h1>Mis productos</h1>
            <h6>esta mostrando favoritos, no mis productos</h6>
            <br></br>
                <br></br>
                {
                    favourites.length>0 ? favourites.map((x) => {
                        return <MyProductCard 
                        price={x.price} discount={x.discount} images={x.images}
                         name={x.name} id={x.id} stock={x.stock} sold={x.sold}
                        /> 
                    }): <p>Ups no tenes productos!</p>
                }
               
        </div>
    )
}

export default Products
