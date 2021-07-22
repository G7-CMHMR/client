import React from 'react'
import './PanelGral.css'
import { TextField, Switch } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Button } from 'react-bootstrap'
import { createProductAction, uploadImage } from '../../../redux/Actions/Seller/Actions';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export default function PanelGral({ input, setInput }) {
    const dispatch = useDispatch()

    function handleChange(event) {
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

    function createProduct(e) {
        console.log(input)
        e.preventDefault()
        if (input.name == '' || input.status == '' || input.price == '' || input.stock == '' || input.description == '' || input.type == '' || input.warranty == '') {
            toast.error('Por favor completa todos los campos')
        } else {
            dispatch(createProductAction(input))
            toast.success('Producto creado con éxito!')
        }
    }


    const [imagenes, setImagenes] = React.useState(false)

    const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/compumundohipermegared/image/upload'
    const CLOUDINARY_UPLOAD_PRESET = 'ukahx3tl'

    var resultados = []

    function SubirArchivo(images) {

        for (let i = 0; i < images.length; i++) {
            const formData = new FormData();
            formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            formData.append('file', images[i])
            axios.post(CLOUDINARY_URL, formData, {
            })
                .then(response => {
                    resultados.push(response.data.url)
                    setInput({
                        ...input,
                        images: resultados
                    })
                    setImagenes(true)
                })

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
                    <div></div>
                    <input name='images' id="PanelGralFiles" type='file' multiple onChange={(e) => SubirArchivo(e.target.files)} />
                    <div id='imagenes'>
                        {
                            imagenes &&

                            input.images.map((element) => {
                                return (
                                    <img id='ImagePreview' src={element}></img>
                                )
                            })
                        }
                    </div>

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

                        <div>
                            <TextField disabled id="outlined-required" label="" defaultValue="Comision:" variant="outlined" />
                            <TextField disabled id="outlined-disabled" label="" value={`-$${input.price * 0.05}`} variant="outlined" />
                        </div>
                        <div>
                            <TextField disabled id="outlined-required" label="" defaultValue="Envio:" variant="outlined" />
                            <TextField disabled id="outlined-disabled" label="" value={`${input.delivery ? '-$400' : '0'}`} variant="outlined" />
                        </div>
                        <div>
                            <TextField disabled id="outlined-required" label="" defaultValue="Ganancia:" variant="outlined" />
                            <TextField disabled id="outlined-disabled" label="" value={`$${(input.price - input.price * 0.05) - (input.delivery ? 400 : 0)}`} variant="outlined" />
                        </div>
                    </div>
                </div>
                <Button id='CreateProduct' onClick={(e) => createProduct(e)} variant="info">CREAR PRODUCTO</Button>
            </FormControl>
        </div>
    )
}
