//card dentro de Categorias, REsultados, favoritos
import './ProductCard.css'
import Rating from '@material-ui/lab/Rating';
import {FaHeart} from 'react-icons/fa'
import {IoCartSharp} from 'react-icons/io5'
import { Link } from 'react-router-dom';


function ProductCard({precio,precioviejo,imagen,titulo,vendedor,estado,stars,freeship}) {
    var porcentaje= (precio / precioviejo)*100;
    var intPorcentaje = 100-(Math.round( porcentaje ))+"%";

    return(
        <div id="ProductCard">
           <div id="container">	
	            <div class="product-image">
                	<img src={imagen} alt="Omar Dsoky"/>
                </div>
                <Link id="link" to="/">
                	<div class="product-details">
	                    <h1>{titulo}</h1>
                		<p id="seller">Vendido por {vendedor}</p>
                        <div id="price"><h3>${precio}</h3><span>${precioviejo}</span></div>
	                	<p class="information">{estado}</p>
                      <Rating name="half-rating-read" defaultValue={stars} precision={0.5} readOnly />
		            </div>
                </Link>
                <div id="offandship">
                        { freeship? <div id="ship">Envio gratis</div> :  <p></p> }
                       { precioviejo? <div id="off">{intPorcentaje} OFF</div> : <p></p> }
                       
                </div>
                <div id="icons">
                     <button id="btnheart"><FaHeart/></button>
                    <button id="btncart"><IoCartSharp/></button>
                </div>
	    </div>
    </div>    
        )
    }


export default ProductCard