import Separate from '../../components/Utils/Separate/Separate';
import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";
import MyPublicationCard from '../../components/Utils/MyPublicationCard/MyPublicationCard'
import { getFavourites } from '../../redux/Actions/Favourites/Actions';

function Publications() {
    const userReducer = useSelector(state => state.userReducer.userData)
    const dispatch = useDispatch();
    var userID = userReducer.id
    const favourites = useSelector(state => state.favouritesReducer.favourites)
    useEffect(() => {
        dispatch(getFavourites(userID))
      }, [ dispatch, userID])

    return (
    
        <div className='ProductPanelContainer'>
            <h1>Mis publicaciones</h1>
            <h6>esta mostrando favoritos, no mis publicaciones</h6>
            <br></br>
                <br></br>
                {
                    favourites.length>0 ? favourites.map((x) => {
                        return <MyPublicationCard
                        price={x.price} discount={x.discount} images={x.images}
                         name={x.name} id={x.id} stock={x.stock} sold={x.sold}
                        /> 
                    }): <p>Ups no tenes publicaciones! Activa uno de tus productos o bien, crea uno</p>
                }
        </div>
    )
}

export default Publications
