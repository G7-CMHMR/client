//card que se renderiza en Shoppin History (historial del compras)
import './BuyCard.css'
import { Button, TextField } from '@material-ui/core'

function BuyCard(params) {
    return (
        <div id='BuyCardContainer'>

            <div id='BuyCard_Image_Container'>
                <img id='BuyCard_Image' src='https://http2.mlstatic.com/D_NQ_NP_702136-MLA31062619961_062019-O.webp'></img>
            </div>
            <div id='BuyCard_Name-Price-Shipping'>
                <h3 id='BuyCard_Name'>Nombre del producto</h3>
                <div id='BuyCard_PriceAndCount'>
                    <h1 id='BuyCard_Price'>$8500</h1>
                    <h3 id='BuyCard_Amount'>Cantidad: 4</h3>
                </div>
                <div id='BuyCard_Shipping-Help'>
                    <h3 id='BuyCard_Shipping'>Envio Gratis</h3>
                    <Button id='BuyCard_HelpButton' variant="contained" color="primary">AYUDA</Button>
                </div>
            </div>
            <div id='BuyCard_State'>
                <TextField disabled id="BuyCard_State-input" label="ESTADO: PERDIDO" variant="outlined" />
            </div>
            <div id='BuyCard_Buttons'>
            <Button id='BuyCard_Btn1' variant="contained" color="primary">YA RECIBI EL PRODUCTO</Button>
            <Button id='BuyCard_Btn2'variant="contained" color="secundary">Ir a la publicación</Button>
            </div>

        </div>
    )
}



export default BuyCard