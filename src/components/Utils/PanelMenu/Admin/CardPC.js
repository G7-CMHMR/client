import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button , Modal} from 'react-bootstrap'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import { useDispatch } from 'react-redux'
import Card from 'react-bootstrap/Card'
import StarBorderIcon from '@material-ui/icons/StarBorder'; 
import Rating from '@material-ui/lab/Rating';




export default function CardPC({images, name, id, description }) {
  const dispatch = useDispatch();

  
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleShow = () => setOpen(true);
 
  return (
    <div>
        <Card style={{ width:'200px',minHeight:'100%'}}>
          <Link  style={{ width: '0'}} id="link" to={`/Producto/${id}`}>
  <Card.Img style={{ width: '180px',heigth:'150px'}} variant="top" src={images[0]} />
  </Link>
  <Card.Body>
  <Button value={id} onClick={handleShow} variant="info">REVIEW</Button>    
    
  </Card.Body>
</Card>
<Modal 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Rating name="customized-10" defaultValue={2} max={10} />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            VOLVER
          </Button>
          <Button variant="success" onClick={handleClose}>
            EVALUAR
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
