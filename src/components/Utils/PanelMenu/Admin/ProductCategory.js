import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
import { Modal, Backdrop, TextField, FormControl, InputLabel, Select, Switch } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar';
import { Link } from 'react-router-dom'
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import { seller_updateProduct } from '../../../../redux/Actions/Seller/Actions'
import { seller_hideProduct } from '../../../../redux/Actions/Products/Actions';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
export default function ProductCategory({images,id,name,sellerId,
 status, description, brand, category, type }) {
    const productsReducer = useSelector(state => state.productsReducer)
    const [pause, setpause] = useState(true)
    const userReducer = useSelector(state => state.userReducer.userData)
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [openM, setOpenM] = React.useState(false);
    const [deleted, setdeleted] = React.useState(true);
    const dispatch = useDispatch()
    const handleOpenM = () => { setOpenM(true); };
    const handleCloseM = () => { setOpenM(false); };
    function pauseProduct() {
        dispatch(seller_updateProduct(id, { visible: false }, sellerId, true))
        setpause(false)
        setOpen(true)
      }
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') { return} 
        setOpen(false);
        };
        const handleShowDelete = (e) => {
            dispatch(seller_hideProduct({productId:id}))
            setdeleted(false)
            setpause(false)
            setOpen1(true)
          };
          const [input, setInput] = React.useState({
            name: name,
            status: status,
            description: description,
            brand: brand,
            type: type,
            title: '',
            category: category,
        })
        function handleChange(event) {
      
                setInput({
                    ...input,
                    [event.target.name]: event.target.value,
                });
                
            
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
        function modificateProduct() {
            dispatch(seller_updateProduct(id,input, sellerId, false))
            //console.log("paso funcion")
            setOpenM(false)
        }
        const classes = useStyles();

    return (
        <div id='ProductAdminCard'>
            <div id="MyProductCardOfPublicationAdmin">
                <div id='MyProductCardContainerPublicationAdmin'>
                    <img id="MyProductImage" alt="product" src={images[0]} />
                    <Link id="link" to={`/Producto/${id}`}>
                        <div class="Publication_MyProduct-details">
                            <h4 id="MyProductName">{name}</h4> </div>
                    </Link>
                    <div id="MyProductButtonsAdmin">

                        {deleted && <Button  onClick={handleShowDelete}variant="danger">Eliminar</Button>}
                        <Button  onClick={handleOpenM} variant="info">Modificar</Button>
                        {pause && <Button  variant="warning" onClick={pauseProduct} >Pausar</Button>}

                    </div>


                </div>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success">Publicación pausada</Alert>
      </Snackbar>
      <Snackbar open={open1} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success">Publicación eliminada</Alert>
      </Snackbar>




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
                    <div id="MoldalContainer3" className={classes.paper}>
                        <div id='Form1_NameAndX'>
                            <h2 id="transition-modal-title">Editar un producto</h2>
                            <Button id='Form1_X' variant="danger" onClick={() => handleCloseM()}>X</Button>{' '}
                        </div>
                        <div id='ProductInfoContainerForm'>
                            <div id='Form1_Container'>
                                <div id='Form1_Left'>

                                    <TextField onChange={(e)=>handleChange(e)} name='name' id='Form1_Name' label={name} variant="outlined" />

                                    <div id='Form1_ImageAndInputs'>
                                        <div id='Form1_ImageAndInputs_1'>
                                            <img id='Form1_Image' src={images}></img>
                                        </div>
                                        <div id='Form1_ImageAndInputs_2'>
                                            <FormControl variant="outlined" id='Form1_Category'>
                                                <InputLabel htmlFor="outlined-age-native-simple">Categoria</InputLabel>
                                                <Select
                                                    native
                                                    value={input.category}

                                                    onChange={(e)=>handleChange(e)}

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
                                                    
                                            <TextField name='type' onChange={(e)=>handleChange(e)} id='Form1_Type' label={type ? type : 'Tipo:'} variant="outlined" />
                                            <TextField name='brand' onChange={(e)=>handleChange(e)} id='Form1_Brand' label={brand ? brand : 'Marca:'} variant="outlined" />
                                        </div>
                                    </div>
                                    <TextField name='description' onChange={(e)=>handleChange(e)} id='Form1_Description' label={description} variant="outlined" />

                                </div>
                                <div id='Form1_Right'>
                                    <FormControl variant="outlined" id='Form1_Category'>
                                        <InputLabel htmlFor="outlined-age-native-simple">Condición:</InputLabel>
                                        <Select
                                            native
                                            onChange={(e)=>handleChange(e)}
                                            value={input.status}
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
