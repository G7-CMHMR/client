import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './MyProductCard.css'
import { Button } from 'react-bootstrap'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import { Modal, Backdrop, TextField, FormControl, InputLabel, Select, Switch } from '@material-ui/core'
import { updateProduct } from '../../../redux/Actions/Products/Actions'

export default function MyPoductCard({stock, sold, price, discount, images, name, id, warranty, delivery, status, description, brand, category, type }) {
    const dispatch = useDispatch();
    const userReducer = useSelector(state => state.userReducer.userData)
    const productsReducer = useSelector(state => state.productsReducer)
    var userId = userReducer.id

    const [input, setInput] = React.useState({
        name: name,
        status: status,
        price: price,
        stock: stock,
        description: description,
        visible: false,
        brand: brand,
        type: type,
        warranty: warranty.toString(),
        delivery: delivery,
        title: '',
        images: ['https://economipedia.com/wp-content/uploads/Tipos-de-hardware.png'],
        discount: discount,
        userId: userReducer.id,
        category: category,
    })
    const [inputChange, setInputChange] = React.useState({
        name: name,
        status: status,
        price: price,
        stock: stock,
        description: description,
        brand: brand,
        type: type,
        warranty: warranty.toString(),
        delivery: delivery,
        images: images,
        discount: discount,
        userId: userReducer.id,
        category: category,
    })

    function handleChange(event) {
        if (event.target.name == 'delivery') {
            setInput({
                ...input,
                [event.target.name]: event.target.checked
            });

        } else {
            setInput({
                ...input,
                [event.target.name]: event.target.value,
            });
            
        }
    }
    function handleInputChange(e){
        if (e.target.name == 'delivery') {
            setInputChange({
                ...inputChange,
                [e.target.name]: e.target.checked
            });

        }
        setInputChange({
            ...inputChange,
            [e.target.name]: e.target.value,
        });
        console.log(inputChange)
    }

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

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const useStyles = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        root: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    }));

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openM, setOpenM] = React.useState(false);

    const handleOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };
    const handleOpenM = () => { setOpenM(true); };
    const handleCloseM = () => { setOpenM(false); };

    function deleteProduct() {
        setOpen(false)
        alert('Producto Eliminado')
    }
    function modificateProduct() {
        alert('Producto Modificado')
        dispatch(updateProduct(id,inputChange))
        console.log("paso funcion")
        setOpenM(false)
    }
    function activateProduct() {
        alert('Activar Producto')
    }


    return (
        <div>
            <div id="MyProductCardOfPublication">
                <div id='MyProductCardContainerPublication'>
                    <img id="MyProductImage" src={images[0]} alt="Omar Dsoky" />
                    <Link id="link" to={`/Producto/${id}`}>
                        <div class="Publication_MyProduct-details">
                            <h4 id="MyProductName">{name}</h4>

                            <div id="price"><h3>${addCommas(Math.floor(price - (price / 100) * discount))}</h3>
                                {discount > 0 ? <span> ${addCommas(Math.floor(price))}</span> : <p></p>}
                            </div>

                            <div id='ProductStateDiv'><h5 id='EstadoH5_0'>Estado:</h5><h5 id='EstadoH5'>INACTIVO</h5></div>
                        </div>
                    </Link>
                    <div id="SalesAndStock2">
                        <h5>Stock: {stock}</h5>
                        <h5>Vendidos: {sold}</h5>
                    </div>
                    <div id="MyProductButtons">

                        <Button onClick={handleOpen} variant="danger">Eliminar</Button>
                        <Link to='/Panel'><Button onClick={handleOpenM} variant="warning">Modificar</Button></Link>
                        <Button onClick={activateProduct} variant="success">Activar</Button>

                    </div>


                </div>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div id="MoldalContainer" className={classes.paper}>
                        <h2 id="transition-modal-title">¿Estas seguro de eliminar la publicacion?</h2>
                        <Button variant="danger" onClick={() => deleteProduct()}>Eliminar</Button>{' '}
                        <Button variant="success" onClick={() => handleClose()} >Volver</Button>
                    </div>
                </Fade>
            </Modal>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openM}
                onClose={handleCloseM}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openM}>
                    <div id="MoldalContainer2" className={classes.paper}>
                        <div id='Form1_NameAndX'>
                            <h2 id="transition-modal-title">Editar un producto</h2>
                            <Button id='Form1_X' variant="danger" onClick={() => handleCloseM()}>X</Button>{' '}
                        </div>
                        <div id='ProductInfoContainerForm'>
                            <div id='Form1_Container'>
                                <div id='Form1_Left'>
                                    <TextField onChange={(e)=>handleInputChange(e)} name='name' id='Form1_Name' label={name} variant="outlined" />
                                    <div id='Form1_ImageAndInputs'>
                                        <div id='Form1_ImageAndInputs_1'>
                                            <img id='Form1_Image' src={images}></img>
                                        </div>
                                        <div id='Form1_ImageAndInputs_2'>
                                            <FormControl variant="outlined" id='Form1_Category'>
                                                <InputLabel htmlFor="outlined-age-native-simple">Categoria</InputLabel>
                                                <Select
                                                    native
                                                    onChange={(e)=>handleInputChange(e)}
                                                    label="Categoria"
                                                    name='category'
                                                    inputProps={{
                                                        name: 'category',
                                                        id: 'outlined-age-native-simple',
                                                    }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    {productsReducer ? productsReducer.categories.map((element) => {
                                                        return (<option value={element.title}>{element.title}</option>)
                                                    }) : ''}
                                                </Select>
                                            </FormControl>
                                            <TextField name='type' onChange={(e)=>handleInputChange(e)} id='Form1_Type' label={type ? type : 'Tipo:'} variant="outlined" />
                                            <TextField name='brand' onChange={(e)=>handleInputChange(e)} id='Form1_Brand' label={brand ? brand : 'Marca:'} variant="outlined" />
                                        </div>
                                    </div>
                                    <TextField name='description' onChange={(e)=>handleInputChange(e)} id='Form1_Description' label={description} variant="outlined" />

                                    <input onChange={(e)=>handleInputChange(e)} name='images'  id="Form1_LoadImage" type='file' multiple label="" variant="outlined" />

                                </div>
                                <div id='Form1_Right'>
                                    <FormControl variant="outlined" id='Form1_Category'>
                                        <InputLabel htmlFor="outlined-age-native-simple">Condición:</InputLabel>
                                        <Select
                                            native
                                            onChange={(e)=>handleInputChange(e)}
                                            label="Condition"
                                            name='status'
                                            inputProps={{
                                                name: 'status',
                                                id: 'outlined-age-native-simple',
                                            }}
                                        >
                                            <option aria-label="None" disabled value="" />
                                            <option value={'Nuevo'}>Nuevo</option>
                                            <option value={'Usado'}>Usado</option>
                                            <option value={'Reacondicionado'}>Reacondicionado</option>
                                        </Select>
                                    </FormControl>

                                    <div id='Form1_Estadisticas'>
                                        <div>
                                            <TextField  disabled id="outlined-required" label="Stock" type='number' variant="outlined" />
                                            <TextField onChange={(e)=>handleInputChange(e)} name='stock' id="outlined-required" label={stock} type='number' variant="outlined" />
                                        </div>
                                        <div>
                                            <TextField name='delivery' disabled id="outlined-required" label="Envio Gratis:" type='number' variant="outlined" />
                                            <Switch
                                                checked={inputChange.delivery}
                                                onChange={(e)=>handleInputChange(e)}
                                                color="primary"
                                                name="delivery"
                                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                            />
                                        </div>
                                        <div>
                                            <TextField  disabled id="outlined-required" label="Meses de Garantía" type='number' variant="outlined" />
                                            <TextField onChange={(e)=>handleInputChange(e)} name='warranty' id="outlined-required" label={warranty} type='number' variant="outlined" />
                                        </div>
                                        <div>
                                            <TextField  disabled id="outlined-required" label="Descuento %" type='number' variant="outlined" />
                                            <TextField onChange={(e)=>handleInputChange(e)} name='discount' id="outlined-required" label={discount.toString()} type='number' variant="outlined" />
                                        </div>
                                        <div>
                                            <TextField disabled id="outlined-required" label="Precio" type='number' variant="outlined" />
                                            <TextField onChange={(e)=>handleInputChange(e)} name='price' id="outlined-required" label={price} type='number' variant="outlined" />
                                        </div>



                                        <div>
                                            <TextField disabled id="outlined-required" label="" defaultValue="Comision:" variant="outlined" />
                                            <TextField disabled id="outlined-disabled" label="" value={`-$${input.price * 0.05}`} variant="outlined" />
                                        </div>
                                        <div>
                                            <TextField disabled id="outlined-required" label="" defaultValue="Envio:" variant="outlined" />
                                            <TextField disabled id="outlined-disabled" label="" value={`${input.delivery ? '-$400' : '0'}`} variant="outlined" />
                                        </div>
                                        <div>
                                            <TextField disabled id="outlined-required" label="" defaultValue="Ganancia:" variant="outlined" />
                                            <TextField disabled id="outlined-disabled" label="" value={`$${(input.price - input.price * 0.05) - (input.delivery ? 400 : 0)}`} variant="outlined" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button id='Form1_BotonGuardarCambios' variant="success" onClick={() => modificateProduct()} >Guardar cambios</Button>
                    </div>

                </Fade>
            </Modal>
        </div>
    )
}
