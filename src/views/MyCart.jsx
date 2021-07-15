import Separate from '../components/Utils/Separate/Separate'
import './MyCart.css'
import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from "react-router";

import {getAllProducts, getProductDetail, getProductsOfCategory} from '../redux/Actions/Products/Actions'
import { Link } from '@material-ui/core';
import ProductCard from '../components/Category/ProductCard/ProductCard';
import ShoppingCard from '../components/Utils/ShoppingCard/ShoppingCard';
//import ShoppingCartCard from '../components/Utils/ShoppingCartCard';

function MyCart() {
	let totalCart = 0
	let envio = 0
    const productsReducer = useSelector (state => state.productsReducer)
    const dispatch = useDispatch()
    const { categoryName } = useParams()
    useEffect(() => {
        dispatch(getAllProducts())
        dispatch(getProductsOfCategory(categoryName))
	}, [dispatch, categoryName])

    const [total, setTotal] = useState(0);
	const [subTotal, setSubTotal] = useState(0);

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

			<div className="secondContainer">
				{productsReducer.products ? productsReducer.products.map((x)=>{
			return(
				<ShoppingCard className="CartCard" name={x.name} images={x.images} 
                valuation={x.valuation} delivery={x.delivery} price={x.price}
                discount={x.discount} seller={x.seller}
                status={x.status} id={x.id} />
			)
		}): <h5>No hay productos en tu carrito</h5>}
			
		</div>
			<div id="totalCart">
				{
					productsReducer.products.forEach((x)=>{
						totalCart+=(x.price - (x.price/100)*x.discount)
					})
				}{
					productsReducer.products.forEach((x)=>{
						if (x.delivery!==true){
						envio +=400
						}
					})
				}
				<h4> Envio : ${addCommas(Math.floor(envio))}</h4>
				<h2> TOTAL : ${addCommas(Math.floor(totalCart+envio))}</h2>
			</div>
            </div>

            <Separate></Separate>
        </div>
    )
}

export default MyCart
