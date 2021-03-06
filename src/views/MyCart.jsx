import Separate from '../components/Utils/Separate/Separate'
import './MyCart.css'
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
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

import MercadoPago from '../components/MercadoPago/MercadoPago'
import clientAxios from '../config/axios';


export function MyCart() {
    let totalCart = 0
    let envio = 0
    const cart = useSelector(state => state.cartReducer.cart)
    const cartCheckout = useSelector(state => state.cartReducer.checkout)
    const dispatch = useDispatch()
    const isReadyToPay = useSelector(state => state.cartReducer.isReadyToPay)
    const userReducer = useSelector(state => state.userReducer.userData)
    const stateRegister = useSelector((state) => state.userReducer.registerwindow);
    const stateLogin = useSelector((state) => state.userReducer.loginwindow);
    var userId = userReducer.id
    const cartL = JSON.parse(localStorage.getItem("cartu"));
    const [show, setshow] = useState(false)

    const openLogin = () => {
        dispatch(changeStateLoginAction(!stateLogin))
    }
    const openRegister = () => {
        dispatch(changeStateRegisterAction(!stateRegister))
    }
    const changeState = () => {
        setshow(true)
    }
    useEffect(() => {
        if (userId){
            let cartguest = JSON.parse(localStorage.getItem('cartguest'));
        if (cartguest.length>0){
            cartguest.forEach(x=> 
                clientAxios.post('/cart/add', {productId:x.product.id, userId:userId}) )
        localStorage.clear()
        dispatch(getCart(userId))
        }
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
        } else {
            toast.error('Debes completar los datos de env??o para continuar con la compra')
        }
    }



    //MERCADO PAGO TEST END

    return (

        <div className='DetailContainer'>
            <Separate></Separate>
            <div id='ContentDetail'>
                <h1>Carrito de compras????</h1>
                <br></br>

                <div className="secondContainer">


                    
                    {cart && cart.length && cart[0].amount && cart[0].product ? cart.map((x) => {
                        return (
                            <ShoppingCard className="CartCard" name={x.product.name} images={x.product.images}
                                amount={x.amount} delivery={x.product.delivery} price={x.product.price}
                                discount={x.product.promotion.value}
                                status={x.product.status} id={x.product.id} stock={x.product.stock} />
                        )
                    }) : <div>Todav??a no agregaste productos al carrito!</div>}


                </div>
                <div id="totalCart">
                    {
                      cart && cart.length > 0 && cart[0].amount && cart[0].product ? cart.forEach((x) => {
                            totalCart += (x.product.price - (x.product.price / 100) * x.product.promotion.value) * x.amount

                        })
                            : console.log('NO ES UN ARRAY')}

                    {
                        cart && userId && cart.length > 0 && cart[0].amount && cart[0].product ? cart.forEach((x) => {
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
                            : console.log('NO ES UN ARRAY') }



                    {cart && cart.length > 0 ?
                        <div id='ShippingMyCart'>

                            <h4 id='ShippingText0'>Datos de Env??o:</h4>
                            <TextField required value={input.direction} id="ShippingText1" name='direction' onChange={HandleChange} label="Direcci??n" variant="outlined" />
                            <TextField required value={input.number} id="ShippingText2" name='number' onChange={HandleChange} label="N??mero" type='number' variant="outlined" />
                            <TextField required value={input.localidad} id="ShippingText3" name='localidad' onChange={HandleChange} label="Localidad" variant="outlined" />
                            <TextField required value={input.provincia} id="ShippingText4" name='provincia' onChange={HandleChange} label="Provincia" variant="outlined" />
                        </div>
                        : ''}
                    {
                        cart.length > 0 && <div><h4> Envio : ${addCommas(Math.floor(envio))}</h4>
                            <h2> TOTAL : ${addCommas(Math.floor(totalCart + envio))}</h2></div>
                    }
                    
                    {
                        userId !== undefined && cart && cart.length > 0 &&
                            <Button variant="warning" onClick={mercadoPago}>Comprar carrito</Button> 
                    }
                    {

                        userId == undefined && cart && cart.length > 0 &&

                            <Button variant="warning" onClick={changeState}>Comprar carrito</Button>
                    }
                    {  userId == undefined && show &&cart && 
                        <h6> Para comprar es necesario ser un usuario! <Button variant="warning" onClick={openLogin}>LOGUEATE</Button>
                        o si no tenes cuenta todav??a, <Button variant="warning" onClick={openRegister}>REGISTRATE</Button></h6>
                    }
                    {
                        isReadyToPay && <MercadoPago></MercadoPago>
                    }


                </div>

            </div>

            <Separate></Separate>
        </div>
    )
}

export function MensajeError(error) {
    toast.error(error)
}



