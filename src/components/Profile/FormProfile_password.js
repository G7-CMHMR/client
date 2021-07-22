import './FormProfile_pass.css'
import { TextField, Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';

import {changePasswordOfUser} from '../../redux/Actions/User/Actions'

import { Link } from 'react-router-dom'

function FormProfile_password() {

    //const userReducer = useSelector (state => state.userReducer.user)
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        oldPassword: '',
        newPassword: '',
        newPasswordConfirm: '',
    })

    const [errors, setErrors] = useState({
        oldPassword: '',
        newPassword: '',
        newPasswordConfirm: '',
    })

    useEffect(() => {
        validate()
    }, [input.newPassword, input.newPasswordConfirm])


    function onHandleChange(e) {

        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

    }

    function validate() {
        if (input.newPassword.length > 8 || input.newPassword < 20){
            if (input.newPassword !== input.newPasswordConfirm) {
                setErrors({...errors, newPassword: 'Las nuevas contraseñas no coinciden'})
            }else setErrors({ ...errors, newPassword: '' })
        }else{setErrors({...errors, newPassword: 'La contraseña debe tener entre 8 y 20 caracteres'})}

    }

    function SubmitForm(e) {
        e.preventDefault()

        if(errors.oldPassword == '' & errors.newPassword == '' & errors.newPasswordConfirm == ''){
            dispatch(changePasswordOfUser(input))
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
                        name='oldPassword'
                        onChange={onHandleChange}
                    />
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Nueva contraseña"
                        type="password"
                        helperText=""
                        name='newPassword'
                        onChange={onHandleChange}
                    />
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Nueva contraseña"
                        type="password"
                        helperText=""
                        name='newPasswordConfirm'
                        onChange={onHandleChange}
                    />
                    <div id='PasswordError'>
                        {errors.newPassword? <p className='PerfilError'>{errors.newPassword}</p> : null}
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