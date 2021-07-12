import Link from 'react-router-dom'
import './CategoryFilters.css'
//import TextField from '@material-ui/inputs/TextField'
import { getProductsFilter, getProductsOfCategory } from '../../../redux/Actions/Products/Actions'
import {useEffect, useState, React} from 'react'
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';

function CategoryFilters(props) {

    const { categoryName } = useParams()

    const productsReducer = useSelector (state => state.productsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsOfCategory(categoryName))
	}, [dispatch, categoryName])


    var CategoriaTest = {
        resultados: 24,
        Tipos: [],
        CostoDeEnvio: 'gratis',
        Condiciones: [["Nuevo"], ['Usado'], ['Reacondicionado']],
        Brands: []
    }

    function onChangeFilters (e){
        alert(e.target.name)
    }
    


    return (
        <div id="CategoryFilters">
            <div id='CategoryAndResults'>
                {console.log(productsReducer)}
                <br></br>
                <h2>{categoryName}</h2>
                <h5 id='Resultados'>{productsReducer.products.length} resultados</h5>
            </div>
            <div id='ContainerGroupCategory'>
                <div id='CategoryType'>
                    <h4>Tipos:</h4>
                    <ul>
                        <h5 name='Hola' onClick={onChangeFilters}>{CategoriaTest.Tipos[0]}</h5>
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