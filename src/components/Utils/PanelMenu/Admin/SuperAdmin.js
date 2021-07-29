import './Usuarios.css'
import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Button, Modal } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import { Form, FormControl } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { PasswordReset } from '../../../../redux/Actions/Admin/Actions';
import { DeleteUser, BecomeAdmin, SearchUser } from '../../../../redux/Actions/Admin/Actions';

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
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const [show, setshow] = React.useState(false);
  const [admin, setadmin] = React.useState(false);
  const [search, setSearch] = React.useState('')
  const [idUser, setIdUser] = React.useState(0)
  const [superadmin, setsuperadmin] = React.useState(false);
  const [deshacer, setdeshacer] = React.useState(false);
  const [name, setname] = React.useState('');
  const userReducer = useSelector(state => state.userReducer.userData)
  const users = useSelector(state => state.adminReducer.users)
  const handleCloseDelete = () => setshow(false);

  const classes = useStyles();
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  //******************************************PASSWORD RESET
  const passwordResetShow = (e) => {
    setOpen(true)
    dispatch(PasswordReset(userReducer.id, e.target.value))
  }
  //******************************************
  //*******************************************DELETE
  const handleShowDelete = (e) => {
    setshow(true)
    setIdUser(e.target.value)
    console.log(idUser)
  };
  function DeleteUserSelect() {
    console.log(idUser)
    dispatch(DeleteUser({ adminId: userReducer.id, userId: idUser }))
    setshow(false)
  }
  //******************************************
  // function SearchUsers() {
  //   dispatch(SearchUser(userId, input))
  // }



  const handleSuperAdmin = (e) => {
    setname(e.target.value)
    setsuperadmin(true)
  }

  const handleDeshacer = (e) => {
    setname(e.target.value)
    setdeshacer(true)
  }
  const handleSuperAdminx = () => setsuperadmin(false);
  //*********************************PASA A ADMIN
  const handleAdmin = (e) => {
    setname(e.target.value)
    setadmin(true)
  }
  const handleAdminx = () => {
    setadmin(false)
    dispatch(BecomeAdmin(userReducer.id, name))
  };
  //************************************************
  const handleDeshacerx = () => setdeshacer(false);

  //**************************SEARCH BAR
  function handleChange(e) {
    setSearch(e.target.value)
  }
  function SearchUsers() {
    dispatch(SearchUser(userReducer.id, search))
  }
  //********************************


  let count = 0;
  return (
    <div id='CardUserSUPERAdminPanel'>
      <Form id='FormSuperAdmin' >
        <FormControl
          type="search"
          placeholder="Buscar usuario por nombre o email"
          className="mr-2"
          aria-label="Search"
          id='SearchbarSUPERAdminPanel'
          onChange={handleChange}

        />
        <Button id='BotonUserAdminPanel'  onClick={SearchUsers} variant="outline-success"><BsSearch /></Button>
      </Form>
      <List>
        {
          users.map((x) => {
            if (count > 7) { return }
            else {
              count++;
              return (
                <div id='CardUserSuperAdmin'>
                  <ListItem style={{ width: '180%' }}>
                    <ListItemAvatar>
                      <Avatar src="/broken-image.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary={x.name} secondary={x.isSuperAdmin ? x.mail + '   SUPERADMIN' : x.isAdmin ? x.mail + '   ADMIN' : x.mail} />
                    <div id='BotonesSuperAdminBTN'>
                      {!x.isAdmin && <Button onClick={(e) => handleAdmin(e)} value={x.id} style={{ margin: '3px' }} variant="info">Convertir Admin</Button>}
                      {x.isAdmin && !x.isSuperAdmin && <Button id='BTN_SuperAdmin' onClick={(e) => handleSuperAdmin(e)} value={x.name} style={{ margin: '3px' }} variant="dark">Convertir SuperAdmin</Button>}
                      {x.isAdmin && !x.isSuperAdmin && <Button onClick={(e) => handleDeshacer(e)} value={x.name} style={{ margin: '3px' }} variant="warning">Deshacer Admin</Button>}
                      <Button value={x.id} onClick={(e) => passwordResetShow(e)} style={{ margin: '3px' }} variant="secondary">Password reset</Button>

                      {!x.isSuperAdmin && <Button value={x.id} onClick={(e) => handleShowDelete(e)} style={{ margin: '3px' }} variant="danger">Eliminar</Button>}
                    </div>
                  </ListItem>

                </div>
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
          <Button variant="secondary" value={idUser} onClick={() => DeleteUserSelect()}>
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

