
import Ask from "./Ask/Ask";
import Question from "./Question/Question";
import Answer from './Answer/Answer';
import './QandA.css';
import { useSelector } from 'react-redux';
import { LeakAddTwoTone } from "@material-ui/icons";

function QandA() {

const actualUser = useSelector((state) => state.userReducer.userData);
//const actualSeller = useSelector((state) => state.sellerReducer.ProductsSeller);9
const actualProduct = useSelector((state) => state.productsReducer.productDetail); 
let existeQuestions = false;
let mostrarAnswer = false;

if(actualUser && Object.keys(actualUser).length > 0){
    if(actualProduct.questions && Array.isArray(actualProduct.questions)){
        existeQuestions = true;
        if(actualProduct && actualUser && actualUser.idSeller === actualProduct.seller.id){
            mostrarAnswer = true;
            
        }     
        else {
            mostrarAnswer = false 
            
        }
    }
    
}
//if(actualProduct.questions === []){
    //console.log(actualProduct.questions)
//}

//console.log(coincidence.sellerId)
    return(
        <div >
            <h3 style={{padding:"1%"}} >Preguntas</h3>
            <hr/>
            <Ask />
            <div id="questionsCards">
                {
                existeQuestions && 
                actualProduct.questions.map((x) => {
                    
                    

                    return <div><Question 
                            id={x.id}
                            user={x.userName} 
                            question={x.question}
                            date={x.date}
                            answer={x.response}
                            imagen={null}
                            key={x.id}
                        />
                        {mostrarAnswer ?
                                        x.response ? null  : <Answer id={x.id}/> : null}
                        
                        
                        </div>
                    })
                }
            </div>     
        </div>
    )
}



export default QandA