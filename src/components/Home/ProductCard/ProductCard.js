import React , { useState } from 'react';

function ProductCard(props) {
    const [show, setShow] = useState(false);
    const mouseEnter = function(e){
        setShow(true)
    }
    const MouseLeave = function(e){
        setShow(false)
    }
    return (
        <div className="HomeCard" onMouseEnter={mouseEnter} onMouseLeave={MouseLeave}>
            <div style={{height: 224}}>
                {props.img && <img src={props.img} width="224px" height="224px" alt="" />}
            </div>
            <div>
                {props.discount && props.discount > 0 && show ? <h4 style={{textDecoration:"line-through"}} >${Math.floor(props.price*171)}</h4> : show && <br/>}
                <div id="price">
                    {props.price && <h2>${Math.floor(props.price*171 - (props.price*171/100)*props.discount)}</h2>}
                    { props.discount > 0 && <h4>{props.discount}% OFF</h4>}
                </div>
                {props.delivery ? <span >envío gratis</span> : (!show && <br></br>)}
                {show && <td >{props.name}</td>}
            </div>
        </div>
    );
};



export default ProductCard

//Card se renderiza dentro de home, detail y Pcbuilder