import React, { useDispatch, useSelector } from 'react-redux';

import './NavBar.css'
import {Navbar ,Nav, NavDropdown} from 'react-bootstrap'
import {FaHeart} from 'react-icons/fa'
import {IoCartSharp} from 'react-icons/io5'

import { changeStateLoginAction, changeStateRegisterAction } from '../../../redux/Actions/User/Actions';

function NavBar() {
    const dispatch = useDispatch();
    const stateLogin = useSelector((state) => state.userReducer.loginwindow); 
    const stateRegister = useSelector((state) => state.userReducer.registerwindow);

    const openLogin = () => {
        dispatch(changeStateLoginAction(!stateLogin))
    }
    const openRegister = () => {
        dispatch(changeStateRegisterAction(!stateRegister))
    }

    return (
    <div className="ContainerNavBar">
       <Navbar bg="light" expand="lg">
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
         <Nav.Link href="#login" onClick={openLogin}>LOGIN</Nav.Link>
         <Nav.Link href="#signup" onClick={openRegister}>REGISTRATE</Nav.Link>
         <Nav.Link href="#panel">PANEL</Nav.Link>
         <NavDropdown title="RAUL" id="basic-nav-dropdown">
         <NavDropdown.Item href="profile">MI CUENTA </NavDropdown.Item>
         <NavDropdown.Item href="#fav">MIS FAVORITOS </NavDropdown.Item>
         <NavDropdown.Item href="historyshop">HISTORIAL DE COMPRAS </NavDropdown.Item>
         <NavDropdown.Item href="#signout">CERRAR SESIÓN </NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Nav.Link href="#cart"><IoCartSharp/></Nav.Link>
        <Nav.Link href="#fav"><FaHeart/></Nav.Link>
    
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}



export default NavBar