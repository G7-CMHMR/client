import './Question.css'

function Question({user, question, answer, date}) {
    return(
        <div id="QuestionCard" >
            <button id="eliminarPregunta">X</button>
            <div id="contenedorQuestion">
                <p style={{color:"gray"}}>{date}</p><h4>{user} preguntó:<br /> <span id="spanPregunta" style={{color:"black"}}>{question}</span></h4>
                
            </div>
            
            <div id="answerCard">
                {answer?  <h5> {answer} </h5>: <h5>El vendedor todavía no contestó</h5>}
            </div>
        </div>
    )
    
}



export default Question