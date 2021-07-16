import { useDispatch, useSelector } from 'react-redux';
import { FormControl, Button, Form } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import './SearchBar.css'
import {TextField} from '@material-ui/core';
import { onChangeSearchAction } from '../../../redux/Actions/Search/Actions';

function SearchBar() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.SearchReducer.search);
  const results = useSelector((state) => state.SearchReducer.results);
  
  
  return (
    //funcion que busque el input.
    <div className="SearchBar">
      <Form className="d-flex">
        <FormControl id="formcontrol"
          type="search"
          placeholder="Buscar..."
          aria-label="Search"
          value={search}
          onChange={(e) => dispatch(onChangeSearchAction(e.target.value))}       
        />
        <Button variant="outline-warning" id='SearchbarButton' ><BsSearch /></Button>
      </Form>
      <ul>
      {results.length !== 0 ? results.map((result) => (<li  >{result.name}</li>) ):null}
      </ul>
      
    </div>
  )
}



export default SearchBar