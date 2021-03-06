import './ProductCard.css'
import Rating from '@material-ui/lab/Rating';
import { FaHeart } from 'react-icons/fa'
import { IoBody, IoCartSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom';
import { blue, blueGrey } from '@material-ui/core/colors';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { getAllFavourites } from '../../../redux/Actions/Products/Actions';
import { addProductNotLogged, addProductToCart } from '../../../redux/Actions/Cart/Actions';
import { AddFavourites, getFavourites, RemoveFavourites } from '../../../redux/Actions/Favourites/Actions';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import clientAxios from '../../../config/axios';


function ProductCard({ price, discount, images, name, seller, status, valuation, delivery, id }) {

    const favourites = useSelector(state => state.favouritesReducer.favourites)
    const userReducer = useSelector(state => state.userReducer.userData)
    const dispatch = useDispatch();
    var userId = userReducer.id
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
    function addToCart(e) {
        if (userId) {
            dispatch(addProductToCart({ userId: userId, productId: id }))
        } else {
            dispatch(addProductNotLogged(id))
        }
        setOpen(true);
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };


    var CheckFavorite = favourites.find((e) => e.id == id)

    function AddToFavorites(e, productId) {
        /* console.log('****************************')
        console.log({userId, productId}) */
        let fav = e.target.style
        if (fav.color) {
            if (fav.color == "grey") {
                fav.color = 'red';
                dispatch(AddFavourites({ userId, productId }))
            }
            else {
                fav.color = 'grey';
                dispatch(RemoveFavourites({ userId, productId }))
            }
        } else {
            if (CheckFavorite) {
                fav.color = 'grey';
                dispatch(RemoveFavourites({ userId, productId }))
            } else {
                fav.color = 'red';
                dispatch(AddFavourites({ userId, productId }))
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
            <div id="ProductCard">
                <div id="Category_container">
                    <div class="Category_product-image">
                        <img id='imageCategory' src={images[0]} alt="Omar Dsoky" />
                    </div>
                    <Link id="link" to={`/Producto/${id}`}>
                        <div class="product-details">
                            <h1 id='Categories_NameOfProduct'>{name}</h1>
                            <p id="seller">Vendido por {seller}</p>
                      
                            <div id="price_category"><h3>${addCommas(Math.floor(price - (price / 100) * discount))}</h3>
                                {discount > 0 ? <span id='category_discount'> ${addCommas(Math.floor(price))}</span> : <p></p>}
                            </div>
                            <p class="information">{status}</p>
                            <Rating name="half-rating-read" defaultValue={valuation} precision={0.5} readOnly />
                        </div>
                    </Link>
                    <div id="offandship_category">
                        {delivery ? <div id="ship">Envio gratis</div> : <p></p>}
                        {discount > 0 ? <div id="off">{discount}% OFF</div> : <p></p>}
                    </div>
                    <div id="icons">
                        {CheckFavorite ? <Button style={{ color: "red" }} id="btnheart" name={id} onClick={(e) => AddToFavorites(e, id)}><FaHeart /></Button> :
                            <Button style={{ color: "grey" }} id="btnheart" name={id} onClick={(e) => AddToFavorites(e, id)}><FaHeart /></Button>
                        }
                        <Button className="buttons2" onClick={(e) => addToCart(e)}>
                            <IoCartSharp id='btncart4' ></IoCartSharp></Button>
                    </div>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                            Producto agregado al carrito
                        </Alert>
                    </Snackbar>
                </div>
            </div>
            <br></br>
        </div>
    )
}



export default ProductCard