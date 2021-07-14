//card dentro de Categorias, REsultados, favoritos
import './ProductCard.css'
import Rating from '@material-ui/lab/Rating';
import { FaHeart } from 'react-icons/fa'
import { IoCartSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom';

function ProductCard({ price, discount, images, name, seller, status, valuation, delivery, id }) {

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
            <br></br>
            <div id="ProductCard">
                <div id="container">
                    <div class="product-image">
                        <img src={images[0]} alt="Omar Dsoky" />
                    </div>
                    <Link id="link" to={`/Producto/${id}`}>
                        <div class="product-details">
                            <h1>{name}</h1>
                            <p id="seller">Vendido por {seller}</p>
                            <div id="price"><h3>${addCommas(Math.floor(price - (price / 100) * discount))}</h3>
                                {discount > 0 ? <span> ${addCommas(Math.floor(price))}</span> : <p></p>}
                            </div>
                            <p class="information">{status}</p>
                            <Rating name="half-rating-read" defaultValue={valuation} precision={0.5} readOnly />
                        </div>
                    </Link>
                    <div id="offandship">
                        {delivery ? <div id="ship">Envio gratis</div> : <p></p>}
                        {discount > 0 ? <div id="off">{discount}% OFF</div> : <p></p>}

                    </div>
                    <div id="icons">
                        <button id="btnheart"><FaHeart /></button>
                        <button id="btncart"><IoCartSharp /></button>
                    </div>
                </div>
            </div>
            <br></br>
        </div>
    )
}



export default ProductCard