import React from 'react'
import './CardsPC.css'
import CardPC from '../CardPCBuilder/CardPC'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllProducts, getProductsOfCategory } from '../../../redux/Actions/Products/Actions'

export default function CardsPC({input, setInput, Siguiente}) {

    const productsReducer = useSelector(state => state.productsReducer) 


    return (
        <div id='CardsPC'>
            {productsReducer.products.map((x) => {
                return (
                    <CardPC name={x.name} images={x.images}
                        valuation={x.valuation} delivery={x.delivery} price={x.price}
                        discount={x.discount} seller={x.seller}
                        status={x.status} id={x.id} type={x.type} category={x.categories[0]} setInput={setInput} input={input} Siguiente={Siguiente} />
                )
            })}
        </div>
    )
}
