import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './MyProductCard.css'
import { Button } from 'react-bootstrap'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';

export default function MyPoductCard({ stock, sold, price, discount, images, name, id }) {

    const userReducer = useSelector(state => state.userReducer.userData)
    const favourites = useSelector(state => state.favouritesReducer.favourites)
    var userId = userReducer.id

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
        root: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    }));

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <div id="MyProductCard">
                <div id='MyProductCardContainer'>
                    <img id="MyProductImage" src={images[0]} alt="Omar Dsoky" />
                    <Link id="link" to={`/Producto/${id}`}>
                        <div class="MyProduct-details">
                            <h4 id="MyProductName">{name}</h4>

                            <div id="price"><h3>${addCommas(Math.floor(price - (price / 100) * discount))}</h3>
                                {discount > 0 ? <span> ${addCommas(Math.floor(price))}</span> : <p></p>}
                            </div>
                        </div>
                    </Link>
                    <div id="SalesAndStock">
                        <p>Stock: {stock}</p>
                        <p>Vendidos: {sold}</p>
                    </div>
                    <div id="MyProductButtons">
                        <Button onClick='' variant="danger">Eliminar</Button>{' '}
                        <Button variant="success" onClick={handleClick}>Activar</Button>{' '}
                        <Button variant="info">Modificar</Button>{' '}
                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                            <Alert severity="success">Producto activado! </Alert>
                        </Snackbar>
                    </div>

                    <Fade in={open}>
                        <div id="MoldalContainer" className={classes.paper}>
                            <h2 id="transition-modal-title">¿Estas seguro de eliminar la publicacion?</h2>
                            <Button variant="danger" onClick={(e) => (e)}>Eliminar</Button>{' '}
                            <Button variant="success" onclick={(e) => handleClose(e)} >Volver</Button>{' '}
                        </div>
                    </Fade>

                </div>
            </div>

        </div>
    )
}
