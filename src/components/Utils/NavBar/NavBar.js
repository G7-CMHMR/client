import React, { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import './NavBar.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { FaHeart } from 'react-icons/fa'
import { IoCartSharp } from 'react-icons/io5'


import { changeStateLoginAction, changeStateLogin, changeStateRegisterAction, attemptLogoutAction }from '../../../redux/Actions/User/Actions';
import {getCategories} from '../../../redux/Actions/Products/Actions'


function NavBar() {
    const dispatch = useDispatch();
    const stateLogin = useSelector((state) => state.userReducer.loginwindow);
    const username = useSelector((state) => state.userReducer.username);
    const stateRegister = useSelector((state) => state.userReducer.registerwindow);


    const productsReducer = useSelector(state => state.productsReducer)


    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])


    // useEffect(() => {
    //     dispatch(changeStateLogin())
    // },[dispatch])    
    //  const loggedin = useSelector((state) => state.userReducer.loggedin)
    //  const cambiar = () => {
    //      dispatch(changeStateLogin(!loggedin))
    //  }


    const openLogin = () => {
        dispatch(changeStateLoginAction(!stateLogin))

    }
    const openRegister = () => {
        dispatch(changeStateRegisterAction(!stateRegister))
    }

    const logout = () => {
        dispatch(attemptLogoutAction())
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
             {productsReducer.categories.map(element => (
                <NavDropdown.Item href={`/Categorias/${element}`}>{element}</NavDropdown.Item>
             ))//<Link to={`/categorias/${element}`}>
            }
        </NavDropdown> 
            {username ? 
            <Nav.Link href="#panel">PANEL</Nav.Link>
             : 
            <Nav.Link onClick={openLogin}>LOGIN</Nav.Link> 
             }
            {username ?
            <NavDropdown title={username} id="basic-nav-dropdown">
         <NavDropdown.Item href="profile">MI CUENTA </NavDropdown.Item>
         <NavDropdown.Item href="#fav">MIS FAVORITOS </NavDropdown.Item>
         <NavDropdown.Item href="historyshop">HISTORIAL DE COMPRAS </NavDropdown.Item>
         <NavDropdown.Item  onClick={logout}>CERRAR SESIÓN </NavDropdown.Item>
        </NavDropdown>
        :
        <Nav.Link href="#signup" onClick={openRegister}>REGISTRATE</Nav.Link>}

{/* botones para probar si cambia usuario-registrado , no-registrado */}
            {/* {username ? 
            <button onClick={logout}>SALIR</button>   
             : 
             <button onClick={cambiar}>ENTRAR</button>    
             } */}          
        </Nav>
        <Nav.Link href="#cart"><IoCartSharp/></Nav.Link>
        <Nav.Link href="#fav"><FaHeart/></Nav.Link>
    
  </Navbar.Collapse>
</Navbar>

        </div>
    )
}



export default NavBar

//
{/* <NavDropdown title="CATEGORIAS" id="basic-nav-dropdown">
<NavDropdown.Item href="#action/3.1">Equipos y Notebooks</NavDropdown.Item>
<NavDropdown.Item href="#action/3.2">Procesadores y coolers cpus</NavDropdown.Item>
<NavDropdown.Item href="#action/3.3">Memorias Ram</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">Almacenamiento</NavDropdown.Item>
<NavDropdown.Item href="#action/3.5">Placas de video</NavDropdown.Item>
<NavDropdown.Item href="#action/3.6">Gabinetes </NavDropdown.Item>
<NavDropdown.Item href="#action/3.7">Monitores </NavDropdown.Item>
<NavDropdown.Item href="#action/3.8">Teclados y mouse </NavDropdown.Item>
<NavDropdown.Item href="#action/3.9">Audio </NavDropdown.Item>
</NavDropdown>  */}