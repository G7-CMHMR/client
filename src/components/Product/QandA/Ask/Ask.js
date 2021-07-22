//componente para crear una poregunta en la publicacion
import React, { useState } from 'react';
import{FormControl, InputGroup, Button} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { changeStateLoginAction } from '../../../../redux/Actions/User/Actions'

function Ask() {
    const dispatch = useDispatch();
    const actualUser = useSelector((state) => state.userReducer.userData)
    const [ question, setQuestion ] = useState('')
    const onSubmit = e => {
        e.preventDefault()
        if(actualUser && Object.keys(actualUser).length === 0){
            return dispatch(changeStateLoginAction(true))
        }
        console.log('Paso las validaciones ')
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