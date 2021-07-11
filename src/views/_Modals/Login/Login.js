import React, { useState } from 'react';
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleLogin } from "react-google-login";

import { useSelector, useDispatch } from "react-redux";

import {changeStateLoginAction, changeStateRegisterAction, attemptLoginAction} from '../../../redux/Actions/User/Actions';
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
        // if(username.trim() === '' || password.length === 0) return;
        
        const tryLogin = {
            email: username,
            password: password
        }
        dispatch(attemptLoginAction(tryLogin))

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
      <div id="loginBox">
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
            <input type="submit" value="INICIAR" className="buttonInitiate" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;