import Separate from '../components/Utils/Separate/Separate'
import './Profile_password.css'



import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";

import {getProductDetail} from '../redux/Actions/Products/Actions'
import FormProfile_password from '../components/Profile/FormProfile_password';

function Profile_password() {

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
            <FormProfile_password></FormProfile_password>
               
            </div>

            <Separate></Separate>
        </div>
    )
}

export default Profile_password
