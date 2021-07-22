import React, { useState } from 'react';
import Ask from "./Ask/Ask";
import Question from "./Question/Question.js";
import './QandA.css'

import { useSelector, useDispatch } from 'react-redux'


function QandA() {//

const actualProduct = useSelector((state) => state.productsReducer.productDetail)
//


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
    

    return(
        <div>
            <h3 style={{padding:"1%"}}>Preguntas</h3>
    <hr/>
{/* <h3 style={{padding:"1%"}}>Preguntas</h3>
    <hr/>
    <form
        onSubmit={onSubmit}
    >
    <input name="question" onChange={e => setQuestion(e.target.value)}/>
    <input type="submit" value="Preguntar"/>
    </form> */}
    <Ask />
    <div id="questionsCards">
        {
            actualProduct.questions && 
            actualProduct.questions.map((x) => {
                return <Question 
                            user={x.user} 
                            question={x.question}
                            date={x.date}
                            answer={x.response}
                        />
            })
        }
    </div> 
    

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