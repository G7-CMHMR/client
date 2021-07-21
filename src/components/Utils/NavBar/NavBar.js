import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import React, { useEffect } from 'react';
import Badge from '@material-ui/core/Badge';
import './NavBar.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { FaHeart } from 'react-icons/fa'
import { IoCartSharp } from 'react-icons/io5'


import { changeStateLoginAction, changeStateLogin, changeStateRegisterAction, attemptLogoutAction, becomeSellerAction } from '../../../redux/Actions/User/Actions';
import { getCategories } from '../../../redux/Actions/Products/Actions'
import { getCart } from '../../../redux/Actions/Cart/Actions';

import { LinkContainer } from 'react-router-bootstrap';


function NavBar() {

    const dispatch = useDispatch();
    const stateLogin = useSelector((state) => state.userReducer.loginwindow);

    const userData = useSelector(state => state.userReducer.userData)
    const stateRegister = useSelector((state) => state.userReducer.registerwindow);
    const stateBeSeller = useSelector((state) => state.userReducer.becomeseller);

    const cart = useSelector(state => state.cartReducer.cart)
    const productsReducer = useSelector(state => state.productsReducer)





    useEffect(() => {
        dispatch(getCart(userData.id))
        dispatch(getCategories())
        //eslint-disable-next-line
    }, [])


    // useEffect(() => {
    //     dispatch(changeStateLogin())
    // },[dispatch])    
    //  const loggedin = useSelector((state) => state.userReducer.loggedin)
    //  const cambiar = () => {
    //      dispatch(changeStateLogin(!loggedin))
    //  }
    const openBeSeller = () => {
        dispatch(becomeSellerAction(!stateBeSeller))
    }

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
                        <LinkContainer to='/Ofertas'><Nav.Link>OFERTAS</Nav.Link></LinkContainer>
                        <LinkContainer to='/Categorias/PC'><Nav.Link>PC ARMADAS</Nav.Link></LinkContainer>
                        <NavDropdown title="CATEGORIAS" id="basic-nav-dropdown">
                            {productsReducer.categories.map(element => (
                                <LinkContainer to={`/Categorias/${element.title}`}>
                                    <NavDropdown.Item>{element.title}</NavDropdown.Item>
                                </LinkContainer>
                            ))//<Link to={`/categorias/${element}`}>
                            }
                        </NavDropdown>

                        <div id='UserPanelNavBar'>
                            {userData.isSeller ?

                                <LinkContainer to="/Panel"><Nav.Link href="">PANEL</Nav.Link></LinkContainer>
                                :
                                null
                            }

                            {userData.name ? null : <Nav.Link onClick={openLogin}>LOGIN</Nav.Link>}

                            {userData.name ?
                                <NavDropdown title={userData.name} id="NavDropDownUser">
                                    <LinkContainer to="/Perfil"><NavDropdown.Item >MI CUENTA</NavDropdown.Item></LinkContainer>
                                    <LinkContainer to="/Favoritos"><NavDropdown.Item >MIS FAVORITOS </NavDropdown.Item></LinkContainer>
                                    <LinkContainer to="/Compras"><NavDropdown.Item >HISTORIAL DE COMPRAS </NavDropdown.Item></LinkContainer>
                                    {userData.isSeller ? null : <NavDropdown.Item href="" onClick={openBeSeller}>SER VENDEDOR </NavDropdown.Item>}
                                    <NavDropdown.Item href="" onClick={logout}>CERRAR SESIÓN </NavDropdown.Item>
                                </NavDropdown>
                                :
                                <Nav.Link href="" onClick={openRegister}>REGISTRATE</Nav.Link>}
                        </div>
                        {/* botones para probar si cambia usuario-registrado , no-registrado */}
                        {/* {username ? 
            <button onClick={logout}>SALIR</button>   
             : 
             <button onClick={cambiar}>ENTRAR</button>    
             } */}

                    </Nav>
                    <div id='CarritoAndFavorito'>
                        <LinkContainer to="/Carrito">
                            <Nav.Link >
                                <Badge badgeContent={
                                    cart.length
                                } color="error">
                                    <IoCartSharp />
                                </Badge>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/Favoritos'><Nav.Link href=''><FaHeart /></Nav.Link></LinkContainer>
                    </div>
                </Navbar.Collapse>

            </Navbar>

        </div >
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