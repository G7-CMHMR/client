
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom';
import './ShoppingCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Badge} from 'react-bootstrap'
import { useState } from 'react';


function ShoppingCard({price,discount,images,name,seller,status,valuation,delivery,id}) {
    // var porcentaje= (price / precioviejo)*100;
    // var intPorcentaje = 100-(Math.round( porcentaje ))+"%";
    const [cant, setCant] = useState(1);

    function disCant(){
        setCant(cant-1)
    }
    function addCant(){
        setCant(cant+1)
    }
    let addCommas = function(nStr)
    {
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

    return(
        <div id="ProductCard2">
          	
	            <div class="product-image2">
                	<img width="100px" src={images[0]} alt="Omar Dsoky"/>
                </div>
                <Link id="link2" to={`/Producto/${id}`}>
                	<div class="product-details2">
	                    <h6>{name}</h6>
                       
                <div id="offandship2">
                        { delivery? <Badge bg="success">Envio gratis</Badge>  :  <Badge bg="success">Envio $400</Badge> }
                       
                </div> 
		            </div>
                </Link>
                <div id="cant">
                    <button onclick={()=>disCant}>-</button>
                        {cant}
                    <button onclick={()=>addCant}>+</button>
                </div>
                <div id="price2"><h4>${addCommas(Math.floor(price - (price/100)*discount))}</h4>
                        </div> 
                
    </div>    
        )
    }


export default ShoppingCard