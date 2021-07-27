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

const useStyles = makeStyles((theme) => ({
    root: {
      width: '170%',
      maxWidth: 500,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
export default function SuperAdmin() {
    const [open, setOpen] = React.useState(false);
    const [show, setshow] = React.useState(false);
    const [admin, setadmin] = React.useState(false);
    const [superadmin, setsuperadmin] = React.useState(false);
    const [deshacer, setdeshacer] = React.useState(false);
    const [name, setname] = React.useState('');
    const handleCloseDelete = () => setshow(false);
    const handleShowDelete = () => setshow(true);
    const classes = useStyles(); 
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        } 
        setOpen(false);
      };
      const passwordResetShow = ()=>{
        setOpen(true)
    }
    const handleSuperAdmin = (e) =>{
        setname(e.target.value)
        setsuperadmin(true)
    }
    const handleAdmin = (e) =>{
        setname(e.target.value)
        setadmin(true)
    }
    const handleDeshacer = (e) =>{
        setname(e.target.value)
        setdeshacer(true)
    }
    const handleSuperAdminx = () => setsuperadmin(false);
    const handleAdminx = () => setadmin(false);
    const handleDeshacerx = () => setdeshacer(false);

    let prueba=[
    {
        id:3,
        mail:'sdas@gmail.com',
        name:'ricardo fort',
        superadmin:false,
        isadmin:false
    },
    {
        id:5,
        mail:'sdas@gmail.com',
        name:'susana gimenez',
        superadmin:false,
        isadmin:true
    },
    {
        id:6,
        mail:'sdas@gmail.com',
        name:'messi',
        superadmin:true,
        isadmin:true
    },
    {
        id:7,
        mail:'sdas@gmail.com',
        name:'roberto',
        superadmin:false,
        isadmin:false
    },
    {
        id:52,
        mail:'sdas@gmail.com',
        name:'natiiii',
        superadmin:false,
        isadmin:true
    }]




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
                    <ListItemText primary={x.name} secondary={x.superadmin? x.mail + '   SUPERADMIN':x.isadmin? x.mail + '   ADMIN' :x.mail} />
                     {!x.isadmin &&  <Button onClick={(e)=>handleAdmin(e)} value={x.name} style={{margin:'3px'}} variant="info">Convertir Admin</Button>}
                     {x.isadmin && !x.superadmin &&  <Button onClick={(e)=>handleSuperAdmin(e)} value={x.name} style={{margin:'3px'}} variant="dark">Convertir SuperAdmin</Button>}
                     {x.isadmin &&  !x.superadmin && <Button onClick={(e)=>handleDeshacer(e)} value={x.name} style={{margin:'3px'}} variant="warning">Deshacer Admin</Button>}
                    <Button onClick={passwordResetShow} style={{margin:'3px'}} variant="secondary">Password reset</Button>
                   
                    {!x.superadmin && <Button onClick={handleShowDelete} style={{margin:'3px'}} variant="danger">Eliminar</Button>}
                    
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

      <Modal 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={superadmin} onHide={handleSuperAdminx}>
        <Modal.Header closeButton>
          <Modal.Title>{name} pasará a ser SUPERADMIN</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSuperAdminx}>
            VOLVER
          </Button>
          <Button variant="success" onClick={handleSuperAdminx}>
            ACEPTAR
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={admin} onHide={handleAdminx}>
        <Modal.Header closeButton>
          <Modal.Title>{name} pasará de ser usuario normal a ADMIN</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAdminx}>
            VOLVER
          </Button>
          <Button variant="success" onClick={handleAdminx}>
            ACEPTAR
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={deshacer} onHide={handleDeshacerx}>
        <Modal.Header closeButton>
          <Modal.Title>{name} no tendra los derechos de ADMIN</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeshacerx}>
            VOLVER
          </Button>
          <Button variant="success" onClick={handleDeshacerx}>
            ACEPTAR
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

