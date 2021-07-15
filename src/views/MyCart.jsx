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

    const productsReducer = useSelector (state => state.productsReducer)
    const dispatch = useDispatch()
    const { categoryName } = useParams()
    useEffect(() => {
        dispatch(getAllProducts())
        dispatch(getProductsOfCategory(categoryName))
	}, [dispatch, categoryName])

    const [total, setTotal] = useState(0);
	const [subTotal, setSubTotal] = useState(0);


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
	
            </div>

            <Separate></Separate>
        </div>
    )
}

export default MyCart
