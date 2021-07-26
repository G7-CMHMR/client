import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useDispatch } from 'react-redux'
import Rating from '@material-ui/lab/Rating';
import Card from 'react-bootstrap/Card'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Box from '@material-ui/core/Box';




export default function CardPC({images, name, id }) {
  const dispatch = useDispatch();
  const userReducer = useSelector(state => state.userReducer.userData)
  const [value, setValue] = React.useState(0);
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
  const classes = useStyles()

  return (
    <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img width='100px' variant="top" src={images[0]} />
  <Card.Body>
  <Link id="link" to={`/Producto/${id}`}>
    <Card.Title>{name}</Card.Title>
    </Link>
    <Box component="fieldset" mb={3} borderColor="transparent">
    <Rating
          name="customized-empty"
          defaultValue={2}
          precision={0.5}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        /></Box>
  </Card.Body>
</Card>
    </div>
  )
}
