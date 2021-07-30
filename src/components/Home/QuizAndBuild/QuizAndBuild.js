import './QuizAndBuild.css'
import { Link } from 'react-router-dom'
function QuizAndBuild() {



    return (
        <div id='ContainerQuizAndBuild'>
            <Link to='/Quiz'><div id='Quiz_z'></div></Link>
            <Link to='/Quiz'><div id='Quiz_z2'></div></Link>
            <Link to='/ArmaTuPc'><div id='BuildPC_z'></div></Link>
        </div>
    )
}



export default QuizAndBuild