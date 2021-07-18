import React from 'react'
import './PanelInput.css'
import { TextField } from '@material-ui/core'

export default function PanelInput({input, setInput}) {

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (

        <div id='TextFieldPanelInputContainer'>
            <TextField id="TextFieldPanelInput" autocomplete="off" name='name' value={input.name} label="Nombre del producto" variant="outlined" onChange={handleChange} />
        </div>
    )
}
