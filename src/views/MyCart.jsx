import Separate from '../components/Utils/Separate/Separate'
import './MyCart.css'
import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from "react-router";

import {getAllProducts, getProductDetail, getProductsOfCategory} from '../redux/Actions/Products/Actions'
import { Link } from '@material-ui/core';
import ProductCard from '../components/Category/ProductCard/ProductCard';
import ShoppingCard from '../components/Utils/ShoppingCard/ShoppingCard';
import { getCart } from '../redux/Actions/Cart/Actions';
import { changeStateLoginAction, changeStateRegisterAction } from '../redux/Actions/User/Actions';


function MyCart() {
	let totalCart = 0
	let envio = 0
    const cart = useSelector (state => state.cartReducer.cart)
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
    
        <div className='DetailContainer'>
            <Separate></Separate>
            <div id='ContentDetail'>
                <h1>Carrito de compras🛒</h1>
                <br></br>
            {console.log(cart)}
			<div className="secondContainer">
				{Array.isArray(cart)? cart.map((x)=>{
				return ( 
                <ShoppingCard className="CartCard" name={x.product.name} images={x.product.images} 
                valuation={x.product.valuation} delivery={x.product.delivery} price={x.product.price}
                discount={x.product.promotion.value} seller={x.product.seller}
                status={x.product.status} id={x.product.id} />
                )			
		}):console.log('NO ES UN ARRAY EL CARRITO')}
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
					Array.isArray(cart)?cart.forEach((x)=>{
						totalCart+=(x.product.price - (x.product.price/100)*x.product.promotion.value)
					})
				:console.log('NO ES UN ARRAY')}{
					Array.isArray(cart)? cart.forEach((x)=>{
						if (x.delivery!==true){
						envio +=400
						}
					})
				:console.log('NO ES UN ARRAY')}
                {
                    cart.length>0 && <div><h4> Envio : ${addCommas(Math.floor(envio))}</h4>
				<h2> TOTAL : ${addCommas(Math.floor(totalCart+envio))}</h2></div>
                }
                {
                    userId!==undefined && <button> Comprar carrito </button>
                }
				
			</div>
            </div>

            <Separate></Separate>
        </div>
    )
}

export default MyCart
