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
import { GetPcNotValidate, incompletePC, ReviewPC } from '../../../../redux/Actions/Admin/Actions';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
export default function CardPC({images, name, id, description, brand, type, seller}) {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userReducer.userData)
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [val, setVal] = React.useState(0)
  const [valuated, setValuated] = React.useState(false)
  let iduser= user.id
  const handleClose = () => {setOpen(false);setValuated(false);setOpen1(false)}
  const Valuate = (e) =>{
    setVal(e.target.value)
  }
  const ValuatePC = (e) =>{
    dispatch(ReviewPC({adminId:iduser, productId:id, valuation:val}))
    setOpen(false)
    setValuated(true)
  }
  const incompleteVal = (e) => { 
    dispatch(incompletePC({adminId:iduser, productId:id, valuation:val}))
    setOpen1(true)
  }
  const handleShow = (e) => {
    setOpen(true)
  }
  return (
    <div>
      
        <Card style={{flexDirection:'row', alignItems:'flex-end'}}><div>
          <Link  style={{ width: '0'}} id="link" to={`/Producto/${id}`}>
  <Card.Img style={{ width: '180px',heigth:'150px'}} variant="top" src={images?images:'https://www.altonivel.com.mx/wp-content/uploads/2020/05/amazon1.jpg'} />
  </Link>
  </div>
  <Card.Body>
    <div id="brandPCAdmin" style={{width:'29%'}}>
    <h6>{brand}</h6>
    <h6>{type}</h6>
    <Button variant="success" onClick={(e)=>handleShow(e)}> EVALUAR </Button>
    </div>
    <div id='descriptionPC'>
    <p>Descripción:</p>    
    <p style={{marginLeft:'5%', marginRight:'5%'}}>{description}</p>
   </div>
    <div id='btnAdminPc' ><Button value={id}  onClick={incompleteVal} variant="danger">INCOMPLETO</Button></div>    
  </Card.Body>
</Card>
<Modal 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Rating name="customized-10" defaultValue={0} max={10} onChange={(e)=>Valuate(e)} />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            VOLVER
          </Button>
          <Button variant="success" onClick={ValuatePC}>
            EVALUAR
          </Button>
        </Modal.Footer>
      </Modal>
      <Snackbar open={valuated} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Listo
        </Alert>
      </Snackbar>
      <Snackbar open={open1} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Listo
        </Alert>
      </Snackbar>
    </div>
  )
}
