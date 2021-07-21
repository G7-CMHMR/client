import React, { useState } from 'react';
import Ask from "./Ask/Ask";
import Question from "./Question/Question.js";
import './QandA.css'

import { useSelector, useDispatch } from 'react-redux'
import { changeStateLoginAction } from '../../../redux/Actions/User/Actions'

function QandA() {
const dispatch = useDispatch();
const [ question, setQuestion ] = useState('')
const actualProduct = useSelector((state) => state.productsReducer.productDetail)
const actualUser = useSelector((state) => state.userReducer.userData)
const questions = [];

/* let preguntas = [
    {
        //iduser 
        //idproduct 
        //title:"roberto",
        question:"tenes stock?",
        answer:"ya te dije que sii",
        
    },{
        //iduser
        //idproduct
        
        question:"puedo comprar?",
        answer:null,
        
    }
] */
    const onSubmit = e => {
        e.preventDefault()
        if(actualUser && Object.keys(actualUser).length === 0){
            return dispatch(changeStateLoginAction(true))
        }
        if(question === '' || question.length < 10) return;
        let newQuestion = {
            question: question,
            answer: null,
            productId: actualProduct.id,
            userId: actualUser.id

        }
        questions.push(newQuestion)
        
        
    }

    return(
        <div>
<h3 style={{padding:"1%"}}>Preguntas</h3>
    <hr/>
    <form
        onSubmit={onSubmit}
    >
    <input name="question" onChange={e => setQuestion(e.target.value)}/>
    <input type="submit" value="Preguntar"/>
    </form>
    

    {/* <div id="questionsCards">
                    {
                        questions.map((x)=>{
                            return <Question user={x.user} question={x.question}
                            date={x.date} answer={x.answer}/>
                        })
                    }
                </div> */}
    

            {/* 
            <hr></hr>
            <Ask/>
            <div>
                <h4>Últimas preguntas</h4>
                <hr></hr>
                <div id="questionsCards">
                    {
                        preguntas.map((x)=>{
                            return <Question user={x.user} question={x.question}
                            date={x.date} answer={x.answer}/>
                        })
                    }
                </div>
            </div> */}
        </div>
    )
}



export default QandA