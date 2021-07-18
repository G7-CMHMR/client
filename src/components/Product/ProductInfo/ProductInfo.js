//Info del producto en publicacion 
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router";
import './ProductInfo.css'
import {Button} from 'react-bootstrap'
import { getProductDetail } from '../../../redux/Actions/Products/Actions'
import Rating from '@material-ui/lab/Rating';
import { FaHeart } from 'react-icons/fa'
import { addProductToCart } from '../../../redux/Actions/Cart/Actions';
import { useState } from 'react';
import axios from 'axios';
import { getFavourites } from '../../../redux/Actions/Favourites/Actions';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';



function ProductInfo() {

    const { idProducto } = useParams()

    const favourites = useSelector(state => state.favouritesReducer.favourites)
    const dispatch = useDispatch();
    const productsReducer = useSelector(state => state.productsReducer.productDetail)
    const userReducer = useSelector(state => state.userReducer.userData)
    var userId = userReducer.id
    useEffect(() => {
        dispatch(getFavourites(userId))
        dispatch(getProductDetail(idProducto))
    }, [dispatch, idProducto, userId])
    console.log("ELIDDD" + idProducto, "ELUSEER" + userId)
    const [open, setOpen] = React.useState(false);
    
    
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }
    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          '& > * + *': {
            marginTop: theme.spacing(2),
          },
        },
      }));
    const classes = useStyles();
    function addToCart() {
        dispatch(addProductToCart({ userId: userId, productId: idProducto }))
        setOpen(true);
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        } 
        setOpen(false);
      };

    var CheckFavorite = favourites.find((e) => e.id == idProducto)
    function AddToFavorites(e, productId) {
        let fav = e.target.style
        if (fav.color) {
            if (fav.color == "grey") {
                fav.color = 'red';
                axios.post('http://localhost:3001/favourite/add', { userId, productId })
            }
            else {
                fav.color = 'grey';
                axios.post('http://localhost:3001/favourite/remove', { userId, productId })
            }
        }else{
            if(CheckFavorite){
                fav.color = 'grey';
                axios.post('http://localhost:3001/favourite/remove', { userId, productId })
            }else {
                fav.color = 'red';
                axios.post('http://localhost:3001/favourite/add', { userId, productId })
            }
        }
    }


    let addCommas = function (nStr) {
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
            <h5 style={{ color: "gray" }}>{productsReducer.status} | {productsReducer.sold} vendidos </h5>
        
            
            {CheckFavorite ? <button id='btnheart' style={{ color: "red" }}  onClick={(e) => AddToFavorites(e, idProducto)}><FaHeart/></button> : 
            <button id='btnheart' style={{ color: "grey" }}  onClick={(e) => AddToFavorites(e, idProducto)}><FaHeart /></button> 
                
            }
            <br></br>
            <h2>{productsReducer.name}</h2>
            {productsReducer.valuation && <Rating name="half-rating-read" defaultValue={productsReducer.valuation} precision={0.5} readOnly />}

            <br></br>
            <div>
                {productsReducer.discount > 0 ? <span id="oldprice"> ${addCommas(Math.floor(productsReducer.price))}</span> : <p></p>}
                <h1>${addCommas(Math.floor(productsReducer.price - (productsReducer.price / 100) * productsReducer.discount))}</h1>

            </div>

            <div id="delidis">
                {productsReducer.delivery ? <div id="delivery">Envio gratis</div> : <p> Precio del envio: $400</p>}
                {productsReducer.discount > 0 ? <div id="discount">{productsReducer.discount}% OFF</div> : <p></p>}

                {/* <h2>Envio a la dirección:</h2> */}
                {/* <h2></h2> */}
            </div>

            <div id="devolucion">
                <h5>Quedan {productsReducer.stock} unidades</h5>
                <h3>Devolución:</h3>
                <h4>Tenes 10 dias desde que lo recibis</h4>
            </div>
            <div id="btnbuy">
                <Button id="Bootstrapbutton" size='lg' variant="info">Comprar Ahora</Button>
                 <Button size='lg' onClick={(e) => addToCart(e)} variant="success">Agregar al carrito</Button>

            </div>
            <div id="seguridad">
                <h3>Compra protegida:</h3>
                <h4>Recibí el producto que esperabas o te devolvemos tu dinero</h4>
                <hr></hr>
                {productsReducer.warranty > 0 ? <h4>Este producto tiene {productsReducer.warranty} dias de garantia</h4> :
                    <h4>Este producto no tiene garantia</h4>}
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success">
                            Producto agregado al carrito
                            </Alert>
                        </Snackbar>
        </div>
    )
}



export default ProductInfo