import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './MyPublicationCard.css'
import {Button} from 'react-bootstrap'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
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
      }));
        const classes = useStyles();
        const [open, setOpen] = React.useState(false);

        const handleOpen = () => {
            setOpen(true);
        };

        const handleClose = (e) => {
          console.log(open)
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
                        <Button onClick={handleOpen} variant="danger">Eliminar</Button>{' '}
                        <Button variant="warning">Pausar</Button>{' '}
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
            <Button variant="danger">Eliminar</Button>{' '}
           <Button variant="success" onclick={(e)=>handleClose(e)} >Volver</Button>{' '}
          </div>
        </Fade>
      </Modal>
        </div>
    )
}
