
import { Link } from 'react-router-dom';
import './ShoppingCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Badge} from 'react-bootstrap'
import { addProductToCart, decrementProductUnit, getCart, removeProductFromCart } from '../../../redux/Actions/Cart/Actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


function ShoppingCard({price,discount,images,name,amount,delivery,id}) {
   const cart = useSelector(state => state.cartReducer.cart)
    const dispatch = useDispatch()
    const userReducer = useSelector (state => state.userReducer.userData)
    var USERID = userReducer.id
    useEffect(() => {
        dispatch(getCart(USERID))
	}, [dispatch, USERID])
    function deleteItem(e,idproduct){
        dispatch(removeProductFromCart({userId:USERID,productId:idproduct}))
    }   
    let addCommas = function(nStr)
    {
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
    
    function decrementItem(e,idproduct){
        dispatch(decrementProductUnit({userId: USERID, productId: idproduct}))
       
    }

    function incrementItem(e,idproduct){
        dispatch(addProductToCart({ userId: USERID, productId: idproduct}))
     
    }




    return(
        <div id="ProductCard2">
	            <div class="product-image2">
                	<img width="100px" height="100px" src={images[0].image} alt="Omar Dsoky"/>
                </div>
                <Link id="link2" to={`/Producto/${id}`}>
                	<div class="product-details2">
	                    <h6>{name}</h6>
                       
                <div id="offandship2">
                        { delivery? <Badge bg="success">Envio gratis</Badge>  :  <Badge bg="success">Envio $400</Badge> }
                       
                </div> 
		            </div>
                </Link>
                <div id="units">
                { amount <2 ? <button disable={true} >-</button>:
                     <button onClick={(e)=>decrementItem(e,id)}>-</button>
                }
                
                                {amount}
                <button onClick={(e)=>incrementItem(e,id)}>+</button>        
                </div>
               <div>
                   <button onClick={(e)=>deleteItem(e,id)}>Eliminar</button>
               </div>
                <div id="price2"><h4>${addCommas(Math.floor(price - (price/100)*discount)*amount)}</h4>
                        </div> 
               
    </div>    
        )
    }


export default ShoppingCard