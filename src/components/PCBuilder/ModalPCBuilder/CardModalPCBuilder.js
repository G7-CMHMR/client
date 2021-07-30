import React from 'react'
import './CardModalPCBuilder.css'
import { Button, Modal, Backdrop, TextField, FormControl, InputLabel, Select, Switch } from '@material-ui/core'

function CardModalPCBuilder({id, category}) {
    console.log(id)
    return (
        <div id='CardModalPCBuilderContainer'>
            <span id='CardModalPCBuilder_text'>{category}</span>
            <h6 id='NombrePCBUILDER'>{id.name.substring(0, 40 )}</h6>
            <div id='CardModalPCBuilder_info'>
                <h4 id='PCBUILDER_Envio'>Envio: {id.delivery? 'Gratis' : '$400'}</h4>
                <h6 id='PCBUILDER_Type'>Tipo: {id.type}</h6>
            </div>
            <div id='BotonYEliminarPCBUILDER'>
                <h3>${id.price}</h3>
                <Button id='BotonEliminarPCBUILDER' variant="danger">X</Button>{' '}
            </div>
        </div>
    )
}

export default CardModalPCBuilder
