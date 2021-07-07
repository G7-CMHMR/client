import './Home.css'
import QuizAndBuild from '../components/Home/QuizAndBuild/QuizAndBuild'
import Carousel from '../components/Utils/Carousel/Carousel'
import ProductCards from '../components/Home/ProductCards/ProductCards'
import Separate from '../components/Utils/Separate/Separate'

function Home() {

    return (
        <div className='Container'>
            <Separate></Separate>

            <div id='HomeContent'>
                <QuizAndBuild></QuizAndBuild>
                <Carousel></Carousel>
                <ProductCards></ProductCards>
            </div>

            <Separate></Separate>
        </div>
    )
}

export default Home
