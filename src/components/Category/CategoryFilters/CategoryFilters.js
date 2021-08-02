import './CategoryFilters.css'
//import TextField from '@material-ui/inputs/TextField'
import { getProductsFilter, getProducts, getProductsOffer, setProductsFilter } from '../../../redux/Actions/Products/Actions'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

let addCommas = function (nStr) {
    nStr += '';
    let x = nStr.split('.');
    let x1 = x[0];
    let x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
}


function CategoryFilters(props) {
    const handleDeleteType = () => {
        setVisible({
            ...visible,
            'type': false
        })
        setInput({
            ...input,
            'type': '',
        })

    }
    const handleDeleteCondition = () => {
        setVisible({
            ...visible,
            'status': false
        })
        setInput({
            ...input,
            'status': '',
        })

    }
    const handleDeleteShipping = () => {
        setVisible({
            ...visible,
            'delivery': false
        })
        setInput({
            ...input,
            'delivery': '',
        })

    }
    const handleDeleteBrand = () => {
        setVisible({
            ...visible,
            'brand': false
        })
        setInput({
            ...input,
            'brand': '',
        })

    }

    const { categoryName } = useParams()
    const { nombreProducto } = useParams()
    let offer = false;
    if (!categoryName && !nombreProducto) { offer = true }

    const productsReducer = useSelector(state => state.productsReducer)
    const userReducer = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState({
        type: false,
        delivery: false,
        status: false,
        brand: false
    })

    const [input, setInput] = useState({
        categoryName: categoryName,
        type: '',
        delivery: '',
        status: '',
        brand: '',
        MinPrice: '',
        MaxPrice: '',
    })

    function onChangeFilters(e) {
        setVisible({
            ...visible,
            [e.target.name]: true
        })
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    function onChangePrice(e) {
        e.preventDefault()
        setInput({
            ...input,
            MinPrice: e.target[0].value,
            MaxPrice: e.target[2].value,
        })
    }

    function limpiarFiltros() {
        setInput({
            categoryName: categoryName,
            type: '',
            delivery: '',
            status: '',
            brand: '',
            MinPrice: '',
            MaxPrice: '',
        })
        setVisible({
            type: false,
            delivery: false,
            status: false,
            brand: false
        })
    }

    useEffect(() => {
        limpiarFiltros()
    }, [categoryName])


    useEffect(() => {
        if (categoryName) {
            if (input.categoryName != categoryName) alert('HOLA')
            dispatch(getProductsFilter(input.categoryName, input.type, input.delivery, input.status, input.brand, input.MinPrice, input.MaxPrice));
            //input.categoryName != categoryName?limpiarFiltros():console.log('')
        }
        if (nombreProducto || offer) {
            if (nombreProducto) { dispatch(getProducts(nombreProducto, input)) }
            if (offer) { dispatch(getProductsOffer(input)) }
        }
    }, [dispatch, input.categoryName, input.type, input.delivery, input.status, input.brand, input.MinPrice, input.MaxPrice])


    let productTypeArray = []
    let countingOfProducts = {}

    let productConditionArray = []
    let countingOfProductsCondition = {}

    let productBrandsArray = []
    let countingOfProductsBrand = {}

    let countingOfProductsShipping = 0
    let PrecioMinimo = 9999999;
    let PrecioMaximo = 0;
    productsReducer.products.forEach((element) => {
        
        if (element.discount > 0) {
            console.log((element.price * element.discount) / 100)
            if ((element.price - ((element.price * element.discount) / 100) > PrecioMaximo)) { PrecioMaximo = (element.price * element.discount) / 100 }
        }

        if (element.discount == 0) {
            console.log(element.price)
            if (element.price > PrecioMaximo) { PrecioMaximo = element.price }
        }


        if (element.price < PrecioMinimo) { PrecioMinimo = element.price }

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
            {//console.log(countingOfProducts)
            }
            <div id='CategoryAndResults'>
                <br></br>
                <h2>{categoryName ? categoryName : nombreProducto ? 'Resultados:' : 'Ofertas'}</h2>
                <h5 id='Resultados'>{productsReducer.products.length} resultados</h5>
            </div>
            <div>
                {visible.type ? <Chip id='type' name="type" label={input.type} onDelete={handleDeleteType} variant="outlined" /> : <p></p>}
                {visible.delivery ? <Chip label="Envio Gratis" onDelete={handleDeleteShipping} variant="outlined" /> : <p></p>}
                {visible.status ? <Chip label={input.status} onDelete={handleDeleteCondition} variant="outlined" /> : <p></p>}
                {visible.brand ? <Chip label={input.brand} onDelete={handleDeleteBrand} variant="outlined" /> : <p></p>}
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

                                            <button key={element} className='optionFilter'
                                                name='type' value={element} onClick={(e) =>
                                                    onChangeFilters(e)}>
                                                {element} ({countingOfProducts[element]})
                                            </button>
                                        </li>
                                    )
                                }) : <div><h1>LOADING</h1></div>
                            }

                        </ul>
                    </div> : <p></p>}
                <br></br>
                {!visible.delivery ?
                    <div id='CategoryShipping'>
                        <h4>Costo de Envio:</h4>
                        <ul id='ListOfTypes'>
                            <li>
                                <button name='delivery' className='optionFilter' value={true} onClick={onChangeFilters}>Envio Gratis ({countingOfProductsShipping})</button>
                            </li>
                        </ul>
                    </div> : <p></p>}
                <br></br>
                {!visible.status ?
                    <div id='CategoryCondition'>
                        <h4>Condición:</h4>
                        <ul>
                            {
                                productConditionArray ? productConditionArray.map((element) => {
                                    return (
                                        <li>
                                            <button key={element} className='optionFilter' name='status' value={element} onClick={(e) => onChangeFilters(e)}>{element} ({countingOfProductsCondition[element]})</button>
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
                                <TextField id="outlined-basic" label={'Mín:$' + addCommas(PrecioMinimo)} variant="outlined" />
                                <TextField id="outlined-basic" label={'Máx:$12' + addCommas(PrecioMaximo)} variant="outlined" />
                                <Button id='ButtonPrice' type='submit' variant="contained" color="primary">A p l i c a r ˃</Button>
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
                                            <button key={element} className='optionFilter' name='brand' value={element} onClick={(e) => onChangeFilters(e)}>{element} ({countingOfProductsBrand[element]})</button>
                                        </li>
                                    )
                                }) : <div><h1>LOADING</h1></div>
                            }
                        </ul>
                    </div> : <p></p>}
            </div>
        </div>
    )
}



export default CategoryFilters