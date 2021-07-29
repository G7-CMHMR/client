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
        labels: ['PC', 'Monitores', 'Procesadores', 'Memorias Ram', 'Otros'],
        datasets: [{
            data: [35, 11, 22, 9, 2, 8, 9],
            backgroundColor: ['cadetblue', 'cornflowerblue', 'limegreen', 'dodgerblue', 'maroon', 'pink', 'wheat']
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
            <br></br>
            <div id='SellerPanelStadistics'>
                <div id='SellerPanelData'>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h3>Productos</h3>
                    <h3>vendidos: 8 </h3>
                    <br></br>
                    <br></br>
                    <h3>Calificación </h3>
                    <h3>del vendedor: BUENA </h3>
                    <br></br>
                    <br></br>
                    <h3>Cantidad de </h3>
                    <h3>publicaciones: 18 </h3>

                </div>
                <div id='SellerPanelStadisticsCircular' >
                    <Pie data={data} options={opciones} ></Pie>
                </div>

            </div>

        </div>
    )
}

export default PanelSeller
