import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetPcNotValidate } from '../../../../redux/Actions/Admin/Actions'
import { getProductsOfCategory } from '../../../../redux/Actions/Products/Actions'
import CardPC from './CardPC'


export default function ReviewPc() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.productsReducer.products)
    const pc = useSelector(state => state.adminReducer.pc)
    const user = useSelector(state => state.userReducer.userData)
    var iduser= user.id
    useEffect(() => {
        dispatch(GetPcNotValidate())
    }, [dispatch])
    return (
        <div>
            
        <div id="ReviewContainer" >
            {
                pc && pc[0] ? pc[0].products.map((x)=>{
                    return <CardPC id={x.id} name={x.name} images={x.images[0].image} 
                    description={x.description} brand={x.name} type={x.type} seller={x.seller}/>
                }) : ''
            }
            </div>
        </div>
    )
}
