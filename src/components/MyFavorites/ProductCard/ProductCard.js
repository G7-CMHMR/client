//card dentro de Categorias, REsultados, favoritos
import './ProductCardFav.css'
import Rating from '@material-ui/lab/Rating';
import { FaHeart } from 'react-icons/fa'
import { IoBody, IoCartSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom';
import { blue, blueGrey } from '@material-ui/core/colors';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { addProductToCart } from '../../../redux/Actions/Cart/Actions';
import React, { useState } from 'react';
import { getFavourites } from '../../../redux/Actions/Favourites/Actions'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import clientAxios from '../../../config/axios';

function ProductCard({ price, discount, images, name, seller, status, valuation, delivery, id }) {

    const userReducer = useSelector(state => state.userReducer.userData)
    const favourites = useSelector(state => state.favouritesReducer.favourites)
    const [active, setActive] = useState(FavOrNot(id))
    var userId = userReducer.id
    
  const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()
    
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
    
    function RemoveFavorites(e, productId) {
        console.log({userId, productId})
        clientAxios.post('/favourite/remove', { userId, productId })
            .then(response => {
                dispatch(getFavourites(userId))
            })
    }

    function addToCart() {
        dispatch(addProductToCart({ userId: userId, productId: id }))
        setOpen(true);
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        } 
        setOpen(false);
      };

    function FavOrNot(productid) {
        let si = favourites.map((x) => x.id === productid)
        if (si.length > 0) { return true } else { return false }
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
            <div id="ProductCardFav">
                <div id='ContainerFav'>
                    <img id="imageFav" src={images[0]} alt="Omar Dsoky" />
                    <Link id="link" to={`/Producto/${id}`}>
                        <div class="product-details">
                            <h4>{name}</h4>
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
                        {active === false ? <button style={{ color: "grey" }} id="btnheart" name={id} onClick={(e) => RemoveFavorites(e, id)}><FaHeart /></button> :
                            <button style={{ color: "red" }} id="btnheart" name={id} onClick={(e) => RemoveFavorites(e, id)}><FaHeart /></button>
                        }
                        <button className="buttons2" onClick={addToCart}>
                            <IoCartSharp id='btncart' ></IoCartSharp></button>
                                                       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success">
                            Producto agregado al carrito
                            </Alert>
                        </Snackbar>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default ProductCard