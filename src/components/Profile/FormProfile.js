import './FormProfile.css'
import { TextField, Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react'
import { useEffect, useState } from 'react';
import { validate } from '@babel/types';

function FormProfile() {

    //const userReducer = useSelector (state => state.userReducer.user)
    //const dispatch = useDispatch()

    useEffect(() => {

    }, [])


    const [input, setInput] = useState({

        name: 'Matias',
        lastname: 'Bloisi',
        email: 'bloisimatias@hotmail.com    ',
        mobile: '1138986430',
        dni: '44211474',
        password: '',

    })

    const [errors, setErrors] = useState({
        //
        name: '',
        lasname: '',
        email: '',
        mobile: '',
        dni: '',
        password: '',
        //
    })

    function onHandleChange(e) {

        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

        console.log(input)
        validate()

    }

    function validate () {
        if(input.name.length <= 2){
            setErrors({
                ...errors,
                name: 'DEBE contener mas de 2 caracteres'
            })
        }else setErrors({...errors, name: ''})

        if(input.lastname.length <= 2){
            setErrors({
                ...errors,
                lastname: 'DEBE contener mas de 2 caracteres'
            })
        }else setErrors({...errors, lastname: ''})
    }

    function SubmitForm(e) {
        e.preventDefault()
        
        
        
        console.log(errors)
    
        
    
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
                        name='lastname'

                        onChange={onHandleChange}
                    />
                </div>
                <div id='ProfileErrors'>
                {errors.name? <span id='PerfilError1'>{errors.name}</span> : <span id='PerfilError1'></span>}
                <span id='PerfilError1-2'></span>
                {errors.lastname? <span id='PerfilError2'>{errors.lastname}</span> : <span id='PerfilError2'></span>}
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
                </div>
                <div id='ProfileErrors'>
                {errors.email? <p className='PerfilError'>{errors.email}</p> : null}
                </div>
                <br></br>
                <br></br>
                <div id='ProfileForm_NameAndSub'>
                    <TextField
                        id="outlined-helperText"
                        label="Telefono"
                        helperText=""
                        name='mobile'
                        onChange={onHandleChange}
                    />
                    <TextField
                        id="outlined-helperText"
                        label="DNI"
                        helperText=""
                        name='dni'
                        onChange={onHandleChange}
                    />
                </div>
                <br></br>
                <br></br>
                <TextField
                    required
                    id="outlined-password-input"
                    label="Contraseña"
                    type="password"
                    helperText=""
                    name='password'
                    onChange={onHandleChange}
                />
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
        </div>
    )
}



export default FormProfile