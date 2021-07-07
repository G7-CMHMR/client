import './App.css';

import { Route } from 'react-router'

import Nav from './components/Utils/Nav/Nav'
import NavBar from './components/Utils/NavBar/NavBar'
import Footer from './components/Utils/footer/Footer'

import Home from './views/Home'
import Categories from './views/Categories'
import Product from './views/Product';

function App() {
  return (
    <div className="App">

      <Nav className='nav'></Nav>
      <NavBar></NavBar>

      <Route path='/' exact component={Home}></Route>
      <Route path='/Categorias' exact component={Categories}></Route>
      <Route path='/Producto' exact component={Product}></Route> 

      <Footer></Footer>

    </div>
  );
}

export default App;
