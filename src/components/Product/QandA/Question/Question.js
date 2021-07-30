import { getProductDetail, deleteQuestionAction } from '../../../../redux/Actions/Products/Actions';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import './Question.css'

function Question({id, user, question, answer, date, imagen}) {

    const dispatch = useDispatch();
    const idProducto = useSelector((state) => state.productsReducer.productDetail.id)
    const actualUser = useSelector((state) => state.userReducer.userData)

    /* useEffect(() => {
        dispatch(getProductDetail(idProducto))
      }, [dispatch, idProducto])  */

    const deleteQuestion = () => {
        const porEliminar = {
            questionId: id
        }
        dispatch(deleteQuestionAction(porEliminar, idProducto))        
    }
    if(imagen === 'null'){
        imagen = null
    }
    if(answer === 'null'){
        answer = null
    }
    
    return(
        <div id="QuestionCard" >
            {actualUser.isAdmin ?<button id="eliminarPregunta" onClick={deleteQuestion}>X</button> : null}
            <div id="contenedorimagen">

            {imagen ?<img alt="soyunaimagen" src={imagen[0]}/> :null}
            
            <div id="contenedorQuestion">
                <p style={{color:"gray"}}>{date}</p><h4>{user} preguntó:<br /> <span id="spanPregunta" style={{color:"black"}}>{question}</span></h4>
                
            </div>
            </div>
            <div id="answerCard">
                {answer?  <h5> {answer} </h5>: <h5>El vendedor todavía no contestó</h5>}
            </div>
            
        </div>
    )
    
}



export default Question