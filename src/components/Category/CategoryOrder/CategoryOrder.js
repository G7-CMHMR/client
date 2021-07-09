//Ordenamiento en Categorias
import './CategoryOrder.css'
import {Form} from 'react-bootstrap'

function CategoryOrder() {
    return(
    <div id="order">
       <Form.Control
        as="select"
        className="mr-sm-2"
        id="inlineFormCustomSelect"
        custom
      >
        <option value="0">ORDER</option>
        <option value="1">One</option>
        <option value="2">Two</option>
      </Form.Control>

    </div>    
    )
}



export default CategoryOrder