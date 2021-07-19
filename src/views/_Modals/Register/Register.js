import React, { useState } from 'react';
//import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleLogin } from "react-google-login";

import { useSelector, useDispatch } from "react-redux";
import clientAxios from '../../../config/axios';

import {changeStateRegisterAction, changeStateLoginAction, attemptRegisterAction, attemptLoginGoogle } from '../../../redux/Actions/User/Actions';

import './Register.css'
const Register = () => {
    //Redux
    const dispatch = useDispatch();
    const stateRegister = useSelector((state) => state.userReducer.registerwindow);
    const stateLogin = useSelector((state) => state.userReducer.loginwindow);
    const error = useSelector((state) => state.userReducer.error)

    const openRegister = () => {
        dispatch(changeStateRegisterAction(!stateRegister))
    }
    const openLogin = () => {
        dispatch(changeStateLoginAction(!stateLogin))
    }
    //UseState
    const [terms, setTerms] = useState(false);
     /* const [errors, setErrors] = useState({
      email: false,
      name: false,
      lastname: false,
      password: false      
    })  */
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
        
        if(password.length < 8){
          
        }


        if(email.trim() === '' || name.trim() === '' || lastname.trim() === '' || password.length < 3) return;
        else if(terms) {
            const tryRegister = {
                email: email,
                name: name,
                lastName: lastname,
                password: password
            }
            dispatch(attemptRegisterAction(tryRegister))
        }
        

    }

    const onSignIn = async (googleUser) => {
      
      var id_token = googleUser.getAuthResponse().id_token;
      
      const googleToken = { id_token }
      
      const { data } = await clientAxios.post('/auth/google', googleToken);
      
      dispatch(attemptLoginGoogle(data))

  }

    /* //FACEBOOK AND GOOGLE RESPONSES
    const responseGoogle = (response) => {
        console.log(response)
    }
    const responseFacebook = (response) => {
        console.log(response)
    } */
    var showError = null;
    var secError = null;

    if(typeof error === 'object' && error !== null){
      if(error.email &&  error.email !== null && error.password && error.password !== null){
        if(error.email &&  error.email !== null){
          showError = error.email
        }
        if(error.password && error.password !== null){
          secError = error.password
        }

      } else {
        if(error.email &&  error.email !== null){
          showError = error.email
        }
        if(error.password && error.password !== null){
          showError = error.password
        }
      }

      
    }else {
      showError = error;
    }

  return (
    <div className="superposition">
      <div id="registerBox" className="animate__animated animate__fadeIn animate_faster">
        <div className="contenedorX">        
          <button id="X" onClick={openRegister}>X</button>
        </div>
        {  showError ?<p className="alert alert-danger">{showError}</p> : null }
        {  secError ?<p className="alert alert-danger">{secError}</p> : null }
        
        <h1 id="register">REGISTRARSE</h1>
        

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
          <div className="containerButtons">
          {/* <FacebookLogin
            appId="548046433216347"
            // autoLoad 
            callback={responseFacebook} 
            render={(renderProps) => (
              <button id="botonFacebook" onClick={renderProps.onClick}>
                f
              </button>
            )}
          /> 
           <GoogleLogin
            clientId="600113776635-fmca3h5j2861mmvp2l75u6hafbop8dvm.apps.googleusercontent.com"
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
            onSuccess={onSignIn}
            // onFailure={responseGoogle} 
            cookiePolicy={"single_host_origin"}
          /> */}
          <GoogleLogin
    clientId="600113776635-fmca3h5j2861mmvp2l75u6hafbop8dvm.apps.googleusercontent.com"
    buttonText="Registrarse con Google"
    onSuccess={onSignIn}
    //onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
        </div>
        </form>
      </div>
    </div>
  );
};

export default Register;