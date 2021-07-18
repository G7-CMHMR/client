import Separate from '../../components/Utils/Separate/Separate';
import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";
import MySales from '../../components/Utils/MySales/MySales'
import { getFavourites } from '../../redux/Actions/Favourites/Actions';
var prueba= [{
    name: "Microcesador gamer AMD Ryzen 5 5600X 100-100000065BOX de 6 núcleos y 4.6GHz de frecuencia",
    price: 41899,
    images: [
    "https://http2.mlstatic.com/D_NQ_NP_806834-MLA44347094824_122020-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_984767-MLA44347094822_122020-O.webp"
    ],
    discount: 15,
    id: 4,
    unidad:2,
    user:"pirulitoo125",
    estado: 'pendiente',
    },{
        "name": "Procesador Intel Celeron G5905 BX80701G5905 de 2 núcleos y 3.5GHz de frecuencia con gráfica integrada",
        "price": 7599,
        "images": [
        "https://http2.mlstatic.com/D_NQ_NP_625800-MLA44347283904_122020-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_677873-MLA44347499239_122020-O.webp"
        ],
        "discount": 20,
        "id": 5,
        unidad:1,
        user:"ricadofort",
        estado: 'entregado',
        }]
function Sales() {
    const userReducer = useSelector(state => state.userReducer.userData)
    const dispatch = useDispatch();
    var userID = userReducer.id
  

    return (
    
        <div className='ProductPanelContainer'>
            <h1>Mis ventas</h1>
            <h6>esta mostrando favoritos, no mis ventas y variables de prueba</h6>
            <br></br>
                <br></br>
                {
                    prueba.length>0 ? prueba.map((x) => {
                        return <MySales
                        price={x.price} discount={x.discount} images={x.images}
                         name={x.name} id={x.id} unidad={x.unidad} user={x.user}
                         estado={x.estado}
                        /> 
                    }): <p>Ups no tenes ventas!</p>
                }
        </div>
    )
}

export default Sales
