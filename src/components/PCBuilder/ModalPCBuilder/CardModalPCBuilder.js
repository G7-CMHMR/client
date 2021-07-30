import React from 'react'
import './CardModalPCBuilder.css'
import { Button, Modal, Backdrop, TextField, FormControl, InputLabel, Select, Switch } from '@material-ui/core'

function CardModalPCBuilder({ id, category, input, setInput, index }) {


    function handleChange(e) {
        
        if (category == 'Ram' || category == 'Almacenamiento' || category == 'Accesorios') {
            let cat = category[index]
            setInput({
                ...input,
                [cat]: {
                    id: 0,
                    price: 0,
                    name: '',
                    delivery: '',
                    type: '',
                }
            })

        } else {
            setInput({
                ...input,
                [category.replace(/ /g, "")]: {
                    id: 0,
                    price: 0,
                    name: '',
                    delivery: '',
                    type: '',
                }
            })
        }

    }


    return (
        <div id='CardModalPCBuilderContainer'>
            <span id='CardModalPCBuilder_text'>{category}</span>
            <h6 id='NombrePCBUILDER'>{id.name.substring(0, 40)}</h6>
            <div id='CardModalPCBuilder_info'>
                <h4 id='PCBUILDER_Envio'>Envio: {id.delivery ? 'Gratis' : '$400'}</h4>
                <h6 id='PCBUILDER_Type'>Tipo: {id.type}</h6>
            </div>
            <div id='BotonYEliminarPCBUILDER'>
                <h3>${id.price}</h3>
                <Button id='BotonEliminarPCBUILDER' onClick={handleChange} variant="danger">X</Button>{' '}
            </div>
        </div>
    )
}

export default CardModalPCBuilder
