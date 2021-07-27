import React, { useState } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Button, Modal, FormControl} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default function Categorias() {
    const categories = useSelector(state => state.productsReducer.categories)
    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [categorySelected, setCategorySelected] = useState('');

    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = (e) => {
        setCategorySelected(e.target.value)
        setShowEdit(true);
    }
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = (e) => {
        setCategorySelected(e.target.value)
        setShowDelete(true);
    }
    const useStyles = makeStyles((theme) => ({
        root: {
          width: '60%',
          maxWidth: 360,
          backgroundColor: theme.palette.background.paper,
        },
      }));
  
      const classes = useStyles();
    return (
        <div>
            <Button onClick={handleShowAdd} variant="success">AGREGAR CATEGORIA</Button>
    
            <List className={classes.root}>
            {
                    categories.map((x)=>{
            return (
            <ListItem style={{width:'180%'}}>
                
                    <ListItemText primary={x.title.toUpperCase()} />
                    <Button value={x.title} onClick={(e)=>handleShowEdit(e)} style={{margin:'3px'}} variant="info">Modificar</Button>
             <Button style={{margin:'3px'}} value={x.title} onClick={(e)=>handleShowDelete(e)} variant="danger">Eliminar</Button>
                    </ListItem>                    
            )
                    })
                }
                </List>
      <Modal 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={showAdd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir nombre de la nueva categoria</Modal.Title>
        </Modal.Header>
        <Modal.Body><FormControl
      aria-label="Example text with button addon"
      aria-describedby="basic-addon1"
    /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdd}>
            VOLVER
          </Button>
          <Button variant="success" onClick={handleCloseAdd}>
            CREAR
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo nombre para la categoria {categorySelected}</Modal.Title>
        </Modal.Header>
        <Modal.Body><FormControl
      aria-label="Example text with button addon"
      aria-describedby="basic-addon1"
    /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            VOLVER
          </Button>
          <Button variant="success" onClick={handleCloseEdit}>
            MODIFICAR
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Esta acción eliminará la categoria {categorySelected} </Modal.Title>
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
