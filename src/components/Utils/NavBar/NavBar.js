import React, { useDispatch, useSelector } from 'react-redux';

import './NavBar.css'
import {Navbar ,Nav, NavDropdown} from 'react-bootstrap'
import {FaHeart} from 'react-icons/fa'
import {IoCartSharp} from 'react-icons/io5'

// import { changeStateLoginAction, changelogin, changeStateRegisterAction } from '../../../redux/Actions/User/Actions';
import { changeStateLoginAction,  changeStateRegisterAction } from '../../../redux/Actions/User/Actions';
import { useEffect } from 'react';

function NavBar() {
    const dispatch = useDispatch();
    const stateLogin = useSelector((state) => state.userReducer.loginwindow); 
    const stateRegister = useSelector((state) => state.userReducer.registerwindow);

    // //prueba
    // useEffect(() => {
    //     dispatch(changelogin())
    // },[dispatch])    
    //  const loggedin = useSelector((state) => state.userReducer.loggedin)
    //  const cambiar = () => {
    //      dispatch(changelogin(!loggedin))
    //  }


    const openLogin = () => {
        dispatch(changeStateLoginAction(!stateLogin))
    }
    const openRegister = () => {
        dispatch(changeStateRegisterAction(!stateRegister))
    }
    // BackgroundColor #14213D;
    return (
    <div className="ContainerNavBar">
       <Navbar id='backgroundColor' expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
        <Nav id="navcontainer" className="mr-auto">
         <Nav.Link href="#link">OFERTAS</Nav.Link>
         <Nav.Link href="#link2">PC ARMADAS</Nav.Link>
         <NavDropdown title="CATEGORIAS" id="basic-nav-dropdown">
             <NavDropdown.Item href="#action/3.1">Equipos y Notebooks</NavDropdown.Item>
             <NavDropdown.Item href="#action/3.2">Procesadores y coolers cpus</NavDropdown.Item>
             <NavDropdown.Item href="#action/3.3">Memorias Ram</NavDropdown.Item>
             <NavDropdown.Item href="#action/3.4">Almacenamiento</NavDropdown.Item>
             <NavDropdown.Item href="#action/3.5">Placas de video</NavDropdown.Item>
             <NavDropdown.Item href="#action/3.6">Gabinetes </NavDropdown.Item>
             <NavDropdown.Item href="#action/3.7">Monitores </NavDropdown.Item>
             <NavDropdown.Item href="#action/3.8">Teclados y mouse </NavDropdown.Item>
             <NavDropdown.Item href="#action/3.9">Audio </NavDropdown.Item>
        </NavDropdown> 

        {/* se va a tener que cambiar el estado loggein por el que corresponda */}
            {/*{loggedin === true ? */}
            {stateLogin === true ? 
            <Nav.Link href="#panel">PANEL</Nav.Link>
             : 
            <Nav.Link href="#login" onClick={openLogin}>LOGIN</Nav.Link> 
             }
            {/*{loggedin === true ?*/}
            {stateLogin === true ?
            <NavDropdown title="RAUL" id="basic-nav-dropdown">
         <NavDropdown.Item href="profile">MI CUENTA </NavDropdown.Item>
         <NavDropdown.Item href="#fav">MIS FAVORITOS </NavDropdown.Item>
         <NavDropdown.Item href="historyshop">HISTORIAL DE COMPRAS </NavDropdown.Item>
         {/*<NavDropdown.Item href="#signout" onClick={cambiar}>CERRAR SESIÓN </NavDropdown.Item>*/}
         <NavDropdown.Item href="#signout" onClick={changeStateLoginAction}>CERRAR SESIÓN </NavDropdown.Item>
        </NavDropdown>
        :
        <Nav.Link href="#signup" onClick={openRegister}>REGISTRATE</Nav.Link>}

{/* botones para probar si cambia usuario-registrado , no-registrado */}
            {/*{loggedin === true ? */}
{/*            {stateLogin === true ? 
            <button onClick={cambiar}>SALIR</button>   
             : 
             <button onClick={cambiar}>ENTRAR</button>    
             }*/}
          
        </Nav>
        <Nav.Link href="#cart"><IoCartSharp/></Nav.Link>
        <Nav.Link href="#fav"><FaHeart/></Nav.Link>
    
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}



export default NavBar