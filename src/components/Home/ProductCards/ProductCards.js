import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import './ProductCards.css'

 function ProductCards(props) {


    return (
        <div>
            <div className="titleCardHome" >
                    <h2 style={{marginBottom: 0}} >{props.title}</h2>
            </div>
            <div id="productsBar">
            {
               props.products ? (
                props.products.slice(0,5).map((product) => (
                    <ProductCard name={product.name} price={product.price} discount={product.discount} 
                    valuation={product.valuation} delivery={product.delivery} img={product.images[0]} id={product.id} key={product.id}/>
                
                ))
               ) : (
                   <div>
                    <br></br>
                    <h2>Not found</h2>
                   </div>
               )
                
            }
            </div>
            <div id="cardsbottom">
            </div>
        </div>
    );
}
export default ProductCards;
