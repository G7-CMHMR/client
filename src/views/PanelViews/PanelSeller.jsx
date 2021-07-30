import Separate from '../../components/Utils/Separate/Separate';
import './PanelSeller.css'
import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";
import MyPublicationCard from '../../components/Utils/MyPublicationCard/MyPublicationCard'
import { Pie } from 'react-chartjs-2'
import { seller_getAllProducts, seller_GetSolds_WithFilter, getDataOfSeller } from '../../redux/Actions/Seller/Actions';



function PanelSeller() {
    const userReducer = useSelector(state => state.userReducer.userData)
    const sellerReducer = useSelector(state => state.sellerReducer.SellerInfo)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataOfSeller(userReducer.idSeller))
    }, [dispatch])

    let labelsKeys = []
    let dataKeys = []

    if(sellerReducer.ventas == 0){
        labelsKeys = ['Sin ventas']
        dataKeys = [1]
    }else{
            labelsKeys = Object.keys(sellerReducer.ventasCat)
            dataKeys = Object.values(sellerReducer.ventasCat)
    }




    const data = {
        labels: labelsKeys,
        datasets: [{
            data: dataKeys,
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
                    <h3>vendidos: {sellerReducer.ventas} </h3>
                    <br></br>
                    <br></br>
                    <h3>Calificación </h3>
                    <div id='CalificacionVendedorFlex'>
                        <h3>del vendedor:</h3>
                        <h5 id='h5VenderProducto'> {sellerReducer.ventas < 3 ? '¡Vende al menos 3 productos!' : sellerReducer.calificación < 3 ? 'Esperando reviews!' : 'Muy buena!'} </h5>
                    </div>
                    <br></br>
                    <br></br>
                    <h3>Cantidad de </h3>
                    <h3>publicaciones: {sellerReducer.publicaciones} </h3>

                </div>
                <div id='SellerPanelStadisticsCircular' >
                    <Pie data={data} options={opciones} ></Pie>
                </div>

            </div>

        </div>
    )
}

export default PanelSeller
