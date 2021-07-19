import Separate from '../components/Utils/Separate/Separate'
import './MyCart.css'
import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect, } from 'react';
import ShoppingCard from '../components/Utils/ShoppingCard/ShoppingCard';
import { addProductToCart, getCart } from '../redux/Actions/Cart/Actions';
import { changeStateLoginAction, changeStateRegisterAction } from '../redux/Actions/User/Actions';
import {Button} from 'react-bootstrap'
import { checkout } from '../redux/Actions/Cart/Actions';
import { Link } from 'react-router-dom';
import axios from 'axios'
import {TextField} from '@material-ui/core';

function MyCart() {
    let totalCart = 0
    let envio = 0
    const cart = useSelector(state => state.cartReducer.cart)
    const cartCheckout = useSelector(state => state.cartReducer.checkout)
    const dispatch = useDispatch()
    const userReducer = useSelector(state => state.userReducer.userData)
    const stateRegister = useSelector((state) => state.userReducer.registerwindow);
    const stateLogin = useSelector((state) => state.userReducer.loginwindow);
    var userId = userReducer.id

    useEffect(() => {
        dispatch(getCart(userId))
    }, [dispatch, userId])

    const openLogin = () => {
        dispatch(changeStateLoginAction(!stateLogin))
    }
    const openRegister = () => {
        dispatch(changeStateRegisterAction(!stateRegister))
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


    // MERCADOPAGO TEST 
    //*******************************
    async function mercadoPago(){
    dispatch( checkout (cart, userReducer.id) )
    }

    //MERCADO PAGO TEST END

    return (

        <div className='DetailContainer'>
            <Separate></Separate>
            <div id='ContentDetail'>
                <h1>Carrito de compras🛒</h1>
                <br></br>
            {console.log(cart)}
			<div className="secondContainer">
				{cart.length>0 && cart[0].amount && cart[0].product? cart.map((x)=>{
				return ( 
                <ShoppingCard className="CartCard" name={x.product.name} images={x.product.images?x.product.images:''} 
                amount={x.amount} delivery={x.product.promotion.delivery} price={x.product.price}
                discount={x.product.promotion.value} 
                status={x.product.status} id={x.product.id} />
                )			
		}):dispatch(getCart(userId))}

        {
            userId===undefined && 
            <div>
                <h5>Para usar el carrito es necesario estar registrado</h5>
                <h5>Podes <button onClick={openRegister}>Registrarte</button> 
                o si ya tenes una cuenta <button onClick={openLogin}>Logueate</button></h5>
            </div>
        }
			
		</div>
			<div id="totalCart">
				{
					cart.length>0 && cart[0].amount && cart[0].product?cart.forEach((x)=>{
						totalCart+=(x.product.price - (x.product.price/100)*x.product.promotion.value)*x.amount

					})
				:console.log('NO ES UN ARRAY')}{
					Array.isArray(cart)? cart.forEach((x)=>{
						if (x.product.promotion.delivery!==true){
						envio +=400
						}
					})
				:console.log('NO ES UN ARRAY')}
                {cart.length>0?
                <div id='ShippingMyCart'>
                    
                    <h4 id='ShippingText0'>Datos de Envío:</h4>
                    <TextField required id="ShippingText1" label="Dirección" variant="outlined" />
                    <TextField required id="ShippingText2" label="Número"  type='number' variant="outlined" />
                    <TextField required id="ShippingText3" label="Localidad" variant="outlined" />
                    <TextField required id="ShippingText4" label="Provincia" variant="outlined" />
                </div>
                :''}
                {
                    cart.length>0 && <div><h4> Envio : ${addCommas(Math.floor(envio))}</h4>
				<h2> TOTAL : ${addCommas(Math.floor(totalCart+envio))}</h2></div>
                }
                {
                    userId!==undefined && cart.length>0 && <Button variant="warning" onClick={mercadoPago}>Comprar carrito</Button>
                }
				
			</div>

            </div>

            <Separate></Separate>
        </div>
    )
}

export default MyCart
