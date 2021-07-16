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
import { addProductToCart } from '../../../redux/Actions/Cart/Actions';
import { getFavourites } from '../../../redux/Actions/Favourites/Actions';

function ProductCard({ price, discount, images, name, seller, status, valuation, delivery, id }) {

    const favourites = useSelector(state => state.favouritesReducer.favourites)
    const userReducer = useSelector(state => state.userReducer.userData)
    const dispatch = useDispatch();
    var userId = userReducer.id

    useEffect(() => {
        dispatch(getFavourites(userId))
    }, [dispatch, userId])

    function addToCart() {
        dispatch(addProductToCart({ userId: userId, productId: id }))
    }

    var CheckFavorite = favourites.find((e) => e.id == id)
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
            <div id="ProductCard">
                <div id="container">
                    <div class="product-image">
                        <img src={images[0]} alt="Omar Dsoky" />
                    </div>
                    <Link id="link" to={`/Producto/${id}`}>
                        <div class="product-details">
                            <h1>{name}</h1>
                            <p id="seller">Vendido por {seller}</p>
                            <div id="price"><h3>${addCommas(Math.floor(price - (price / 100) * discount))}</h3>
                                {discount > 0 ? <span> ${addCommas(Math.floor(price))}</span> : <p></p>}
                            </div>
                            <p class="information">{status}</p>
                            <Rating name="half-rating-read" defaultValue={valuation} precision={0.5} readOnly />
                        </div>
                    </Link>
                    <div id="offandship">
                        {delivery ? <div id="ship">Envio gratis</div> : <p></p>}
                        {discount > 0 ? <div id="off">{discount}% OFF</div> : <p></p>}
                    </div>
                    <div id="icons">
                        {CheckFavorite ? <button style={{ color: "red" }} id="btnheart" name={id} onClick={(e) => AddToFavorites(e, id)}><FaHeart /></button> :
                            <button style={{ color: "grey" }} id="btnheart" name={id} onClick={(e) => AddToFavorites(e, id)}><FaHeart /></button>
                        }
                        <button className="buttons2" onClick={(e) => addToCart(e)}>
                            <IoCartSharp id='btncart' ></IoCartSharp></button>
                    </div>
                </div>
            </div>
            <br></br>
        </div>
    )
}



export default ProductCard