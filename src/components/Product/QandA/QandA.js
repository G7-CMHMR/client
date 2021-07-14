import Ask from "./Ask/Ask";
import Question from "./Question/Question.js";
import './QandA.css'


function QandA() {

let preguntas = [
    {
        user:"roberto",
        question:"tenes stock?",
        answer:"ya te dije que sii",
        date:"15-05-2021"
    },{
        user:"hola232",
        question:"puedo comprar?",
        answer:undefined,
        date:"20-04-2021"
    }
]

    return(
        <div>
            <h3 style={{padding:"1%"}}>Preguntas</h3>
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
            </div>
        </div>
    )
}



export default QandA