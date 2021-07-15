//Card dentro de My producst en PAnel
import './Menu.css'

import { Link } from 'react-router-dom'

function Menu() {
    return(
        <div id='PanelContainer'>
            <Link to='/Panel'>Panel</Link>
            <Link to='/Panel/Publicaciones'>Publicaciones</Link>
            <Link to='/Panel/Productos'>Productos</Link>
            <Link to='/Panel/CrearProducto'>CrearProducto</Link>
            <Link to='/Panel/Ventas'>Ventas</Link>
            <Link to='/Panel/Preguntas'>Preguntas</Link>
        </div>
    )
}



export default Menu