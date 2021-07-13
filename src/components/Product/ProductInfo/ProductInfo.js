//Info del producto en publicacion 
import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";
import './ProductInfo.css'
import { getProductDetail } from '../../../redux/Actions/Products/Actions'




function ProductInfo() {

    const { idProducto } = useParams()

    const dispatch = useDispatch();
    const productsReducer = useSelector(state => state.productsReducer.productDetail)


    useEffect(() => {
        dispatch(getProductDetail(idProducto))
    }, [dispatch])

    let addCommas = function(nStr)
    {
        nStr += '';
        let x = nStr.split('.');
        let x1 = x[0];
        let x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + '.' + '$2');
        }
        return x1 + x2;
    }

    return (
        <div>
            <br></br>
            <h4>{productsReducer.status} | 0 vendidos</h4>
            <br></br>
            <h2>{productsReducer.name}</h2>
            <br></br>
            <div>
                {productsReducer.discount>0? <span id= "oldprice"> ${addCommas(Math.floor(productsReducer.price*171))}</span> : <p></p>}
                <h1>${addCommas(Math.floor(productsReducer.price*171 - (productsReducer.price*171/100)*productsReducer.discount))}</h1>
                
            </div>

            <div id="delidis">
                { productsReducer.delivery? <div id="delivery">Envio gratis</div> :  <p> PRecio del envio: $400</p> }
                       { productsReducer.discount>0? <div id="discount">{productsReducer.discount}% OFF</div> : <p></p> }
                       
                {/* <h2>Envio a la dirección:</h2> */}
                {/* <h2></h2> */}
            </div>
            <div id="devolucion">
                <h3>Devolución:</h3>
                <h4>Tenes 10 dias desde que lo recibis</h4>
            </div>
            <div id="btnbuy">
                <button id="btn1" >Comprar Ahora</button>
                <button id="btn2">Agregar al carrito</button>
            </div>
            <div id="seguridad">
                <h3>Compra protegida:</h3>
                <h4>Recibí el producto que esperabas o te devolvemos tu dinero</h4>
            </div>
        </div>
    )
}



export default ProductInfo