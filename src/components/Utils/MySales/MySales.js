import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import React from 'react';
                                    //unidad user y estado son de una variable de prueba. 
export default function MySales({ unidad, user, estado, price, discount, images, name, id }) {
    
    const userReducer = useSelector(state => state.userReducer.userData)

    let addCommas = function (nStr) {
        nStr += '';
        let x = nStr.split('.');
        let x1 = x[0];
        let x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + '.' + '$2');
        }
        return x1 + x2;
    }

    

    return (
        <div>
            <div id="MyProductCard">
                <div id='MyProductCardContainer'>
                    <img id="MyProductImage" src={images[0]} alt="Omar Dsoky" />
                    <Link id="link" to={`/Producto/${id}`}>
                        <div class="MyProduct-details">
                            <h4 id="MyProductName">{name}</h4>
                            
                            <div id="price"><h3>${addCommas(Math.floor(price - (price / 100) * discount))}</h3>
                                <p>{unidad} unidad </p>
                            </div>
                        </div>
                    </Link>    
                        <div id="SalesAndStock">
                            <p>Estado:</p>
                            <p> {estado}</p>
                            <p>Comprador:</p>
                            <p>{user}</p>
                        </div>
                        <div id="MyProductButtons">
                            {estado==='entregado'? <Button variant="danger">Cancelar</Button>
                            : ' '}
                        
                        <Button variant="info">Enviar mensaje</Button>
                        <Button variant="dark">Ver detalle</Button>
                        </div>
                    
                   
                </div>
            </div>
        
          
       
        </div>
    )
}
