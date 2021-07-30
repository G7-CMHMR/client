import React, { useEffect } from 'react'
import './ModalPCBuilder.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import { Modal, Backdrop, TextField, FormControl, InputLabel, Select, Switch } from '@material-ui/core'
import CardModalPCBuilder from './CardModalPCBuilder'
import { getProductsForPCBuilder } from '../../../redux/Actions/Products/Actions'
import { setCart } from '../../../redux/Actions/Cart/Actions'
import { changeStateLoginAction } from '../../../redux/Actions/User/Actions'


// const productsPCBUILDER = useSelector(state => state.productsReducer.productsPCBUILDER)

export default function ModalPCBuilder({ input, setModal, modal, setInput }) {

    const dispatch = useDispatch();
    const userReducer = useSelector(state => state.userReducer)

    // var producto = productsReducer.find((e) => e=e)
    useEffect(() => {
        dispatch(getProductsForPCBuilder())
    }, [])

    let idProductos = []




    async function TodoAlCarrito(e) {
        if(Object.keys(userReducer.userData) == 0){
           dispatch(changeStateLoginAction(!userReducer.loginwindow))
        }

        e.preventDefault();

        for (let key in input) {
            if(key == 'Envios' || key == 'Total'){continue;}
            if (Array.isArray(input[key])) {
                if (input[key].length > 0) {
                    if (input[key][0].id != 0) {
                        idProductos.push(input[key][0].id)
                    }
                    if (input[key].length > 1) {
                        if (input[key][1].id != 0) {
                            idProductos.push(input[key][1].id)
                        }
                    }
                }
            }
            else {
                if (input[key].id != 0) {
                    idProductos.push(input[key].id)
                }
            }
        }
        console.log(userReducer.userData.id, idProductos)
        dispatch(setCart(userReducer.userData.id, idProductos))
    }


    // let find = productsPCBUILDER.find(e => input. == 1)
    // console.log(find)
    // console.log(productsPCBUILDER)

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


    const handleClose = () => {
        setModal(false)
    };


    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={modal}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={modal}>
                    <div id="ModalPCBUILDER" className={classes.paper}>
                        <div id='BotonVolverYTitulo'>
                            <Button variant="success" onClick={() => handleClose()} >Volver</Button>
                            <h2 id="transition-modal-title22">Lista de componentes añadidos</h2>
                        </div>
                        <br></br>
                        <div id='CardsComponentesAñadidos'>
                            {
                                input.Procesador.id != 0 ? <CardModalPCBuilder id={input.Procesador} category='Procesador' input={input} setInput={setInput} /> : ''
                            }
                            {
                                input.CoolersCPU.id != 0 ? <CardModalPCBuilder id={input.CoolersCPU} category='Coolers CPU' input={input} setInput={setInput} /> : ''
                            }
                            {
                                input.PlacaMadre.id != 0 ? <CardModalPCBuilder id={input.PlacaMadre} category='Placa Madre' input={input} setInput={setInput} /> : ''
                            }
                            {
                                input.PlacadeVideo.id != 0 ? <CardModalPCBuilder id={input.PlacadeVideo} category='Placa de Video' input={input} setInput={setInput} /> : ''
                            }
                            {
                                input.Ram.length != 0 && input.Ram[0].id != 0 ?
                                    <div id='CardModalPCBuilderContainer2'>
                                        {
                                            input.Ram.map((e, index) => {
                                                return (
                                                    <CardModalPCBuilder id={e} category='Ram' input={input} setInput={setInput} index={index} />
                                                )
                                            })
                                        }
                                    </div> : ''
                            }
                            {
                                input.Almacenamiento.length != 0 && input.Almacenamiento[0].id != 0 ?
                                    <div id='CardModalPCBuilderContainer2'>
                                        {
                                            input.Almacenamiento.map((e) => {
                                                return (
                                                    <CardModalPCBuilder id={e} category='Almacenamiento' input={input} setInput={setInput} />
                                                )
                                            })
                                        }
                                    </div> : ''
                            }
                            {
                                input.Accesorios.length != 0 && input.Accesorios[0].id != 0 ?
                                    <div id='CardModalPCBuilderContainer2'>
                                        {
                                            input.Accesorios.map((e) => {
                                                return (
                                                    <CardModalPCBuilder id={e} category='Accesorios' input={input} setInput={setInput} />
                                                )
                                            })
                                        }
                                    </div> : ''
                            }
                            {
                                input.Gabinete.id != 0 ? <CardModalPCBuilder id={input.Gabinete} category='Gabinetes' input={input} setInput={setInput} /> : ''
                            }
                            {
                                input.Fuentedealimentación.id != 0 ? <CardModalPCBuilder id={input.Fuentedealimentación} category='Fuente de alimentación' input={input} setInput={setInput} /> : ''
                            }
                            {
                                input.Monitor.id != 0 ? <CardModalPCBuilder id={input.Monitor} category='Monitor' input={input} setInput={setInput} /> : ''
                            }

                        </div>
                        <div id='TotalMODALPCBUILDER'>
                            <h3>Productos: ${addCommas(input.Total)}</h3>
                            <h3>Envios: ${addCommas(input.Envios)}</h3>
                            <h1>Total: ${addCommas(input.Total + input.Envios)}</h1>
                            <Link to='/Carrito'><Button id='AgregarAlcarritoPCBUILDER'  onClick={TodoAlCarrito} variant="green">Agregar al carrito</Button></Link>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}
