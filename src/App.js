import './App.css';

import { Route } from 'react-router'

import Home from './views/home/home'
import Home2 from './views/home/home2'
import Nav from './views/_GeneralComponents/Nav/Nav'
import NavBar from './views/_GeneralComponents/NavBar/NavBar'
import Footer from './views/_GeneralComponents/footer/Footer'

function App() {
  return (
    <div className="App">
      
      <Nav></Nav>
      <NavBar></NavBar>

      {/* <Route className='Main' path='/' exact component={Home}></Route> */}
      <Route className='Main' path='/Home' exact component={Home}></Route>
      <Route className='Main' path='/Home2' exact component={Home2}></Route>
      <Footer></Footer>

    </div>
  );
}

export default App;
