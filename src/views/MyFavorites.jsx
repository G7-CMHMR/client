import './MyFavorites.css'

//Librerias / Frameworks
import React from 'react-redux';

//*Componentes
import Separate from '../components/Utils/Separate/Separate'
import ProductsCards from '../components/MyFavorites/ProductsCards/ProductsCards'


function MyFavorites() {

    return (

        <div className='DetailContainer'>
            <Separate></Separate>

            <div id='ContentDetail'>
                <h1>Mis favoritos ♥</h1>
                <br></br>
                <br></br>
                <ProductsCards />
            </div>

            <Separate></Separate>
        </div>
    )
}

export default MyFavorites
