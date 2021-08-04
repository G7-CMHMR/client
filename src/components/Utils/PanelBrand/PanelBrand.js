import React from 'react'
import './PanelBrand.css'
import { TextField } from '@material-ui/core'

export default function PanelBrand({input, setInput}) {

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    return (
        <div id='PanelBrandForm'>
            <form noValidate autoComplete="off">
                <TextField  error={input.brand===""}  name='brand' value={input.brand} onChange={handleChange} className='TextFieldPanelBrand' label="Marca" variant="outlined" />
                <TextField  error={input.type===""}  name='type' value={input.type}  onChange={handleChange} className='TextFieldPanelBrand' label="Tipo" variant="outlined" />
            </form>
        </div>
    )
}
