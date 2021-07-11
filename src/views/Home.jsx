import './Home.css'
import QuizAndBuild from '../components/Home/QuizAndBuild/QuizAndBuild'
import Carousel from '../components/Utils/Carousel/Carousel'
import ProductCards from '../components/Home/ProductCards/ProductCards'
import Separate from '../components/Utils/Separate/Separate'
import { TabContext } from '@material-ui/lab'
import { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

import { getAllProducts, getProductsOffer } from '../redux/Actions/Products/Actions'

function Home(props) {

  const productsReducer = useSelector(state => state.productsReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(getProductsOffer())
  }, [dispatch])


  return (
    <div className='Container'>
      <Separate></Separate>

      <div id='HomeContent'>
        <QuizAndBuild></QuizAndBuild>
        <Carousel></Carousel>
        <ProductCards products={productsReducer.productsOffer} title={"Ofertas"}></ProductCards>
        <ProductCards products={productsReducer.products} title={"Destacados"}></ProductCards>
      </div>

      <Separate></Separate>
    </div>
  )
}


export default Home
