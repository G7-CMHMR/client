import Link from 'react-router-dom'
import './CategoryFilters.css'
//import TextField from '@material-ui/inputs/TextField'
import { getAllProducts, getProductDetail } from '../../../redux/Actions/Products/Actions'
import {useEffect, useState} from 'react'

function CategoryFilters(props) {

    useEffect(() => {  
        // props.getAllProducts() 
        // props.getProductDetail()
    }, []) 


    const [input, setInput] = useState({
        categoryName: '',
        products: '',
        filtroPrecio: '',

    })
    

    var CategoriaTest = {
        Categoria: "Procesadores",
        resultados: 24,
        Tipos: ['Socket AM2', 'Socket AM3', 'Socket AM4', 'Socket 1200'],
        CostoDeEnvio: 'gratis',
        Condiciones: [["Nuevo"], ['Usado'], ['Reacondicionado']],
        Brands: [["AMD"], ['INTEL']]
    }

    function Alert (e){
        alert(e.target.name)
    }
    


    return (
        <div id="CategoryFilters">
            <div id='CategoryAndResults'>
                <br></br>
                <h2>{CategoriaTest.Categoria}</h2>
                <h5 id='Resultados'>{CategoriaTest.resultados} resultados</h5>
            </div>
            <div id='ContainerGroupCategory'>
                <div id='CategoryType'>
                    <h4>Tipos:</h4>
                    <ul>
                        <h5 name='Hola' onClick={Alert}>{CategoriaTest.Tipos[0]}</h5>
                        <h5>{CategoriaTest.Tipos[1]}</h5>
                    </ul>
                </div>
                <div id='CategoryShipping'>
                    <ul>
                        <h4>Costo de Envio:</h4>
                        <h5>{CategoriaTest.CostoDeEnvio}</h5>
                    </ul>
                </div>
                <div id='CategoryCondition'>
                    <ul>
                        <h4>Condición:</h4>
                        <h5>{CategoriaTest.Condiciones[0]}</h5>
                        <h5>{CategoriaTest.Condiciones[1]}</h5>
                        <h5>{CategoriaTest.Condiciones[2]}</h5>
                    </ul>
                </div>
                <div id='CategoryPrice'>
                    <ul>
                        <h4>Rango de precio:</h4>
                        {/* <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Standard" />
                        <TextField id="filled-basic" label="Filled" variant="filled" />
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </form> */}
                    </ul>
                </div>
                <div id='CategoryBrand'>
                    <ul>
                        <h4>Marcas:</h4>
                        <h5>{CategoriaTest.Brands[0]}</h5>
                        <h5>{CategoriaTest.Brands[1]}</h5>
                    </ul>
                </div>
            </div>
        </div>
    )
}



export default CategoryFilters