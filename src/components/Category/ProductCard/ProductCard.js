//card dentro de Categorias, REsultados, favoritos
import './ProductCard.css'
import Rating from '@material-ui/lab/Rating';
import { FaHeart } from 'react-icons/fa'
import { IoCartSharp, IoShare } from 'react-icons/io5'
import { Link } from 'react-router-dom';
import { blue } from '@material-ui/core/colors';

import { AddFavourites, RemoveFavourites, Chimichurri } from '../../../redux/Actions/Favourites/Actions'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { addProductToCart } from '../../../redux/Actions/Cart/Actions';

function ProductCard({ price, discount, images, name, seller, status, valuation, delivery, id }) {
    // var porcentaje= (price / precioviejo)*100;
    // var intPorcentaje = 100-(Math.round( porcentaje ))+"%";
    const dispatch = useDispatch()
    const userReducer = useSelector (state => state.userReducer.userData)
    var userId = userReducer.id

    function addToCart(){
        dispatch(addProductToCart({userId:userId,productId:id}))
    }

    function AddToFavorites(e, productId) {
        let fav = e.target.style
        if (fav.color == 'grey') {
            fav.color = 'red';
            axios.post('http://localhost:3001/favourite/add', {userId, productId})
        } else {
            fav.color = 'grey';
            axios.post('http://localhost:3001/favourite/remove', {userId, productId})
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
                    <button className="buttons2" onClick={(e) => AddToFavorites(e, id)}>
                        <FaHeart id='btnheart' ></FaHeart></button>
                    <button className="buttons2" onClick={(e) => addToCart(e)}>
                        <IoCartSharp id='btncart' ></IoCartSharp></button>
                </div>
            </div>
        </div>
    )
}


export default ProductCard