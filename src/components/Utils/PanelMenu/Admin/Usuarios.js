import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {Button, Modal} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import { Form, FormControl } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


export default function Usuarios() {
    const [open, setOpen] = React.useState(false);
    const [show, setshow] = React.useState(false);
    const handleCloseDelete = () => setshow(false);
    const handleShowDelete = () => setshow(true);
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  const classes = useStyles(); 
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    } 
    setOpen(false);
  };
    let prueba=[
    {
        id:3,
        mail:'sdas@gmail.com',
        name:'ricardo fort',
    },
    {
        id:5,
        mail:'sdas@gmail.com',
        name:'susana gimenez',
    },
    {
        id:6,
        mail:'sdas@gmail.com',
        name:'messi',
    },
    {
        id:7,
        mail:'sdas@gmail.com',
        name:'roberto',
    }]


    const passwordResetShow = ()=>{
        setOpen(true)
    }

    return (
        <div>
            <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Buscar un usuario por mail"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success"><BsSearch/></Button>
    </Form>
            <List className={classes.root}>
                {
                    prueba.map((x)=>{
            return (
            <ListItem style={{width:'180%'}}>
                    <ListItemAvatar>
                    <Avatar src="/broken-image.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary={x.name} secondary={x.mail} />
                    <Button onClick={passwordResetShow} style={{margin:'3px'}} variant="info">Password reset</Button>
             <Button onClick={handleShowDelete} style={{margin:'3px'}} variant="danger">Eliminar</Button>
                    
                    </ListItem>

                    
            )
                    })
                }
             
      </List>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success">
                            Se realizó password reset al usuario
                            </Alert>
                        </Snackbar>
      <Modal 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={show} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Esta acción eliminará al usuario definitivamente</Modal.Title>
        </Modal.Header>
        
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseDelete}>
            VOLVER
          </Button>
          <Button variant="secondary" onClick={handleCloseDelete}>
            ELIMINAR
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}
