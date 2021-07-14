import './SellerInfo.css'
import Rating from '@material-ui/lab/Rating';
import { IoLocationSharp } from "react-icons/io5";
import Opinions from './Opinions/Opinions';

function SellerInfo() {

    let seller = {
        name:"nachoG454",
        valuation:3,
        location:"Buenos Aires",
        sales:2633,
        opinions:[{
            user:"pirulito123",
            valuation:1,
            description:"pesimo vendedor"
        },
        {
            user:"raulAlonso",
            valuation:5,
            description:"el mejor vendedor del mundo"
        }]
    }

    return(
        <div>
            <h3 id="infoseller">Información del vendedor</h3>
            <hr/>
            <p style={{color:"red"}}>info de prueba hasta tener modelo seller</p>
            <h4>Vendido por "{seller.name}"</h4>
            <h4><IoLocationSharp/> {seller.location}</h4>
            <h4>{seller.sales} Ventas concretadas</h4>
            <h4>Reputación del vendedor: </h4>
            <Rating name="half-rating-read" defaultValue={seller.valuation} precision={0.5} readOnly />
            <hr/>
            <h4>Opiniones</h4>
            <div id="OpinionsCards">
            {
            seller.opinions.map((x)=>{
                return <Opinions user={x.user} description={x.description} valuation={x.valuation}/>
            })
            }
            </div>
        </div>
    )
}



export default SellerInfo