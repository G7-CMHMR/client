
import Ask from "./Ask/Ask";
import Question from "./Question/Question";
import Answer from './Answer/Answer';
import './QandA.css';
import { useSelector } from 'react-redux';
import { LeakAddTwoTone } from "@material-ui/icons";

function QandA() {

const actualUser = useSelector((state) => state.userReducer.userData);
const actualSeller = useSelector((state) => state.sellerReducer.ProductsSeller);
const actualProduct = useSelector((state) => state.productsReducer.productDetail); 

let mostrarAnswer = false;

if(actualUser && Object.keys(actualUser).length > 0){
    if(actualUser && actualUser.idSeller === actualProduct.seller.id){
        mostrarAnswer = true;
    }     
    else {
        mostrarAnswer = false 
    }
}

//console.log(coincidence.sellerId)
    return(
        <div >
            <h3 style={{padding:"1%"}} >Preguntas</h3>
            <hr/>
            <Ask />
            <div id="questionsCards">
                {
                actualProduct.questions && 
                actualProduct.questions.map((x) => {
                    
                    

                    return <div><Question 
                            user={x.user} 
                            question={x.question}
                            date={x.date}
                            answer={x.response}
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