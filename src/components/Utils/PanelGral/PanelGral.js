import React from 'react'
import './PanelGral.css'
import { TextField, Switch } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import {Button} from 'react-bootstrap'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export default function PanelGral ({input, setInput}) {
    console.log(input)

    function handleChange (event){
        if (event.target.name == 'delivery') {
            setInput({
                ...input,
                [event.target.name]: event.target.checked
            });

        } else {
            setInput({
                ...input,
                [event.target.name]: event.target.value,
            });
        }
    }



    return (
        <div >
            <FormControl variant="outlined" id='PanelGralForm'>
                <div>
                    <div id='PanelGralContainer-ConditionStock-Warranty'>
                        <div id='PanelGralConditionAndStock'>
                            <InputLabel htmlFor="outlined-age-native-simple">Condicion</InputLabel>
                            <Select
                                native
                                value={input.status}
                                onChange={handleChange}
                                label="Condition"
                                name='status'
                                inputProps={{
                                    name: 'status',
                                    id: 'outlined-age-native-simple',
                                }}
                            >
                                <option aria-label="None" disabled value="" />
                                <option value={'Nuevo'}>Nuevo</option>
                                <option value={'Usado'}>Usado</option>
                                <option value={'Reacondicionado'}>Reacondicionado</option>
                            </Select>
                            <div id="StockPanelGral"><TextField name='stock' onChange={handleChange} value={input.stock} id='PanelGralStock' label="Stock" type='number' variant="outlined" /></div>
                        </div>
                        <div id='Warranty'>
                            <TextField name='warranty' value={input.warranty} onChange={handleChange} id='WarrantyTextField' label="Meses de Garantia" type='number' variant="outlined" />
                            <FormControl variant="outlined">
                                <InputLabel variant='outlined' htmlFor="outlined-adornment-amount">Precio</InputLabel>
                                <OutlinedInput
                                    id='PanelGralPrice'
                                    value={input.price}
                                    name='price'
                                    onChange={handleChange}
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div id='FreeShiping'>
                    <h4>Envio Gratis:</h4>
                    <Switch
                        checked={input.delivery}
                        onChange={handleChange}
                        color="primary"
                        name="delivery"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </div>

                <div id='PanelGralSearchImages'>
                    <input name='images' value={input.images} onChange={handleChange} id="PanelGralFiles" type='file' multiple label="" variant="outlined" />
                </div>
                <div id='PanelGral-Description-Data'>
                    <TextField
                        id="PanelGralDescription"
                        label="Descripcion"
                        multiline
                        rows={10}
                        variant="outlined"
                        name='description'
                        value={input.description}
                        onChange={handleChange}
                    />

                    <div id='PanelGralOthers'>
                        {console.log(input.price)}
                        <div>
                            <TextField disabled id="outlined-required" label="" defaultValue="Comision:" variant="outlined" />
                            <TextField disabled id="outlined-disabled" label="" value={`-$${input.price*0.05}`} variant="outlined" />
                        </div>
                        <div>
                            <TextField disabled id="outlined-required" label="" defaultValue="Envio:" variant="outlined" />
                            <TextField disabled id="outlined-disabled" label="" value={`${input.delivery?'-$400':'0'}`} variant="outlined" />
                        </div>
                        <div>
                            <TextField disabled id="outlined-required" label="" defaultValue="Ganancia:" variant="outlined" />
                            <TextField disabled id="outlined-disabled" label="" value={`-$${(input.price - input.price*0.05) - (input.delivery?400:0)}`} variant="outlined" />
                        </div>
                    </div>
                </div><Button id='CreateProduct' variant="info">CREAR PRODUCTO</Button>{' '}
            </FormControl>
        </div>
    )
}
