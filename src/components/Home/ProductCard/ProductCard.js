import React , { useState } from 'react';
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
        <div className="HomeCard" onMouseEnter={mouseEnter} onMouseLeave={MouseLeave}>
            <div style={{height: 224}}>
                {props.img && <img src={props.img} width="213px" alt="" />}
            </div>
            <div>
                {props.discount && props.discount > 0 && show ? <h4 style={{color:"gray", textDecoration:"line-through"}} >${addCommas(Math.floor(props.price*171))}</h4> : show && <br/>}
                <div id="price">
                    {props.price && <h2>${addCommas(Math.floor(props.price*171 - (props.price*171/100)*props.discount))}</h2>}
                    { props.discount > 0 && <h4 id="off">{props.discount}% OFF</h4>}
                </div>
                {props.delivery ? <span >envío gratis</span> : (!show && <br></br>)}
                {show && <td >{props.name}</td>}
                
            </div>
        </div>
    );
};



export default ProductCard

//Card se renderiza dentro de home, detail y Pcbuilder