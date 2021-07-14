import Separate from '../components/Utils/Separate/Separate'
import './Profile.css'



import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";

import {getProductDetail} from '../redux/Actions/Products/Actions'
import FormProfile from '../components/Profile/FormProfile';

function Profile() {

    const { idProducto } = useParams()

    const dispatch = useDispatch();
    //const productsReducer = useSelector(state => state.productsReducer)

  
    // useEffect(() => {
    //   //dispatch(getProductDetail(idProducto))
    // }, [dispatch, idProducto])


    return (
    
        <div className='DetailContainer'>
            <Separate></Separate>
            <div id='ContentDetail'>
            <FormProfile></FormProfile>
               
            </div>

            <Separate></Separate>
        </div>
    )
}

export default Profile
