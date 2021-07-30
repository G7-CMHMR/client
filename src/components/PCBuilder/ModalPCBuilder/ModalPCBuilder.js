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

// const productsPCBUILDER = useSelector(state => state.productsReducer.productsPCBUILDER)

export default function ModalPCBuilder({ input, setModal, modal }) {

    const dispatch = useDispatch();
    const userReducer = useSelector(state => state.userReducer.userData)

    // var producto = productsReducer.find((e) => e=e)
    useEffect(() => {
        dispatch(getProductsForPCBuilder())
    }, [])



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
                                input.Procesador.id != 0 ? <CardModalPCBuilder id={input.Procesador} category='Procesador' /> : ''
                            }
                            {
                                input.CoolersCPU.id != 0 ? <CardModalPCBuilder id={input.CoolersCPU} category='Coolers CPU' /> : ''
                            }
                            {
                                input.PlacaMadre.id != 0 ? <CardModalPCBuilder id={input.PlacaMadre} category='Placa Madre' /> : ''
                            }
                            {
                                input.PlacadeVideo.id != 0 ? <CardModalPCBuilder id={input.PlacadeVideo} category='Placa de Video' /> : ''
                            }
                            {
                                input.Ram.length != 0 && input.Ram[0].id != 0 ?
                                    <div id='CardModalPCBuilderContainer2'>
                                        {
                                            input.Ram.map((e) => {
                                                return (
                                                    <CardModalPCBuilder id={e} category='Memoria RAM' />
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
                                                    <CardModalPCBuilder id={e} category='Almacenamiento' />
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
                                                    <CardModalPCBuilder id={e} category='Accesorios' />
                                                )
                                            })
                                        }
                                    </div> : ''
                            }
                            {
                                input.Gabinete.id != 0 ? <CardModalPCBuilder id={input.Gabinete} category='Gabinetes' /> : ''
                            }
                            {
                                input.Fuentedealimentación.id != 0 ? <CardModalPCBuilder id={input.Fuentedealimentación} category='Fuentes' /> : ''
                            }
                            {
                                input.Monitor.id != 0 ? <CardModalPCBuilder id={input.Monitor} category='Monitores' /> : ''
                            }

                        </div>
                        <div id='TotalMODALPCBUILDER'>
                            <h3>Productos: ${addCommas(input.Total)}</h3>
                            <h3>Envios: ${addCommas(input.Envios)}</h3>
                            <h1>Total: ${addCommas(input.Total)}</h1>
                            <Button id='AgregarAlcarritoPCBUILDER' variant="green">Agregar al carrito</Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}
