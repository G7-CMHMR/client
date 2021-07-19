//Ordenamiento en Categorias
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './CategoryOrder.css'
import {Form} from 'react-bootstrap'
import { getAllProducts, sort } from '../../../redux/Actions/Products/Actions';

function CategoryOrder() {
  const dispatch = useDispatch()
  const productsReducer = useSelector (state => state.productsReducer)
    useEffect(() => {
	}, [dispatch])

  function handleOrder(e){
    dispatch(sort(e.target.value, productsReducer.products)) 
  }

  
    return(
    <div id="order">
       <Form.Control
        as="select"
        className="mr-sm-2"
        id="inlineFormCustomSelect"
        custom onChange={handleOrder}
      >
        <option value="0">ORDER</option>
        <option value="minmax">Menor a mayor precio</option>
        <option value="maxmin">Mayor a menor precio </option>
        <option value="AZ">A - Z</option>
        <option value="ZA">Z - A</option>
      </Form.Control>

    </div>    
    )
}



export default CategoryOrder