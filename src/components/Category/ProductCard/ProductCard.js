//card dentro de Categorias, REsultados, favoritos
import './ProductCard.css'
import Rating from '@material-ui/lab/Rating';
import {FaHeart} from 'react-icons/fa'
import {IoCartSharp} from 'react-icons/io5'
import { Link } from 'react-router-dom';

var prueba= {
    titulo:"Producto de prueba",
    precio:4354,
    precioviejo:10000,
    vendedor:"Fulanito",
    estado:"Nuevo",
    freeship:true,
    stars:3.5,
    imagen:"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-logitech-g203-0.jpg"
}


function ProductCard() {
    var porcentaje= (prueba.precio / prueba.precioviejo)*100;
    var intPorcentaje = 100-(Math.round( porcentaje ))+"%";


    return(
        <div id="ProductCard">
           <div id="container">	
	            <div class="product-image">
                	<img src={prueba.imagen} alt="Omar Dsoky"/>
                </div>
                <Link id="link" to="/">
                	<div class="product-details">
	                    <h1>{prueba.titulo}</h1>
                		<p id="seller">Vendido por {prueba.vendedor}</p>
                        <div id="price"><h3>${prueba.precio}</h3><span>${prueba.precioviejo}</span></div>
	                	<p class="information">{prueba.estado}</p>
                      <Rating name="half-rating-read" defaultValue={prueba.stars} precision={0.5} readOnly />
		            </div>
                </Link>
                <div id="offandship">
                        { prueba.freeship? <div id="ship">Envio gratis</div> :  <p></p> }
                       { prueba.precioviejo? <div id="off">{intPorcentaje} OFF</div> : <p></p> }
                       
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