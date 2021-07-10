import "./Nav.css"
import SearchBar from '../SearchBar/SearchBar'
import { Link } from "react-router-dom"

function Nav() {
    return (
        <div id='ContainerNav'>
            <h2 id='logo'><Link to='/'>CompuMundoHiperMegaRed</Link></h2>
            <SearchBar/>
        </div>
    )
}


export default Nav 