//Info del producto en publicacion 
import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";

import { getProductDetail } from '../../../redux/Actions/Products/Actions'




function ProductInfo() {

    const { idProducto } = useParams()

    const dispatch = useDispatch();
    const productsReducer = useSelector(state => state.productsReducer.productDetail)


    useEffect(() => {
        dispatch(getProductDetail(idProducto))
    }, [dispatch, idProducto])


    return (
        <div>
            <br></br>
            <h4>{productsReducer.status} | 24 vendidos</h4>
            <br></br>
            <h2>{productsReducer.name}</h2>
            <br></br>
            <div>
                <h1>$23.000</h1>
                <h3>{productsReducer.price}</h3>
            </div>

            <div>
                <h3 color='green' >{productsReducer.discount? 'Envio Gratis!' : 'Precio del envio: $400'}</h3>
                {/* <h2>Envio a la dirección:</h2> */}
                {/* <h2></h2> */}
            </div>
            <div>
                <h3>Devolución:</h3>
                <h3>Tenes 10 dias desde que lo recibis</h3>
            </div>
            <div>
                <button>Comprar Ahora</button>
                <button>Agregar al carrito</button>
            </div>
            <div>
                <h2>Garantía:</h2>
                <h2>12 meses de garantia de fabrica</h2>
            </div>
            <div>
                <h2>Compra protegida:</h2>
                <h2>Recibí el producto que esperabas o te devolvemos tu dinero</h2>
            </div>
        </div>
    )
}



export default ProductInfo