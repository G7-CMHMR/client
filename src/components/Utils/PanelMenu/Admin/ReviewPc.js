import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsOfCategory } from '../../../../redux/Actions/Products/Actions'
import CardPC from './CardPC'

export default function ReviewPc() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.productsReducer.products)
    useEffect(() => {
        dispatch(getProductsOfCategory('Monitor'))
    }, [dispatch])
    return (
        <div>
            
            <h5>se esta msotrando monitores pero se mostraria lista de PC que haria falta evaluar. (Para quiz)</h5>
            {
                products.map((x)=>{
                    return <CardPC id={x.id} name={x.name} images={x.images}/>
                })
            }
        
        </div>
    )
}
