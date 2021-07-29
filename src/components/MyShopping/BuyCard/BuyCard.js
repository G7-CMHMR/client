//card que se renderiza en Shoppin History (historial del compras)
import './BuyCard.css'
import { Button, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Review from '../../../views/_Modals/SellerReview/SellerReview';
import { useDispatch, useSelector } from 'react-redux'

// id={x.id} amount={x.amount}
// cartId={x.cartId} productId={x.productId} purchaseOrderId={x.purchaseOrderId}
// name={x.product.name} status={x.product.status} price={x.product.price}
// valuation={x.product.valuation} stock={x.product.stock} brand={x.product.brand}
// description = {x.product.description} type={x.product.type} warranty={x.product.warranty} 
// sellerId={x.product.sellerId} promotion={x.product.promotion} images={x.product.images}
// category={x.product.categories}
function BuyCard(props) {

    const userReducer = useSelector(state => state.userReducer.userData)

    const dispatch = useDispatch()


    function ChangeProductState () {
        //dispatch(setPurchaseOrderStatus( ,userReducer.id))
    }
    return (
        <div id='BuyCardContainer'>
            <Link to={'Producto/' + props.productId} >
                <div id='BuyCard_Image_Container'>
                    <img id='BuyCard_Image' src={props.images[0].image}></img>
                </div>
            </Link>

            <div id='BuyCard_Name-Price-Shipping'>
                <Link to={'Producto/' + props.productId} >
                    <h3 id='BuyCard_Name'>{props.name.substring(0,65)}</h3>
                </Link>
                <div id='BuyCard_PriceAndCount'>
                    <h1 id='BuyCard_Price'>{'$' + props.price}</h1>
                    <h3 id='BuyCard_Amount'>Cantidad: {props.amount}</h3>
                </div>

                <div id='BuyCard_Shipping-Help'>
                    <h3 id='BuyCard_Shipping'>{props.promotion.delivery ? 'Envio Gratis' : 'Envio: $400'}</h3>
                    <Button id='BuyCard_HelpButton' variant="contained" color="primary">AYUDA</Button>
                </div>
            </div>
            <div id='BuyCard_State'>
                <TextField disabled id="BuyCard_State-input" label={'Estado:'} variant="outlined" />
            </div>
            <div id='BuyCard_Buttons'>
                {props.status == 'Entregado' ? <Button>Nico</Button>:<Button id='BuyCard_Btn1' onClick={ChangeProductState} variant="contained" color="primary">YA RECIBI EL PRODUCTO</Button>}
                <Link to={'Producto/' + props.productId} ><Button id='BuyCard_Btn2' variant="contained" color="secundary">Ir a la publicación</Button></Link>
            </div>
            <div>
                <Review idUser={userReducer.id} idProduct={props.productId} idSeller={props.sellerId}/>
            </div>

        </div>
    )
}

export default BuyCard

