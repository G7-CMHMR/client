import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import StarRateIcon from '@material-ui/icons/StarRate';
// import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import { atemptReviewSeller, atemptReviewProduct } from '../../../redux/Actions/Review/Actions';

import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


const Review = ({idUser, idProduct, idSeller}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [review, setReview] = useState({
    title: '',
    message: ''
  });
  const [toReview, setToReview] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleReviewProductOpen = (e) => {
    setToReview('producto');
    setOpen(true);
  };

  const handleReviewSellerOpen = (e) => {
    setToReview('vendedor');
    setOpen(true);
  };

  const handleReviewClose = () => {
    setOpen(false);
    setReview({
      title: '',
      message: ''
    })
  };

  const handleReviewChange = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value
    })
  }



  const labels = {
    1: 'Pobre',
    2: 'Regular',
    3: 'Buena',
    4: 'Muy Buena',
    5: 'Excelente'
  };
    
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);


  const handleSubmit = () => {
    //type sería el valor, está asi dado que en el backend
    // se le puso type al valor
    review.type = value;
    console.log('LA REVIEW: ', review);
    if (toReview === 'vendedor'){
      dispatch(atemptReviewSeller(idUser, idSeller, review));
    }
    if (toReview === 'producto'){
      dispatch(atemptReviewProduct(idUser, idProduct, review));
    }
    handleReviewClose();
  }


  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleMenuClick}
      >
        Dejá tu reseña
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <StyledMenuItem button="true" onClick={handleReviewProductOpen}>
           <ListItemText primary="Al producto" />
        </StyledMenuItem >
        <StyledMenuItem button="true" onClick={handleReviewSellerOpen}>
          <ListItemText primary="Al vendedor" />
        </StyledMenuItem>
      </StyledMenu>
      <Dialog open={open} onClose={handleReviewClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Contanos como fue tu experiencia</DialogTitle>
        <DialogContent>
          <DialogContentText>
            { (toReview === 'producto') ?
              "Para ayudar a los clientes en sus próximas compras, puntuá al producto de acuerdo a tu experiencia, y luego comentá brevemente el motivo de la puntuación."
              :
              "Para ayudar a los clientes en sus próximas compras, puntuá al vendedor de acuerdo a tu experiencia, y luego comentá brevemente el motivo de la puntuación."
            }
          </DialogContentText>
          <Rating
            name="hover-feedback"
            value={value}
            precision={1}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
          />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
          <TextField
            required
            autoFocus
            margin="dense"
            id="title"
            helperText="Dejá un título de tu reseña brevemente"
            label="Titulo"
            type="text"
            name='title'
            value={review.title}
            onChange={handleReviewChange}
            fullWidth
          />
          <TextField
            required
            autoFocus
            margin="dense"
            id="message"
            helperText="Dejá el motivo de tu puntuación"
            label="Mensaje"
            type="text"
            name='message'
            value={review.message}
            onChange={handleReviewChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleReviewClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default Review;










