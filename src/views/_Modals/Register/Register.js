import React, { useState } from 'react';
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleLogin } from "react-google-login";

import { useSelector, useDispatch } from "react-redux";

import {changeStateRegisterAction, changeStateLoginAction} from '../../../redux/Actions/User/Actions';

import './Register.css'
const Register = () => {
    //Redux
    const dispatch = useDispatch();
    const stateRegister = useSelector((state) => state.userReducer.registerwindow);
    const stateLogin = useSelector((state) => state.userReducer.loginwindow);

    const openRegister = () => {
        dispatch(changeStateRegisterAction(!stateRegister))
    }
    const openLogin = () => {
        dispatch(changeStateLoginAction(!stateLogin))
    }
    //UseState
    const [terms, setTerms] = useState(false);
    const [data, setData] = useState({
        email:'',
        name:'',
        lastname:'',
        password:''
    });
    const { email, name, lastname, password} = data;
    const onChangeForm = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    //onSubmit
    const submitRegister = e => {
        e.preventDefault();
        //Validation
        
        if(email.trim() === '' ||name.trim() === '' ||lastname.trim() === '' || password.length === 0 ) return;
        else if(terms) {
            const tryRegister = {
                email: email,
                name: name,
                lastname: lastname,
                password: password
            }
            console.log(tryRegister)
        }
        

    }
    //FACEBOOK AND GOOGLE RESPONSES
    const responseGoogle = (response) => {
        console.log(response)
    }
    const responseFacebook = (response) => {
        console.log(response)
    }

  return (
    <div className="superposition">
      <div id="registerBox">
        <div className="contenedorX">
          <button id="X" onClick={openRegister}>X</button>
        </div>
        <h1 id="register">REGISTRARSE</h1>
        <div className="containerButtons">
          <FacebookLogin
            appId="548046433216347"
            /* autoLoad */
            callback={responseFacebook} 
            render={(renderProps) => (
              <button id="botonFacebook" onClick={renderProps.onClick}>
                f
              </button>
            )}
          />
          <GoogleLogin
            clientId="65251733284-bo53rdsnme3vupgk05c1l5v91uof8b8i.apps.googleusercontent.com"
            render={(renderProps) => (
                
              <button
                id="botonGoogle"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                G
              </button>
              
            )}
            buttonText=""
            onSuccess={responseGoogle}
            onFailure={responseGoogle} 
            cookiePolicy={"single_host_origin"}
          />
        </div>

        <form
            onSubmit={submitRegister}
        >
            <div id="containerName">
                <div>
                    <p 
                    className="subtitleName">Nombre</p>
                    <input 
                        name='name' 
                        type="text" 
                        placeholder="Como aparece en tu DNI" 
                        onChange={onChangeForm} 
                        className="inputsRegister" 
                    />
                </div>
                <div>
                    <p 
                        className="subtitleName">Apellido</p>
                    <input 
                        name='lastname' 
                        type="text" 
                        placeholder="Como aparece en tu DNI" 
                        onChange={onChangeForm} 
                        className="inputsRegister" 
                    />
                </div>
                </div>
                <div className="containerColumn"> 
            <div className="containerInput">
          <p 
          className="subtitle">Email</p>
          <input 
            name='email' 
            type="email" 
            placeholder="tunombre@tucorreo.com" 
            onChange={onChangeForm} 
            className="inputsRegister" 
            /></div>


        <div className="containerInput">
          <p className="subtitle">Contraseña</p>
          <input
            onChange={onChangeForm}
            type="password"
            name="password"
            placeholder="Contraseña"
            className="inputsRegister"
          />
          </div>
          </div>
            <input value="terms" type="checkbox" id="checkboxTerms" onChange={() => setTerms(!terms)}/><span>Acepto los terminos y condiciones</span>
          <div className="contenedorLinks">
            
            <a className="links" onClick={openLogin} href="#login">
              ¿Ya tienes cuenta? ¡Logueate!
            </a>
            <br />
          </div>
          <div className="submit">
            <input type="submit" value="REGISTRATE" className="buttonInitiate" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;