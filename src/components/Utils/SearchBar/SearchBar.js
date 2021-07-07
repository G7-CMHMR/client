import {FormControl, Button, Form} from 'react-bootstrap'
import {BsSearch} from 'react-icons/bs'
import './SearchBar.css'

function SearchBar() {
    return(

      //funcion que busque el input . 

   <div className="SearchBar">
    <Form className="d-flex">
      <FormControl id="formcontrol"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <Button variant="outline-success"><BsSearch/></Button>
    </Form>
   
 </div>
    )
}



export default SearchBar