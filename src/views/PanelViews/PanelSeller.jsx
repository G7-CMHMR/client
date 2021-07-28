import Separate from '../../components/Utils/Separate/Separate';
import './PanelSeller.css'
import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";
import MyPublicationCard from '../../components/Utils/MyPublicationCard/MyPublicationCard'
import { Pie } from 'react-chartjs-2'


function PanelSeller() {
    const userReducer = useSelector(state => state.userReducer.userData)
    const sellerReducer = useSelector(state => state.sellerReducer.ProductsSeller)
    const dispatch = useDispatch();
    var userId = userReducer.id

    useEffect(() => {

    }, [dispatch])


    const data = {
        labels: ['Google', 'Bing', 'Firefox', 'Baidu', 'Otros'],
        datasets: [{
            data: [35, 11, 22, 9]
        }]
    }
    const opciones = {
        responsive: true
    }


    return (

        <div className='ProductPanelContainer'>
            <br></br>
            <h1>¡Bienvenido {userReducer.name} a tu panel! 💻</h1>
            <h4>Podrás controlar todas tus ventas y publicaciones</h4><br></br>

            <div id='SellerPanelStadistics'>
                <Pie data={data} options={opciones}></Pie>

            </div>

        </div>
    )
}

export default PanelSeller
