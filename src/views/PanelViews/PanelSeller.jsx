import Separate from '../../components/Utils/Separate/Separate';
import './PanelSeller.css'
import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";
import MyPublicationCard from '../../components/Utils/MyPublicationCard/MyPublicationCard'


function PanelSeller() {
    const userReducer = useSelector(state => state.userReducer.userData)
    const sellerReducer = useSelector(state => state.sellerReducer.ProductsSeller)
    const dispatch = useDispatch();
    var userId = userReducer.id

    useEffect(() => {
        
    }, [dispatch])



    return (

        <div className='ProductPanelContainer'>
            <br></br>
            <h1>¡Bienvenido {userReducer.name} a tu panel! 💻</h1>
            <h4>Podrás controlar todas tus ventas y publicaciones</h4><br></br>
            <div>

       

            </div>

        </div>
    )
}

export default PanelSeller
