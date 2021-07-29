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
import { getCart, getCartNotLogged, checkCartLocal } from '../../../redux/Actions/Cart/Actions';

import { LinkContainer } from 'react-router-bootstrap';

import { client } from '../../../config/url'

function NavBar() {

    const dispatch = useDispatch();
    const stateLogin = useSelector((state) => state.userReducer.loginwindow);

    const userData = useSelector(state => state.userReducer.userData)
    const stateRegister = useSelector((state) => state.userReducer.registerwindow);
    const stateBeSeller = useSelector((state) => state.userReducer.becomeseller);
    var userId = userData.id
    const cart = useSelector(state => state.cartReducer.cart)
    const productsReducer = useSelector(state => state.productsReducer)


    useEffect(() => {
        if (userId) {
            dispatch(getCart(userId))
        } else {
            dispatch(getCartNotLogged())
        }
        dispatch(getCategories())
        //eslint-disable-next-line
    }, [dispatch, userId])

    const openBeSeller = () => {
        dispatch(becomeSellerAction(!stateBeSeller))
    }

    const openLogin = () => {
        dispatch(changeStateLoginAction(!stateLogin))

    }
    const openRegister = () => {
        dispatch(changeStateRegisterAction(!stateRegister))
    }

    const redirectToHome = () => {
        window.location.href = client.urlDevelop;
    }

    const logout = () => {
        dispatch(attemptLogoutAction())
        redirectToHome();
    }



    // BackgroundColor #14213D;
    return (

        <div className="ContainerNavBar">
            <Navbar id='backgroundColor' expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav id="navcontainer" className="mr-auto">
                        <div id='OfertasPCyCategorias'>
                            <LinkContainer key="offers" to='/Ofertas'><Nav.Link>OFERTAS</Nav.Link></LinkContainer>
                            <LinkContainer key="builded" to='/Categorias/PC'><Nav.Link>PC ARMADAS</Nav.Link></LinkContainer>
                            <NavDropdown key="categories" title="CATEGORIAS" id="basic-nav-dropdown">

                                {productsReducer.categories.map(element => (

                                    <LinkContainer key={element.title} to={`/Categorias/${element.title}`}>
                                        <NavDropdown.Item>{element.title}</NavDropdown.Item>
                                    </LinkContainer>
                                ))//<Link to={`/categorias/${element}`}>
                                }
                            </NavDropdown>
                        </div>
                        <div id='UserPanelNavBar'>
                            {/* aca vendria el condicional isAdmin  */}
                            <LinkContainer to="/AdminPanel"><Nav.Link href="">ADMIN </Nav.Link></LinkContainer>

                            {userData.isSeller ?

                                <LinkContainer to="/Panel"><Nav.Link href="">PANEL</Nav.Link></LinkContainer>
                                :
                                null
                            }

                            {userData.name ? null : <Nav.Link onClick={openLogin}>LOGIN</Nav.Link>}

                            {userData.name ?
                                <NavDropdown title={userData.name} id="NavDropDownUser">
                                    <LinkContainer to="/Perfil" key="profile"><NavDropdown.Item >MI CUENTA</NavDropdown.Item></LinkContainer>
                                    <LinkContainer to="/Favoritos" key="favorites"><NavDropdown.Item >MIS FAVORITOS </NavDropdown.Item></LinkContainer>
                                    <LinkContainer to="/Compras" key="sells"><NavDropdown.Item >HISTORIAL DE COMPRAS </NavDropdown.Item></LinkContainer>
                                    {userData.isSeller ? null : <NavDropdown.Item key="isSeller" href="" onClick={openBeSeller}>SER VENDEDOR </NavDropdown.Item>}
                                    <NavDropdown.Item key="logout" href="" onClick={logout}>CERRAR SESIÓN </NavDropdown.Item>
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
                                    cart ? cart.length : 0
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