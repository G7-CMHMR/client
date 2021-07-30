import "./Nav.css"
import SearchBar from '../SearchBar/SearchBar'
import { Link } from "react-router-dom"
import Logo from './Logo.png'
function Nav() {
    return (
        <div id='ContainerNav'>
            <Link to='/'><img src={Logo} id='imageNav'></img></Link>
            <h2 ><Link id='logo' to='/'>CompuMundoHiperMegaRed</Link></h2>
            <SearchBar/>
        </div>
    )
}


export default Nav 