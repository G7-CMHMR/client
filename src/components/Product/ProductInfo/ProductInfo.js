//Info del producto en publicacion 
import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";
import './ProductInfo.css'
import { getProductDetail } from '../../../redux/Actions/Products/Actions'
import Rating from '@material-ui/lab/Rating';
import {FaHeart} from 'react-icons/fa'
import { addProductToCart } from '../../../redux/Actions/Cart/Actions';
import { useState } from 'react';
import axios from 'axios';
import { getFavourites } from '../../../redux/Actions/Favourites/Actions';



function ProductInfo() {

    const { idProducto } = useParams()

    const favourites = useSelector(state => state.favouritesReducer.favourites)
    const dispatch = useDispatch();
    const productsReducer = useSelector(state => state.productsReducer.productDetail)
    const userReducer = useSelector(state => state.userReducer.userData)
    var USERID = userReducer.id
    const [active, setActive] = useState(FavOrNot(idProducto))
    useEffect(() => {
        dispatch(getFavourites(USERID))
        dispatch(getProductDetail(idProducto))
    }, [dispatch, idProducto, USERID])
    console.log("ELIDDD"+idProducto, "ELUSEER"+USERID)
    function addToCart(){
        dispatch(addProductToCart({userId:USERID,productId:idProducto}))
    }

    function FavOrNot (productid){
        let si=favourites.map((x)=> x.id===productid)
        if(si.length>0){return true} else {return false}
    }

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

    function AddToFavorites(e, productId) {
        let fav = e.target.style
        if (fav.color == 'grey') {
            fav.color = 'red';
            axios.post('http://localhost:3001/favourite/add', {USERID, productId})
            setActive(true)
        } 
        else{
            fav.color = 'grey';
            axios.post('http://localhost:3001/favourite/remove', {USERID, productId})
            setActive(false)
        }
    }

    return (
        <div>
            <br></br>
            <h5 style={{color:"gray"}}>{productsReducer.status} | {productsReducer.sold} vendidos </h5>
            { active===false? <button style={{color:"grey"}} id="btnheart"  onClick={(e) => AddToFavorites(e, idProducto)}><FaHeart /></button> :
                        <button style={{color:"red"}} id="btnheart"  onClick={(e) => AddToFavorites(e, idProducto)}><FaHeart /></button>
                        }
            <br></br>
            <h2>{productsReducer.name}</h2>
            {productsReducer.valuation && <Rating name="half-rating-read" defaultValue={productsReducer.valuation} precision={0.5} readOnly />}
            
            <br></br>
            <div>
                {productsReducer.discount>0? <span id= "oldprice"> ${addCommas(Math.floor(productsReducer.price))}</span> : <p></p>}
                <h1>${addCommas(Math.floor(productsReducer.price - (productsReducer.price/100)*productsReducer.discount))}</h1>
                
            </div>

            <div id="delidis">
                { productsReducer.delivery? <div id="delivery">Envio gratis</div> :  <p> Precio del envio: $400</p> }
                       { productsReducer.discount>0? <div id="discount">{productsReducer.discount}% OFF</div> : <p></p> }
                       
                {/* <h2>Envio a la dirección:</h2> */}
                {/* <h2></h2> */}
            </div>
            
            <div id="devolucion">
                <h5>Quedan {productsReducer.stock} unidades</h5>
                <h3>Devolución:</h3>
                <h4>Tenes 10 dias desde que lo recibis</h4>
            </div>
            <div id="btnbuy">
                <button id="btn1" >Comprar Ahora</button>
                <button id="btn2" onClick={(e) => addToCart(e)}>Agregar al carrito</button>
            </div>
            <div id="seguridad">
                <h3>Compra protegida:</h3>
                <h4>Recibí el producto que esperabas o te devolvemos tu dinero</h4>
                <hr></hr>
                {productsReducer.warranty>0? <h4>Este producto tiene {productsReducer.warranty} dias de garantia</h4> :
                <h4>Este producto no tiene garantia</h4>}
            </div>
        </div>
    )
}



export default ProductInfo