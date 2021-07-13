import { useState } from 'react';
import './Similars.css'
import { Link } from 'react-router-dom';

function Similars({price,discount,images,name,seller,status,valuation,delivery,id}) {
    
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
            <Link id="link" to={`/Producto/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <div style={{height: 224}}>
                {images && <img src={images} width="213px" height="213px" alt="" />}
            </div>
            <div>
                {discount && discount > 0 && show ? <h4 style={{color:"gray", textDecoration:"line-through"}} >${addCommas(Math.floor(price*171))}</h4> : show && <br/>}
                <div id="price">
                    {price && <h2>${addCommas(Math.floor(price*171 - (price*171/100)*discount))}</h2>}
                    { discount > 0 && <h4 id="offoff">{discount}% OFF</h4>}
                </div>
                {delivery ? <span >envío gratis</span> : (!show && <br></br>)}
                {show && <td >{name}</td>}
                
            </div></Link>
        </div>
    );
};





export default Similars