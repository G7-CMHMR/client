import './FormProfile.css'
import { TextField, Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react'
import { useEffect, useState } from 'react';
import { validate } from '@babel/types';
import { changeDataOfUser } from '../../redux/Actions/User/Actions'

import { Link } from 'react-router-dom'

function FormProfile() {

    //const userReducer = useSelector (state => state.userReducer.user)
    //const dispatch = useDispatch()



    const [input, setInput] = useState({

        name: 'Matias',
        lastName: 'Bloisi',
        email: 'bloisimatias@hotmail.com    ',
        mobile: '1138986430',
        password: '',

    })

    const [errors, setErrors] = useState({
        //
        name: '',
        lastName: '',
        email: '',
        mobile: '',
        //password: '',
        //
    })


    useEffect(() => {
        setErrors(validate())
    }, [input.name, input.lastName, input.email, input.mobile])



    function onHandleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function validate() {
        let error = {}
        if (input.name.length <= 2) { error.name = 'DEBE contener mas de 2 caracteres' }
        if (input.lastName.length <= 2) { error.lastName = 'DEBE contener mas de 2 caracteres' }
        if (!/\S+@\S+\.\S+/.test(input.email)){ error.email = 'Email inválido' }
        return error;
    }


    function SubmitForm(e) {
        e.preventDefault()


        if (errors.name == '' & errors.lastName == '' & errors.email == '' && errors.mobile == '') {
            changeDataOfUser(input)
        }

    }



    return (
        <div >
            <br></br>
            <h1>Editar Perfil</h1>
            <form id='FormProfileContainer' onSubmit={SubmitForm}>
                <div id='ProfileForm_NameAndSub'>
                    <TextField
                        required
                        id="outlined-disabled"
                        label="Nombre"
                        helperText=""
                        name='name'
                        onChange={onHandleChange}
                    />
                    <TextField
                        required
                        id="outlined"
                        label="Apellido"
                        helperText=""
                        name='lastName'

                        onChange={onHandleChange}
                    />
                </div>

                <div id='ProfileErrorsMain'>
                    {errors.name ? <span id='PerfilError1'>{errors.name}</span> : <span id='PerfilError1'>{errors.name}</span>}
                    <span id='PerfilError1-2'></span>
                    {errors.lastName ? <span id='PerfilError2'>{errors.lastName}</span> : <span id='PerfilError2'>{errors.lastName}</span>}

                </div>
                <br></br>
                <br></br>
                <div id='Email_Form'>
                    <TextField
                        required
                        id="outlined-helperText"
                        label="Email"
                        helperText=""
                        name='email'
                        onChange={onHandleChange}
                    />
                    {errors.email ? <span id='PerfilErrorEmail'>{errors.email}</span> : <span id='PerfilError1'>{errors.email}</span>}
                </div>
                <div id='ProfileErrors'>
                </div>
                <br></br>
                <br></br>
                <div id='MobileForm'>
                    <TextField
                        id="outlined-helperText"
                        label="Telefono"
                        helperText=""
                        name='mobile'
                        onChange={onHandleChange}
                    />
                </div>
                <br></br>
                <br></br>
                <div>
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Contraseña"
                        type="password"
                        helperText=""
                        name='password'
                        onChange={onHandleChange}
                    />
                    <Link to='/Perfil/CambiarContraseña'>
                        <Button
                            variant="contained"
                            size="small"
                            id='ButtonPassword'
                        >
                            Editar
                        </Button>
                    </Link>
                </div>
                <br></br>
                <br></br>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    type='submit'
                //startIcon={<SaveIcon />}
                >
                    Guardar Cambios
                </Button>
            </form>
        </div >
    )
}



export default FormProfile