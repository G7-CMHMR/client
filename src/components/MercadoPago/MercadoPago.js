
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useMercadopago } from 'react-sdk-mercadopago';
import { resetCartCheckout } from '../../redux/Actions/Cart/Actions'


export default function CheckoutV2() {
    var mercadopago = useMercadopago.v2('TEST-7f52a866-92f5-4d68-9ecd-e895064fd2b1', {
        locale: 'es-AR'
    });
    const dispatch = useDispatch()
    const isReadyToPay = useSelector(state => state.cartReducer.isReadyToPay)
    const cartCheckout = useSelector(state => state.cartReducer.checkout)

    useEffect(() => {
        // if (mercadopago && isReadyToPay) {
        //     console.log(cartCheckout)
        //     const data = mercadopago.checkout({
        //         preference: {
        //             id: cartCheckout.response.id
        //         },
        //         autoOpen: true,
        //     })
        //     console.log(data)
        //     dispatch(resetCartCheckout())
        // }
        // console.log('ENTRO AL USE EFFECT')
    }, [mercadopago])

    return (
        <div>
            
        </div>
    )
}