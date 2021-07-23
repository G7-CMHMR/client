//card que se renderiza en Shoppin History (historial del compras)
import BuyCard from "../BuyCard/BuyCard";
import './BuyCards.css'

function BuyCards() {

    return (
        <div id='Container_Cards'>
            <br></br>
            <BuyCard></BuyCard>
            <BuyCard></BuyCard>
            <BuyCard></BuyCard>
        </div>
    );
}



export default BuyCards