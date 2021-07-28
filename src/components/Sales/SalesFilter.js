import './SalesFilter.css'
import { TextField, Button, Select } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Link } from 'react-router-dom'

function SalesFilter() {

    const productsReducer = useSelector(state => state.productsReducer)
    const userData = useSelector(state => state.userReducer.userData)
    const dispatch = useDispatch()


    const [input, setInput] = useState({
        status: '',
        category: '',

    })

    const [errors, setErrors] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
    })

    const defaultProps = {
        options: '', //ACA VA TODA LA CARGA DE LA SEARCHBAR
        getOptionLabel: (option) => option.title,
    };


    useEffect(() => {
        setErrors(validate())
    }, [input.name, input.lastName, input.email, input.phone])



    function onHandleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function validate() {
        let error = {}
        // if (input.name.length <= 2) { error.name = 'DEBE contener mas de 2 caracteres' }
        // if (input.lastName.length <= 2) { error.lastName = 'DEBE contener mas de 2 caracteres' }
        // if (!/\S+@\S+\.\S+/.test(input.email)) { error.email = 'Email inválido' }
        return error;
    }


    function SubmitForm(e) {
        e.preventDefault()

        const isErrors = Object.keys(errors).length;
        if (!isErrors) {
            //dispatch(changeDataOfUser(input));
        }

    }



    return (
        <div id='SalesFilter'>
            {console.log(input)}
            <h3 id='FiltrosName'>Filtros</h3>
            <div id='SalesFilter_Container'>
                <Select
                    native
                    value={input.status}
                    onChange={onHandleChange}
                    name='status'
                    id='StatusFilterSales'
                >
                    <option aria-label="Todos" label='Estados:' value="" />
                    <option aria-label="" label='Pagado' value="Pagado" />
                    <option aria-label="" label='En preparación' value="EnPreparacion" />
                    <option aria-label="" label='Despachado' value="Despachado" />
                    <option aria-label="" label='Entregado' value="Entregado" />
                    <option aria-label="" label='Cancelado' value="Cancelado" />
                </Select>
                <Select
                    native
                    value={input.category}
                    onChange={onHandleChange}
                    name='category'
                    id='CategoryFilterSales'
                >
                    <option aria-label="Todos" label='Categorias:' value="" />
                    {
                        productsReducer.categories ? productsReducer.categories.map((e) => {
                            return (
                                <option value={e.title}>{e.title}</option>
                            )
                        }) : ''
                    }
                </Select>
                <Autocomplete
                    {...defaultProps}
                    id="SalesFilter_Search"
                    clearOnEscape
                    renderInput={(params) => <TextField {...params} label="Buscar por nombre" margin="normal" />}
                />
            </div>
        </div >
    )
}



export default SalesFilter