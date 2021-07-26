
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useMercadopago } from 'react-sdk-mercadopago';
import { resetCartCheckout } from '../../redux/Actions/Cart/Actions'


export default function CheckoutV2() {
    var mercadopago = useMercadopago.v2('TEST-1fcfd8ab-01c2-42ee-ae8a-66968945f02e', {
        locale: 'en-US'
    });
    const dispatch = useDispatch()
    const isReadyToPay = useSelector(state => state.cartReducer.isReadyToPay)
    const cartCheckout = useSelector(state => state.cartReducer.checkout)

    useEffect(() => {
        if (mercadopago && isReadyToPay) {
            const data = mercadopago.checkout({
                preference: {
                    id: cartCheckout.response.id
                },
                autoOpen: true,
            })
            console.log(data)
            dispatch(resetCartCheckout())
        }
    }, [mercadopago])

    return (
        <div>
            <div class="cho-container" />
        </div>
    )
}