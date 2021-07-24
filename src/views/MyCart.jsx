import Separate from '../components/Utils/Separate/Separate'
import './MyCart.css'
import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect, } from 'react';
import ShoppingCard from '../components/Utils/ShoppingCard/ShoppingCard';
import { addProductToCart, getCart, getCartNotLogged } from '../redux/Actions/Cart/Actions';
import { changeStateLoginAction, changeStateRegisterAction } from '../redux/Actions/User/Actions';
import { Button } from 'react-bootstrap'
import { checkout } from '../redux/Actions/Cart/Actions';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { TextField } from '@material-ui/core';
import { useState } from 'react'
import { toast } from 'react-toastify';


export function MyCart() {
    let totalCart = 0
    let envio = 0
    const cart = useSelector(state => state.cartReducer.cart)
    const cartCheckout = useSelector(state => state.cartReducer.checkout)
    const dispatch = useDispatch()
    const userReducer = useSelector(state => state.userReducer.userData)
    const stateRegister = useSelector((state) => state.userReducer.registerwindow);
    const stateLogin = useSelector((state) => state.userReducer.loginwindow);
    var userId = userReducer.id
    const cartL = JSON.parse(localStorage.getItem("cartu"));


    const openLogin = () => {
        dispatch(changeStateLoginAction(!stateLogin))
    }
    const openRegister = () => {
        dispatch(changeStateRegisterAction(!stateRegister))
    }
    
    useEffect(() => {
        if (userId){
        dispatch(getCart(userId))
        
        }else{
            dispatch(getCartNotLogged())
        }
    }, [dispatch, userId])

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


    const [input, setInput] = useState({
        direction: '',
        number: '',
        localidad: '',
        provincia: '',
    })

 


    function HandleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    // MERCADOPAGO TEST 
    //*******************************
    async function mercadoPago() {
        if (!input.direction == '' || !input.number == '' || !input.localidad == '' || !input.provincia == '') {
            dispatch(checkout(cart, `${input.direction}$${input.number}$${input.localidad}$${input.provincia}`, userReducer.id))
        }else{
            toast.error('Debes completar los datos de envío para continuar con la compra')
        }
    }



    //MERCADO PAGO TEST END

    return (

        <div className='DetailContainer'>
            <Separate></Separate>
            <div id='ContentDetail'>
                <h1>Carrito de compras🛒</h1>
                <br></br>

                <div className="secondContainer">

                    
                    {userId && cart.length && cart[0].amount && cart[0].product ? cart.map((x) => {
                        return (
                            <ShoppingCard className="CartCard" name={x.product.name} images={x.product.images ? x.product.images : ''}
                                amount={x.amount} delivery={x.product.promotion.delivery} price={x.product.price}
                                discount={x.product.promotion.value}
                                status={x.product.status} id={x.product.id} stock={x.product.stock} />
                        )
                    }) : <div></div>}
                    {!userId && cart && cart.length && cart[0].amount && cart[0].product ? cart.map((x) => {
                        return (
                            <ShoppingCard className="CartCard" name={x.product.name} images={x.product.images}
                                amount={x.amount} delivery={x.product.delivery} price={x.product.price}
                                discount={x.product.promotion.value}
                                status={x.product.status} id={x.product.id} stock={x.product.stock} />
                        )
                    }) : <div></div>}
                    

                </div>
                <div id="totalCart">
                    {
                       cart.length > 0 && cart[0].amount && cart[0].product ? cart.forEach((x) => {
                            totalCart += (x.product.price - (x.product.price / 100) * x.product.promotion.value) * x.amount

                        })
                            : console.log('NO ES UN ARRAY')}
                        
                    {
                            userId && cart.length > 0 && cart[0].amount && cart[0].product? cart.forEach((x) => {
                            if (x.product.promotion.delivery !== true) {
                                envio += 400
                            }
                        })
                            : console.log('NO ES UN ARRAY')}
                     {
                            !userId && cart && cart.length > 0 && cart[0].amount && cart[0].product? cart.forEach((x) => {
                            if (x.product.delivery !== true) {
                                envio += 400
                            }
                        })
                            : console.log('NO ES UN ARRAY')}



                    {cart.length > 0 ?
                        <div id='ShippingMyCart'>

                            <h4 id='ShippingText0'>Datos de Envío:</h4>
                            <TextField required value={input.direction} id="ShippingText1" name='direction' onChange={HandleChange} label="Dirección" variant="outlined" />
                            <TextField required value={input.number} id="ShippingText2" name='number' onChange={HandleChange} label="Número" type='number' variant="outlined" />
                            <TextField required value={input.localidad} id="ShippingText3" name='localidad' onChange={HandleChange} label="Localidad" variant="outlined" />
                            <TextField required value={input.provincia} id="ShippingText4" name='provincia' onChange={HandleChange} label="Provincia" variant="outlined" />
                        </div>
                        : ''}
                    {
                        cart.length > 0 && <div><h4> Envio : ${addCommas(Math.floor(envio))}</h4>
                            <h2> TOTAL : ${addCommas(Math.floor(totalCart + envio))}</h2></div>
                    }
                    
                    {
                        userId !== undefined && cart.length > 0 ? 
                        <Button variant="warning" onClick={mercadoPago}>Comprar carrito</Button>:
                        <Button variant="warning" >Comprar carrito</Button>
                    }

                </div>

            </div>

            <Separate></Separate>
        </div>
    )
}

export function MensajeError(error){
    toast.error(error)
}



