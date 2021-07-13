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

import Login from './views/_Modals/Login/Login';
import Register from './views/_Modals/Register/Register';
import { attemptVerifyLogin } from './redux/Actions/User/Actions';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {

      dispatch(attemptVerifyLogin());
  
  }, [dispatch]);

  const stateLogin = useSelector((state) => state.userReducer.loginwindow); 
  const stateRegister = useSelector((state) => state.userReducer.registerwindow);
  
  return (
    <div className="App">
      <Nav></Nav>
      <NavBar></NavBar>
      {stateLogin? <Login /> :null }
      {stateRegister? <Register /> :null }
      <Route exact path='/' component={Home}/>
      <Route exact path='/Categorias' component={Categories}/>
      <Route path='/Categorias/:categoryName' component={Categories}/>
      <Route path='/Producto/:idProducto' component={Product}/>

      <Footer></Footer>
      <ToastContainer position="top-center" /> 
      
    </div>
  );
}

export default App;
