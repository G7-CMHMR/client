import Separate from '../../components/Utils/Separate/Separate';
import './Questions.css'

import Question from '../../components/Product/QandA/Question/Question';
import AnswerPanel from '../../components/Product/QandA/Answer/AnswerPanel';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";
import { getAllQuestionsAction, publishResponseAction, deleteQuestionAction } from '../../redux/Actions/Seller/Actions'


function Questions() {
     const dispatch = useDispatch();
    const userActual = useSelector((state) => state.userReducer.userData)
    const questions = useSelector((state) => state.sellerReducer.AllQuestions)
    
    
    
    

  
      useEffect(() => {
      
      dispatch(getAllQuestionsAction({sellerId: userActual.idSeller}))
    }, [dispatch])  
    

    return (
    
        <div className='PanelContainerQuestion'>
            <Separate></Separate>

            <div id='PanelContentDetail'>
                <div>
               {questions && questions.map(x => <div><Question 
                            id={x.id}
                            user={x.userName} 
                            question={x.question}
                            date={x.date}
                            answer={x.response}
                            imagen={x.imagen}
                            key={x.id}
                        /><AnswerPanel id={x.id}/></div>)  }
                        </div>
            </div>

            <Separate></Separate>
        </div>
    )
}

export default Questions
