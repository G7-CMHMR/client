import './Question.css'

function Question({user, question, answer, date}) {
    return(
        <div id="QuestionCard">
            <div>
                <p style={{color:"gray"}}>{date}</p><h4>{user} preguntó: <span style={{color:"black"}}>{question}</span></h4>
                
            </div>
            
            <div id="answerCard">
                {answer?  <h5> {answer} </h5>: <h5>El vendedor todavía no contestó</h5>}
            </div>
        </div>
    )
    
}



export default Question