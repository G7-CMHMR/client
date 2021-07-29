import './Usuarios.css'
import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Button, Modal } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import { Form, FormControl, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, DeleteUser, SearchUser, PasswordReset } from '../../../../redux/Actions/Admin/Actions';

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

  const handleCloseDeleteAction = () => {
    console.log(userId, idUser)
    dispatch(DeleteUser({ adminId: userId, userId: idUser }))
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
    },
  }));
  const classes = useStyles();
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const passwordResetShow = (e) => {
    setOpen(true)
    dispatch(PasswordReset(user.id, e.target.value))
  }


  const [input, setInput] = useState('')

  function handleChange(e) {
    setInput(e.target.value)
  }
  function SearchUsers() {
    dispatch(SearchUser(userId, input))
  }

  let count = 0;
  return (
    <div id='CardUserAdminPanel'>
      <Form className="d-flex" id='SearchbarAdminPanel'>
        <FormControl
          type="search"
          placeholder="Buscar usuario por nombre o email"
          className="mr-2"
          aria-label="Search"
          onChange={handleChange}

        />
        <Button id='BotonUserAdminPanel' onClick={SearchUsers} variant="outline-success"><BsSearch /></Button>
      </Form>

      <List>
        {

          users.map((x) => {
            if (count > 6) { return }
            else {
              count++;
              return (
                <ListItem style={{ width: '180%' }}>
                  {console.log(users)}
                  <ListItemAvatar>
                    <Avatar src="/broken-image.jpg" />
                  </ListItemAvatar>
                  <ListItemText primary={x.name} secondary={x.email} />
                  {!x.isAdmin && !x.isSuperAdmin &&
                    <Button onClick={(e) => passwordResetShow(e)}  value={x.id} style={{ margin: '3px' }} variant="info">Password reset</Button>
                  }
                  {
                    !x.isAdmin && !x.isSuperAdmin &&
                    <Button onClick={(e) => handleShowDelete(e)} value={x.id} style={{ margin: '3px' }} variant="danger">Eliminar</Button>
                  }
                  {!x.isSuperAdmin && x.isAdmin &&
                    <OverlayTrigger placement='top' overlay={<Tooltip>
                      Este usuario es Admin. No tienes derechos </Tooltip>} >
                      <Button variant="warning">ADMIN </Button>
                    </OverlayTrigger>}
                  {x.isSuperAdmin &&
                    <OverlayTrigger placement='top' overlay={<Tooltip>
                      Este usuario es Superadmin. No tienes derechos </Tooltip>} >
                      <Button variant="dark">SUPERADMIN </Button>
                    </OverlayTrigger>}

                </ListItem>


              )
            }

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
