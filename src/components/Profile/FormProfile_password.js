import './FormProfile_pass.css'
import { TextField, Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react'
import { useEffect, useState } from 'react';

import {changePasswordOfUser} from '../../redux/Actions/User/Actions'

import { Link } from 'react-router-dom'

function FormProfile_password() {

    //const userReducer = useSelector (state => state.userReducer.user)
    //const dispatch = useDispatch()



    const [input, setInput] = useState({

        password: '',
        newpassword: '',
        newpasswordconfirm: '',

    })

    const [errors, setErrors] = useState({
        //
        password: '',
        newpassword: '',
        newpasswordconfirm: '',
        //
    })

    useEffect(() => {
        validate()
    }, [input.newpassword, input.newpasswordconfirm])


    function onHandleChange(e) {

        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

    }

    function validate() {
        if (input.newpassword.length > 8 || input.newpassword < 20){
            if (input.newpassword != input.newpasswordconfirm) {
                setErrors({...errors, newpassword: 'Las nuevas contraseñas no coinciden'})
            }else setErrors({ ...errors, newpassword: '' })

        }else{setErrors({...errors, newpassword: 'La contraseña debe tener entre 8 y 20 caracteres'})}

    }

    function SubmitForm(e) {
        e.preventDefault()

        if(errors.password == '' & errors.newpassword == '' & errors.newpasswordconfirm == ''){
            changePasswordOfUser(input)
        }

        
    }



    return (
        <div id='FormProfilePasswordContainer'>
            <br></br>
            <h1>Cambiar contraseña</h1>
            <form id='FormProfileContainer' onSubmit={SubmitForm}>
                <div id='ProfileFormPassword'>
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Contraseña anterior"
                        type="password"
                        helperText=""
                        name='password'
                        onChange={onHandleChange}
                    />
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Nueva contraseña"
                        type="password"
                        helperText=""
                        name='newpassword'
                        onChange={onHandleChange}
                    />
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Nueva contraseña"
                        type="password"
                        helperText=""
                        name='newpasswordconfirm'
                        onChange={onHandleChange}
                    />
                    <div id='PasswordError'>
                        {errors.newpassword? <p className='PerfilError'>{errors.newpassword}</p> : null}
                    </div>
                    

                </div>
                <br></br>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    type='submit'
                    id='ButtonPasswordChange'
                //startIcon={<SaveIcon />}
                >
                    Cambiar contraseña
                </Button>
            </form>
        </div >
    )
}



export default FormProfile_password