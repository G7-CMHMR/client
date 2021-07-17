import React from 'react'
import './PanelInput.css'
import { TextField } from '@material-ui/core'

export default function PanelInput() {
    return (
        <div id='TextFieldPanelInputContainer'>
            <TextField id="TextFieldPanelInput" label="Nombre del producto" variant="outlined" />
        </div>
    )
}
