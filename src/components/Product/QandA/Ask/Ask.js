//componente para crear una poregunta en la publicacion
import React, { useState } from 'react';
import{FormControl, InputGroup, Button} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { changeStateLoginAction } from '../../../../redux/Actions/User/Actions';
import { createQuestionAction } from '../../../../redux/Actions/Products/Actions';

function Ask() {
    const dispatch = useDispatch();
    const actualUser = useSelector((state) => state.userReducer.userData)
    const actualProduct = useSelector((state) => state.productsReducer.productDetail)
    const [ question, setQuestion ] = useState('')
    const [ error, setError ] = useState(false)
    const onSubmit = e => {
        e.preventDefault()
        if(actualUser && Object.keys(actualUser).length === 0){
            return dispatch(changeStateLoginAction(true))
        }
        if(question.length < 5) {
           return setError(!error)
        } 
            const newQuestion = {
                productId: actualProduct.id,
                userId: actualUser.id,
                question: question
            }
            dispatch(createQuestionAction(newQuestion))
        
        
       /*  e.preventDefault()
        
        if(question === '' || question.length < 10) return;
        let newQuestion = {
            question: question,
            answer: null,
            productId: actualProduct.id,
            userId: actualUser.id

        }
        actualProduct.questions.push(newQuestion)
         */
        
    }


    return(
        <div>
            <form
                onSubmit={onSubmit}
            >
                {error ?<p>Recuerda realizar una pregunta que el vendedor entienda</p> :null}
            <InputGroup className="mb-3">
                <FormControl
                placeholder="¿Tenes alguna duda? Preguntale al vendedor"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                name="question"
                onChange={e => setQuestion(e.target.value)}
                />
                <Button variant="outline-secondary" id="button-addon2" type="submit">
                Preguntar
                </Button>
            </InputGroup>
            </form>
        </div>
    )
}



export default Ask