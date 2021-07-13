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
        <div id="producDescription">
           <h2>Descripción del producto</h2> 
           <hr></hr>
            <p>{productsReducer.description}</p>
        </div>
    )
}



export default Description