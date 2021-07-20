import './CategoryFilters.css'
//import TextField from '@material-ui/inputs/TextField'
import { getProductsFilter, getProductsOfCategory } from '../../../redux/Actions/Products/Actions'
import { useEffect, useState, setState, React } from 'react'
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';




function CategoryFilters(props) {
    const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
        margin: theme.spacing(0.5),
        },
    },
    }));
    const classes = useStyles();

    const handleDeleteType = () => {
        setVisible({
            ...visible,
            'type':false
        })
        setInput({
            ...input,
            'type': '',
        })
    }
    const handleDeleteCondition = () => {
        setVisible({
            ...visible,
            'condition':false
        })
        setInput({
            ...input,
            'condition': '',
        })
    }
    const handleDeleteShipping = () => {
        setVisible({
            ...visible,
           'shipping':false
        })
        setInput({
            ...input,
            'shipping': '',
        })
    }
    const handleDeleteBrand = () => {
        setVisible({
            ...visible,
            'brand':false
        })
        setInput({
            ...input,
            'brand': '',
        })
    }
    const { categoryName } = useParams()
    const productsReducer = useSelector(state => state.productsReducer)
    const userReducer = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsOfCategory(categoryName))
    }, [dispatch, categoryName])

    const [loading, setLoading] = useState(false)
    const [visible,setVisible] = useState({
        type:false,
        shipping:false,
        condition:false,
        brand:false
    })
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
        setVisible({
            ...visible,
            [e.target.name]:true
        })
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
    }, [dispatch, input.categoryName, input.type, input.shipping, input.condition, input.brand, input.MinPrice, input.MaxPrice])


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
            <div>
                { visible.type?<Chip id='type' name="type" label={input.type} onDelete={handleDeleteType} variant="outlined" />:<p></p>}
                { visible.shipping?<Chip label="Envio Gratis" onDelete={handleDeleteShipping} variant="outlined" />:<p></p>}
                { visible.condition?<Chip label={input.condition} onDelete={handleDeleteCondition} variant="outlined" />:<p></p>}
                { visible.brand?<Chip label={input.brand} onDelete={handleDeleteBrand} variant="outlined" />:<p></p>}
            </div>
            <div id='ContainerGroupCategory'>
                {!visible.type ? 
                <div id='CategoryType'>
                    <h4>Tipos:</h4>
                    <ul id='ListOfTypes'>
                    
                        {
                            productTypeArray ? productTypeArray.map((element) => {
                                return (
                                    <li>
                                        <Link to={`/Categorias/${categoryName}/${element}`}>
                                            <button key={element} className='optionFilter' 
                                            name='type' value={element} onClick={(e) => 
                                            onChangeFilters(e)}>
                                                {element} ({countingOfProducts[element]})
                                                </button></Link>
                                    </li>
                                )
                            }) : <div><h1>LOADING</h1></div> 
                        }

                    </ul>
                </div>: <p></p>}
                <br></br>
                {!visible.shipping ?
                <div id='CategoryShipping'>
                    <h4>Costo de Envio:</h4>
                    <ul id='ListOfTypes'>
                        <li>
                            <button name='shipping' className='optionFilter' value={true} onClick={onChangeFilters}>Envio Gratis ({countingOfProductsShipping})</button>
                        </li>
                    </ul>
                </div> : <p></p>}
                <br></br>
                {!visible.condition ?
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
                </div> : <p></p>}
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
                {!visible.brand ?
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
                </div>: <p></p>}
            </div>
        </div>
    )
}



export default CategoryFilters