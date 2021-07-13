import Separate from '../components/Utils/Separate/Separate'
import './Product.css'
import Images from '../components/Product/Images/Images'
import Description from '../components/Product/Description/Description'
import ProductInfo from '../components/Product/ProductInfo/ProductInfo'
import QandA from '../components/Product/QandA/QandA'
import SellerInfo from '../components/Product/SellerInfo/SellerInfo'
import Similars from '../components/Product/Similars/Similars'

import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";

import {getAllProducts, getProductDetail, getProductsOfCategory} from '../redux/Actions/Products/Actions'

function Product() {

    const { idProducto } = useParams()

    const dispatch = useDispatch();
    const productDetail= useSelector(state => state.productsReducer.productDetail)
    const products = useSelector(state => state.productsReducer.products)
    
  
    useEffect(() => {
        dispatch(getProductsOfCategory(productDetail.categories))
      dispatch(getProductDetail(idProducto))
    }, [dispatch, idProducto])


    return (
    
        <div className='DetailContainer'>
            <Separate></Separate>
            <div id='ContentDetail'>

                {/* <div id='SecondNav'>
                    <h3>SecondNav</h3>
                </div> */}

                <div id='FirstSection'>
                    <div id='ImagesAndSimilars'>
                        <div id='Images'>
                            <Images></Images>
                        </div>
                        <div id='Similars'>
                            <h2>Productos similares</h2>
                            <hr></hr>
                            <div id="similarCard">
                                {products.map((x)=>
                            <Similars name={x.name} images={x.images} 
                            valuation={x.valuation} delivery={x.delivery} price={x.price}
                            discount={x.discount} seller={x.seller}
                            status={x.status} id={x.id}/>
                            )}
                            </div>
                                                      
                        </div>
                    </div>
                    <div id='ProductInfo'>
                        <ProductInfo></ProductInfo>
                    </div>
                </div>

                <div id='SecondSection'>
                    <div id='Description'>
                        <Description/>
                    </div>
                    <div id='SellerInfo'>
                        <h1>Informacion Del Vendedor</h1>
                    </div>
                </div>

                <div id='Questions'>
                    <h1>Preguntas</h1>
                </div>

            </div>

            <Separate></Separate>
        </div>
    )
}

export default Product
