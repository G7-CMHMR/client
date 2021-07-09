import './App.css';
import { useSelector } from 'react-redux';
import { Route } from 'react-router'

import Nav from './components/Utils/Nav/Nav'
import NavBar from './components/Utils/NavBar/NavBar'
import Footer from './components/Utils/footer/Footer'

import Home from './views/Home'
import Categories from './views/Categories'
import Product from './views/Product';

import Login from './views/_Modals/Login/Login';
import Register from './views/_Modals/Register/Register';

function App() {

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
      <Route exact path='/Producto' component={Product}/>

      <Footer></Footer>

    </div>
  );
}

export default App;
