import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'

function ProductCard(props) {
    
    const [show, setShow] = useState(false);
    const mouseEnter = function(e){
        setShow(true)
    }
    const MouseLeave = function(e){
        setShow(false)
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

    return (
        <div className="homeCard" onMouseEnter={mouseEnter} onMouseLeave={MouseLeave}>
            <div className="homeCard_imageContainer">
                {/*{props.img && <img src={props.img} width="224px" height="224px" alt="" />}*/}
                <Link to={`Producto/${props.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    {props.img && <img className="homeCard_image" src={props.img} alt="" />}
            </Link></div>
            <div className="homeCard_info">
                {/*{props.discount && props.discount > 0 && show ? <h4 style={{textDecoration:"line-through"}} >${addCommas(Math.floor(props.price*171))}</h4> : show && <br/>}*/}
                {props.discount && props.discount > 0 && show ? 
                    <h4 className="homeCard_price">${addCommas(Math.floor((props.price * props.discount)/10))}</h4> 
                    : show && 
                    <br/>}
                <div className="homeCard_price_discountCointainer">
                    {props.price && <h2 className="homeCard_price_discount">${addCommas(Math.floor(props.price))}</h2>}
                    { props.discount > 0 && <h4 className="homeCard_discount">{props.discount}% OFF</h4>}
                </div>
                {props.delivery ? <span style={{color: 'green'}}>envío gratis</span> : (!show && <br></br>)}
                {show && <div className="homeCard_detailContainer"><p className="homeCard_detail">{props.name}</p></div>}
            </div>
        </div>
    );
};



export default ProductCard

//Card se renderiza dentro de home, detail y Pcbuilder