import './CategoryFilters.css'
//import TextField from '@material-ui/inputs/TextField'
import { getProductsFilter, getProductsOfCategory } from '../../../redux/Actions/Products/Actions'
import { useEffect, useState, setState, React } from 'react'
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

function CategoryFilters(props) {

    const { categoryName } = useParams()

    const productsReducer = useSelector(state => state.productsReducer)
    const userReducer = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsOfCategory(categoryName))
    }, [dispatch, categoryName])

    const [loading, setLoading] = useState(false)

    const [input, setInput] = useState({
        categoryName: categoryName,
        type: '',
        shipping: '',
        condition: '',
        brand: '',
        MinPrice: '',
        MaxPrice: '',
    })

    function onChangeFilters(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    function onChangePrice(e){
        e.preventDefault()

        setInput({
            ...input,
            MinPrice: e.target[0].value,
            MaxPrice: e.target[2].value,
        })
    }

    useEffect(() => {
        dispatch(getProductsFilter(input.categoryName, input.type, input.shipping, input.condition, input.brand, input.MinPrice, input.MaxPrice))
    }, [input.categoryName, input.type, input.shipping, input.condition, input.brand, input.MinPrice, input.MaxPrice])


    let productTypeArray = []
    let countingOfProducts = {}

    let productConditionArray = []
    let countingOfProductsCondition = {}

    let productBrandsArray = []
    let countingOfProductsBrand = {}

    let countingOfProductsShipping = 0
    productsReducer.products.forEach((element) => {

        if (!productTypeArray.includes(element.type)) {
            productTypeArray.push(element.type)
            countingOfProducts[element.type] = 0
        }

        if (!productConditionArray.includes(element.status)) {
            productConditionArray.push(element.status)
            countingOfProductsCondition[element.status] = 0
        }

        if (!productBrandsArray.includes(element.brand)) {
            productBrandsArray.push(element.brand)
            countingOfProductsBrand[element.brand] = 0
        }

        if (element.delivery == true) {
            countingOfProductsShipping++;
        }

        if (productTypeArray.includes(element.type)) {
            countingOfProducts[element.type] += 1
        }
        if (productConditionArray.includes(element.status)) {
            countingOfProductsCondition[element.status] += 1
        }
        if (productBrandsArray.includes(element.brand)) {
            countingOfProductsBrand[element.brand] += 1
        }
    })

    return (
        <div id="CategoryFilters">
            {console.log(countingOfProducts)}
            <div id='CategoryAndResults'>
                <br></br>
                <h2>{categoryName}</h2>
                <h5 id='Resultados'>{productsReducer.products.length} resultados</h5>
            </div>
            <div id='ContainerGroupCategory'>
                <div id='CategoryType'>
                    <h4>Tipos:</h4>
                    <ul id='ListOfTypes'>
                        {
                            productTypeArray ? productTypeArray.map((element) => {
                                return (
                                    <li>
                                        <Link to={`/Categorias/${categoryName}/${element}`}><button key={element} className='optionFilter' name='type' value={element} onClick={(e) => onChangeFilters(e)}>{element} ({countingOfProducts[element]})</button></Link>
                                    </li>
                                )
                            }) : <div><h1>LOADING</h1></div>
                        }
                    </ul>
                </div>
                <br></br>
                <div id='CategoryShipping'>
                    <h4>Costo de Envio:</h4>
                    <ul id='ListOfTypes'>
                        <li>
                            <button name='shipping' className='optionFilter' value={true} onClick={onChangeFilters}>Envio Gratis ({countingOfProductsShipping})</button>
                        </li>
                    </ul>
                </div>
                <br></br>
                <div id='CategoryCondition'>
                    <h4>Condición:</h4>
                    <ul>
                        {
                            productConditionArray ? productConditionArray.map((element) => {
                                return (
                                    <li>
                                        <Link to={`/Categorias/${categoryName}/${element}`}><button key={element} className='optionFilter' name='condition' value={element} onClick={(e) => onChangeFilters(e)}>{element} ({countingOfProductsCondition[element]})</button></Link>
                                    </li>
                                )
                            }) : <div><h1>LOADING</h1></div>
                        }
                    </ul>
                </div>
                <br></br>
                <div id='CategoryPrice'>
                    <ul>
                        <h4>Rango de precio:</h4>
                        <div id='formPrice'>
                        <form onSubmit={onChangePrice} noValidate autoComplete="off" >
                            <TextField id="outlined-basic" label="Mínimo" variant="outlined" />
                            <TextField id="outlined-basic" label="Maximo" variant="outlined" />
                            <Button id='ButtonPrice' type='submit' variant="contained" color="primary">˃</Button>
                        </form>
                        </div>
                    </ul>
                </div>
                <div id='CategoryBrand'>
                    <h4>Marcas:</h4>
                    <ul>
                        {
                            productBrandsArray ? productBrandsArray.map((element) => {
                                return (
                                    <li>
                                        <Link to={`/Categorias/${categoryName}/${element}`}><button key={element} className='optionFilter' name='brand' value={element} onClick={(e) => onChangeFilters(e)}>{element} ({countingOfProductsBrand[element]})</button></Link>
                                    </li>
                                )
                            }) : <div><h1>LOADING</h1></div>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}



export default CategoryFilters