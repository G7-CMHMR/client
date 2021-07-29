import Separate from '../../components/Utils/Separate/Separate';
import './Questions.css'

import Question from '../../components/Product/QandA/Question/Question';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";
import { getProductDetail } from '../../redux/Actions/Products/Actions'


function Questions() {
    const dispatch = useDispatch();
    const idProducto = useSelector((state) => state.productsReducer.productDetail.id)
    
    const questions = [
        {
            id: 1,
            userName: 'Jaroth',
            question: 'JUST LOOK LIKE YOU KNOW!',
            response: 'null',
            date: "2021-07-27T16:23:33.052Z",
            productId: 15,
            userId: 6,
            sellerId:"7ed66268-383b-4f15-bdc3-3b0213d1a18d"
        },
        {
            id: 2,
            userName: 'Jaroth',
            question: 'JUST LOOK LIKE YOU KNOW SOMETHING I SHOULD!',
            response: 'null',
            date: "2021-07-27T17:52:07.510Z",
            productId: 15,
            userId: 6,
            sellerId:"7ed66268-383b-4f15-bdc3-3b0213d1a18d"
        }
    
    ];

    

  
     useEffect(() => {
      dispatch(getProductDetail(idProducto))
    }, [dispatch, idProducto]) 


    return (
    
        <div className='PanelContainerQuestion'>
            <Separate></Separate>

            <div id='PanelContentDetail'>
                <div>
               {questions ? questions.map(x => <Question 
                            id={x.id}
                            user={x.userName} 
                            question={x.question}
                            date={x.date}
                            answer={x.response}
                            imagen={"x.imagen"}
                            key={x.id}
                        />):null}
                        </div>
            </div>

            <Separate></Separate>
        </div>
    )
}

export default Questions
