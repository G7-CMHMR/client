import React, { useEffect, useState } from 'react';
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleLogin } from "react-google-login";

import { useSelector, useDispatch } from "react-redux";
import clientAxios from '../../../config/axios';

import {changeStateLoginAction, changeStateRegisterAction, attemptLoginAction, attemptLoginGoogle} from '../../../redux/Actions/User/Actions';
import "./Login.css";


const Login = () => {
    //Redux
    const dispatch = useDispatch();    
    const stateLogin = useSelector((state) => state.userReducer.loginwindow); 
    const stateRegister = useSelector((state) => state.userReducer.registerwindow);



  const openRegister = () => {
        dispatch(changeStateRegisterAction(!stateRegister))

    }

    const openLogin = () => {
        dispatch(changeStateLoginAction(!stateLogin))
    }
    //UseState
    const [data, setData] = useState({
        username: '',
        password: ''
    });
    const { username, password} = data;
    const onChangeForm = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    //onSubmit
    const submitLogin = e => {
        e.preventDefault();
        //Validation
        if(username.trim() === '' || password.length === 0) return;
        
        const tryLogin = {
            email: username,
            password: password
        }
        dispatch(attemptLoginAction(tryLogin))

    }
    //FACEBOOK AND GOOGLE RESPONSES
    // const responseGoogle = async (response) => {
    //     console.log(response)
    //     try {
          
    //       const resp = await clientAxios.get('/auth/google', { headers: { 'id_token': response.tokenId }})
    //     } catch (error) {
    //       console.log(error);
          
    //     }
    // }

    const onSignIn = async (googleUser) => {
    
        // var profile = googleUser.getBasicProfile();
        // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        // console.log('Name: ' + profile.getName());
        // console.log('Image URL: ' + profile.getImageUrl());
        // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        
        var id_token = googleUser.getAuthResponse().id_token;
        
        const googleToken = { id_token }
        
        const { data } = await clientAxios.post('/auth/google', googleToken);
        
        dispatch(attemptLoginGoogle(data.name, data.token))

    }
 

    const responseFacebook = (response) => {
        console.log(response)
    }

  return (
    <div className="superposition">
      <div id="loginBox" className="animate__animated animate__fadeIn animate_faster">
        <div className="contenedorX">
          <button id="X" onClick={openLogin}>X</button>
        </div>
        <h1 id="login">Login</h1>
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
            // onFailure={onSignIn} 
            cookiePolicy={"single_host_origin"}
          />
        </div>

        <form
            onSubmit={submitLogin}
        >
          <p className="subtitle">Usuario</p>
          <input name='username' type="text" placeholder="Usuario" onChange={onChangeForm} className="inputslogin" />

          <p className="subtitle">Contraseña</p>
          <input
            onChange={onChangeForm}
            type="password"
            name="password"
            placeholder="Contraseña"
            className="inputslogin"
          />
          <div className="contenedorLinks">
            <a href="#forgetpassword" className="links">
              ¿Has olvidado la contraseña?
            </a>
            <br />
            <a onClick={openRegister} className="links" href="#signup">
              ¿No tienes cuenta? ¡REGISTRATE!
            </a>
            <br />
          </div>
          <div className="submit">
            <input disabled={!username || !password} type="submit" value="INICIAR" className="buttonInitiate" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;