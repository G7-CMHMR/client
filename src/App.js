import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router'
import { useEffect } from 'react';

import Nav from './components/Utils/Nav/Nav'
import NavBar from './components/Utils/NavBar/NavBar'
import Footer from './components/Utils/footer/Footer'

import Home from './views/Home'
import Categories from './views/Categories'
import Product from './views/Product';

import Profile from './views/Profile';
import Profile_password from './views/Profile_password'
import MyShopping from './views/MyShopping'
import MyFavorites from './views/MyFavorites'
import { MyCart } from './views/MyCart';

import Panel from './views/Panel';

import Login from './views/_Modals/Login/Login';
import Register from './views/_Modals/Register/Register';
import BecomeSeller from './views/_Modals/BecomeSeller/BecomeSeller';
import { attemptVerifyLogin } from './redux/Actions/User/Actions';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import PCBuilder from './views/PCBuilder';
import Quiz from './views/Quiz';
import AdminPanel from './views/AdminPanel';




function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(attemptVerifyLogin());

  }, [dispatch]);

  const stateLogin = useSelector((state) => state.userReducer.loginwindow);
  const stateRegister = useSelector((state) => state.userReducer.registerwindow);
  const stateBeSeller = useSelector((state) => state.userReducer.becomeseller);
  //const userData = useSelector((state) => state.userReducer.userData)
  let cartguest = JSON.parse(localStorage.getItem('cartguest'));
    //console.log(cartguest)
    if(!cartguest) {
        localStorage.setItem("cartguest", JSON.stringify([]));
    } 

  return (
    <div className="App">
      <Nav></Nav>
      <NavBar></NavBar>
      {stateLogin ? <Login /> : null}
      {stateRegister ? <Register /> : null}

      <Route exact path='/confirm-account/:emailToken' component={Home} />
      {stateBeSeller ? <BecomeSeller /> : null}

      <Route exact path='/' component={Home} />
      <Route exact path='/Categorias' component={Categories} />
      <Route path='/Categorias/:categoryName' component={Categories} />
      <Route path='/Buscar/:nombreProducto' component={Categories} />
      <Route path='/Producto/:idProducto' component={Product} />
      <Route exact path='/Ofertas' component={Categories} />

      <Route exact path='/Perfil' component={Profile} />
      <Route exact path='/Perfil/CambiarContraseña' component={Profile_password} />
      <Route exact path='/Compras' component={MyShopping} />
      <Route exact path='/Favoritos' component={MyFavorites} />
      <Route exact path='/Carrito' component={MyCart} />

      <Route exact path='/ArmaTuPc' component={PCBuilder} />
      <Route exact path='/ArmaTuPc/:Brand' component={PCBuilder} />

      <Route exact path='/Panel' component={Panel} />

      <Route exact path='/AdminPanel' component={AdminPanel} />

      <Route exact path='/Quiz' component={Quiz} />

      <Footer></Footer>
      <ToastContainer position="top-center" />

    </div>
  );
}

export default App;
