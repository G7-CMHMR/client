import './App.css';

import { Route } from 'react-router'

import Home from './views/home/Home'
import Nav from './views/_GeneralComponents/Nav/Nav'
import NavBar from './views/_GeneralComponents/NavBar/NavBar'
import Footer from './views/_GeneralComponents/footer/Footer'
import Categories from './views/categories/Categories';
import Detail from './views/detail/detail'

function App() {
  return (
    <div className="App">

      <Nav></Nav>
      <NavBar></NavBar>

      <Route path='/' exact component={Home}></Route>
      <Route path='/Categorias' exact component={Categories}></Route>
      <Route path='/Producto' exact component={Detail}></Route>

      <Footer></Footer>

    </div>
  );
}

export default App;
