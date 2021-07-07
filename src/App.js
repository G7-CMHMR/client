import './App.css';

import { Route } from 'react-router'

import Home from './views/home/home'
import Home2 from './views/home/home2'
import Nav from './views/_GeneralComponents/Nav/Nav'
import NavBar from './views/_GeneralComponents/NavBar/NavBar'
import Footer from './views/_GeneralComponents/footer/Footer'
import Categories from './views/categories/Categories';

function App() {
  return (
    <div className="App">

      <Nav></Nav>
      <NavBar></NavBar>

      <Route path='/' exact component={Home}></Route>
      <Route path='/Categorias' exact component={Categories}></Route>
      <Route path='/Home2' exact component={Home2}></Route>

      <Footer></Footer>

    </div>
  );
}

export default App;
