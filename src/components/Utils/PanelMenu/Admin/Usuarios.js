import React, { useEffect } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {Button, Modal} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import { Form, FormControl, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, DeleteUser } from '../../../../redux/Actions/Admin/Actions';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


export default function Usuarios() {
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const [show, setshow] = React.useState(false);
    const [idUser, setIdUser] = React.useState(0)  
    const user = useSelector(state => state.userReducer.userData)
    let userId = user.id
    const handleCloseDelete = () => setshow(false);
    const handleCloseDeleteAction = ()=>{
      console.log(userId,idUser)
      dispatch(DeleteUser({adminId:userId , userId:idUser}))
      setshow(false)
    }
    const handleShowDelete = (e) => {
      setIdUser(e.target.value)
      setshow(true)
      }
    
    const users = useSelector(state => state.adminReducer.users)
   
    useEffect(() => {
      dispatch(getUsers(userId))
    }, [dispatch, userId])
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
                    users.map((x)=>{
            return (
            <ListItem style={{width:'180%'}}>
                    <ListItemAvatar>
                    <Avatar src="/broken-image.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary={x.name} secondary={x.email} />
                    {!x.isAdmin && !x.superAdmin && 
                    <Button onClick={passwordResetShow} style={{margin:'3px'}} variant="info">Password reset</Button>
                    }
                    {
                      !x.isAdmin && !x.superAdmin &&
                      <Button onClick={(e)=>handleShowDelete(e)} value={x.id} style={{margin:'3px'}} variant="danger">Eliminar</Button>
                    }
                  { !x.superAdmin && x.isAdmin &&
                    <OverlayTrigger placement='top' overlay={<Tooltip>
                    Este usuario es Admin. No tienes derechos </Tooltip> } >
                    <Button variant="warning">ADMIN </Button>
                  </OverlayTrigger>}
                  { x.superAdmin &&
                    <OverlayTrigger placement='top' overlay={<Tooltip>
                    Este usuario es Superadmin. No tienes derechos </Tooltip> } >
                    <Button variant="dark">SUPERADMIN </Button>
                  </OverlayTrigger>}
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
          <Button variant="secondary" onClick={handleCloseDeleteAction}>
            ELIMINAR
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}
