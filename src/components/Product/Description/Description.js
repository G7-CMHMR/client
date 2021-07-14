import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../../redux/Actions/Products/Actions";

//descripcion del producto denro de publicacion
function Description() {
    const { idProducto } = useParams()

    const dispatch = useDispatch();
    const productsReducer = useSelector(state => state.productsReducer.productDetail)


    useEffect(() => {
        dispatch(getProductDetail(idProducto))
    }, [dispatch, idProducto])

    return(
        <div id="productDescription">
           <h2 style={{padding:"1%"}}>Descripción del producto</h2> 
           <hr></hr>
            <h4>{productsReducer.description}</h4>
        </div>
    )
}



export default Description