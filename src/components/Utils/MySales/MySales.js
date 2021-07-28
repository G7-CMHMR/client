import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import React from 'react';
// date={e.date} id_buyer={e.id_buyer} product_status={e.product_status}
//  address={e.address} productId={e.productId} amount={e.amount} sellerId={e.sellerId}
// item={e.item}
// Faltan: images,price,discount,name
export default function MySales({date, id_buyer, product_status, address,
    productId, amount, sellerId, item, images, price, discount, name, buyer}) {

    console.log(date, id_buyer, product_status, address,
        productId, amount, sellerId, item, images, price, discount, name)

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
                    <img id="MyProductImage" src={images[0].image} alt="Omar Dsoky" />
                    <Link id="link" to={`/Producto/${productId}`}>
                        <div class="MyProduct-details">
                            <h4 id="MyProductName">{name}</h4>

                            <div id="price"><h3>${addCommas(Math.floor(price - (price / 100) * discount))}</h3>
                                <p>{amount} unidad </p>
                            </div>
                        </div>
                    </Link>
                    <div id="SalesAndStock">
                        <p>Estado: {product_status}</p>

                        <p>Comprador: {buyer}</p>

                    </div>
                    <div id="MyProductButtons">
                        {product_status === 'entregado' ? <Button variant="danger">Cancelar</Button>
                            : ' '}

                        <Button variant="info">Enviar mensaje</Button>
                        <Button variant="dark">Ver detalle</Button>
                    </div>


                </div>
            </div>



        </div>
    )
}
