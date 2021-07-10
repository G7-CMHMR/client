import { FormControl, Button, Form } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import './SearchBar.css'
import {TextField} from '@material-ui/core';

function SearchBar() {
  return (

    //funcion que busque el input . 

    <div className="SearchBar">
      <Form className="d-flex">
        <FormControl id="formcontrol"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <Button variant="outline-warning" id='SearchbarButton' ><BsSearch /></Button>
      </Form>
    </div>
  )
}



export default SearchBar