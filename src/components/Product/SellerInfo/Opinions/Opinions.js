//opiniones en seller info dentro de publicaciopn
import Rating from '@material-ui/lab/Rating';
import { BsPersonFill } from "react-icons/bs";
import './Opinions.css'

function Opinions({user, valuation, description}) {
    return(
        <div id="OpinionCard">
        <h5><BsPersonFill/>{user}</h5>
        <Rating name="half-rating-read" defaultValue={valuation} precision={0.5} readOnly />
        <p>{description}</p>
        </div>
    )
}



export default Opinions