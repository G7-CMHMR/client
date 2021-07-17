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


export default function PanelGral() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        Condition: '',
        CheckShipping: true,
        name: 'hai',
        amount: '',
    });

    const handleChange = (event) => {
        if (event.target.name == 'CheckShipping') {
            setState({
                ...state,
                [event.target.name]: event.target.checked
            });
            console.log(event.target.checked)

        } else {
            setState({
                ...state,
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
                                value={state.age}
                                onChange={handleChange}
                                label="Condition"
                                inputProps={{
                                    name: 'Condition',
                                    id: 'outlined-age-native-simple',
                                }}
                            >
                                <option aria-label="None" disabled value="" />
                                <option value={10}>Nuevo</option>
                                <option value={20}>Usado</option>
                                <option value={30}>Reacondicionado</option>
                            </Select>
                            <div id="StockPanelGral"><TextField id='PanelGralStock' label="Stock" type='number' variant="outlined" /></div>
                        </div>
                        <div id='Warranty'>
                            <TextField id='WarrantyTextField' label="Meses de Garantia" type='number' variant="outlined" />
                            <FormControl variant="outlined">
                                <InputLabel variant='outlined' htmlFor="outlined-adornment-amount">Precio</InputLabel>
                                <OutlinedInput
                                    id='PanelGralPrice'
                                    value={state.amount}
                                    name='amount'
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
                        checked={state.CheckShipping}
                        onChange={handleChange}
                        color="primary"
                        name="CheckShipping"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </div>

                <div id='PanelGralSearchImages'>
                    <TextField id="PanelGralFiles" type='file' multiple='multiple' label="" variant="outlined" />
                </div>
                <div id='PanelGral-Description-Data'>
                    <TextField
                        id="PanelGralDescription"
                        label="Descripcion"
                        multiline
                        rows={10}
                        variant="outlined"
                    />

                    <div id='PanelGralOthers'>
                        <div>
                            <TextField disabled id="outlined-required" label="" defaultValue="Comision:" variant="outlined" />
                            <TextField disabled id="outlined-disabled" label="" defaultValue="" variant="outlined" />
                        </div>
                        <div>
                            <TextField disabled id="outlined-required" label="" defaultValue="Envio:" variant="outlined" />
                            <TextField disabled id="outlined-disabled" label="" defaultValue="" variant="outlined" />
                        </div>
                        <div>
                            <TextField disabled id="outlined-required" label="" defaultValue="Ganancia:" variant="outlined" />
                            <TextField disabled id="outlined-disabled" label="" defaultValue="" variant="outlined" />
                        </div>
                    </div>
                </div><Button id='CreateProduct' variant="info">CREAR PRODUCTO</Button>{' '}
            </FormControl>
        </div>
    )
}
