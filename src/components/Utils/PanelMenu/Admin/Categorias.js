import React, { useEffect, useState } from 'react'
import {Button, Modal} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import ProductCategory from './ProductCategory';
import { getAllProducts, getProductsOfCategory } from '../../../../redux/Actions/Products/Actions';
import { addCategory, editCategory } from '../../../../redux/Actions/Admin/Actions';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default function Categorias() {
    const categories = useSelector(state => state.productsReducer.categories)
    const productsReducer = useSelector(state => state.productsReducer)
    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [categoryName, setCategoryName] = useState(false);
    const [addcategory, setaddcategory] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const handleCloseAdd = () => setShowAdd(false);
    const handleCloseAddx = () => {
      dispatch(addCategory({category_name:addcategory}))
      setOpen(true)
      setShowAdd(false)
    }
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') { return} 
      setOpen(false);
      setOpen1(false)
      };
    const handleShowAdd = () => setShowAdd(true);
    const handleCloseEdit = () => setShowEdit(false);
    const handleCloseEditX = () => {
      dispatch(editCategory({category:categoryName, newTitle:addcategory}))
      setShowEdit(false)
      setOpen1(true)
    }
    const handleShowEdit = (e) => setShowEdit(true);
    const dispatch = useDispatch()
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = (e) => setShowDelete(true);
    function AddCategoryName(e){ setaddcategory(e.target.value)}
    useEffect(() => {
      if (categoryName) dispatch(getProductsOfCategory(categoryName))
      else{dispatch(getAllProducts())}
  }, [dispatch, categoryName])    
      function handleChange(e){setCategoryName(e.target.value)}
  
    return (
        <div id='ContainerCategoryAdmin'>
          <div id='FiltersCategoryAdmin'>
            <div id='headerCategoryADmin'>
              <div id='selectCategoryAdmin'>
              <select onChange={(e)=>handleChange(e)} style={{ fontSize:'2rem',width:'16rem'}} id='SelectCategoryAdmin'>
                <option>Elegir categoria</option>
                {categories.map((x)=>{return (<option value={x.title}>{x.title}</option>)})}
              </select>
                <div id='buttonsCategoryAdmin'>
                <Button onClick={(e)=>handleShowEdit(e)} style={{margin:'3px'}} 
                variant="info">Modificar</Button>
                <Button style={{margin:'3px'}} onClick={(e)=>handleShowDelete(e)} 
                variant="danger">Eliminar</Button>
              </div>
              </div>
                  <Button onClick={handleShowAdd} variant="success">AGREGAR CATEGORIA</Button>
              </div>
          </div>
          <div id='ProductsCategoryAdmin'>
            { productsReducer.products.map((x) => {return ( <ProductCategory id={x.id} 
            seller={x.seller} name={x.name} images={x.images}/>) }) }
          </div>
          <Modal size="lg" aria-labelledby="contained-modal-title-vcenter"
      centered show={showAdd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir nombre de la nueva categoria</Modal.Title>
        </Modal.Header>
       <Modal.Body><input onChange={(e)=>AddCategoryName(e)}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdd}>VOLVER</Button>
          <Button variant="success" onClick={handleCloseAddx}> CREAR </Button>
        </Modal.Footer>
      </Modal>
      <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo nombre para la categoria {categoryName}</Modal.Title>
        </Modal.Header>
        <Modal.Body><input onChange={(e)=>AddCategoryName(e)}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}> VOLVER </Button>
          <Button variant="success" onClick={handleCloseEditX}> MODIFICAR</Button>
        </Modal.Footer>
      </Modal>
      <Modal size="lg" aria-labelledby="contained-modal-title-vcenter"
      centered show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Esta acción eliminará la categoria {categoryName} </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseDelete}> VOLVER </Button>
          <Button variant="secondary" onClick={handleCloseDelete}> ELIMINAR </Button>
        </Modal.Footer>
      </Modal>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success">Se creo la categoria con éxito </Alert>
      </Snackbar>
    | <Snackbar open={open1} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success">Se cambio el nombre a {addcategory}</Alert>
      </Snackbar>
        </div>
    )
}
