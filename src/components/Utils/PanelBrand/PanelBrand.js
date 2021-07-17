import React from 'react'
import './PanelBrand.css'
import { TextField } from '@material-ui/core'

export default function PanelBrand() {
    return (
        <div id='PanelBrandForm'>
            <form noValidate autoComplete="off">
                <TextField className='TextFieldPanelBrand' label="Marca" variant="outlined" />
                <TextField className='TextFieldPanelBrand' label="Tipo" variant="outlined" />
                <TextField className='TextFieldPanelBrand' label="Linea" variant="outlined" />
            </form>
        </div>
    )
}
