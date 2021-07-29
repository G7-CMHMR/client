import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import './CardPC.css'
export default function CardPC({ name, type, images, delivery, price, discount, seller, status, id, input, setInput, category, Siguiente }) {


    function onClickFunction(e) {
       /*  console.log(price)
        console.log(input.Total)
        console.log(parseInt(input.Total + price))
        input.Total? console.log('SI HAY'): console.log(input.Total) */

        setInput((all) => {
            return ({
                ...all,
                [category]: parseInt(price),
                //Total: all.Procesador + all.CoolerCPU + all.PlacaMadre + all.MemoriaRam + all.PlacaDeVideo,
            })
        })
        Siguiente()
    }

    return (
        <Link onClick={onClickFunction}>
            <div id='CardPC'>
                <div id='CardPC_Left'>
                    <img id='CardPC_IMG' src={images[0]}></img>
                </div>
                <div id='CardPC_Right'>
                    <div id='CardPC_1'>
                        <h5>{name.substring(0, 35)}</h5>
                        <h6>Tipo: {type}</h6>
                    </div>
                    <div id='CardPC_2'>
                        <h3>${price}</h3>
                        <h5 id='EnvioGratis'>{delivery ? 'Envio Gratis' : ''}</h5>
                    </div>
                </div>

            </div>
        </Link>
    )
}
