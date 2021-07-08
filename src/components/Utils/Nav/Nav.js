import "./Nav.css"
import SearchBar from '../SearchBar/SearchBar'
import { Link } from "react-router-dom"

function Nav() {
    return (
        <div id='ContainerNav'>
            <Link to='/'>aca logo</Link>
            <SearchBar/>
        </div>
    )
}


export default Nav 