import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import{FormControl, InputGroup, Button} from 'react-bootstrap'
import { publishResponseAction } from "../../../../redux/Actions/Products/Actions";

const Answer = ({id}) => {
    const dispatch = useDispatch();
    const actualProduct = useSelector((state) => state.productsReducer.productDetail)
    const [ response, setResponse ] = useState('')
    const [ error, setError ] = useState(false)



const onSubmit = e => {
    e.preventDefault();
    if(response.length < 5 ){
        return setError(!error)
    }
    const Answering = {
        productId: actualProduct.id,
        questionId: id,
        response: response
    }
    dispatch(publishResponseAction(Answering))
}

    return (
    <div style={{width: "100%"}}>
        <form
            onSubmit={onSubmit} 
        >
            {/* {error ?<p>Recuerda realizar una pregunta que el vendedor entienda</p> :null} */}
        <InputGroup className="mb-3">
            <FormControl
            placeholder="Responder pregunta"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            name="response"
             onChange={e => setResponse(e.target.value)} 
            />
            <Button variant="outline-secondary" id="button-addon2" type="submit">
            Responder
            </Button>
        </InputGroup>
        </form>
    </div>  );
}
 
export default Answer;