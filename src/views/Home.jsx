import './Home.css'
import QuizAndBuild from '../components/Home/QuizAndBuild/QuizAndBuild'
import Carousel from '../components/Utils/Carousel/Carousel'
import ProductCards from '../components/Home/ProductCards/ProductCards'
import Separate from '../components/Utils/Separate/Separate'
import { TabContext } from '@material-ui/lab'
import { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getProductsOfferInHome, ClearProducts, getProductsInterested } from '../redux/Actions/Products/Actions'
import { confirmAccount } from '../redux/Actions/User/Actions'

import { useParams } from 'react-router-dom'
import clientAxios from '../config/axios'
import { toast } from 'react-toastify'

function Home(props) {

  const { emailToken } = useParams();
  const userReducer = useSelector(state => state.userReducer.userData)
  const productsReducer = useSelector(state => state.productsReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    if (emailToken) {
      dispatch(confirmAccount(emailToken));
      props.history.replace('/');
      toast.success('La cuenta fue confirmada con éxito');
    }
  }, []);



  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(getProductsOfferInHome())
    dispatch(getProductsInterested(userReducer.id))
    return () => {
      dispatch(ClearProducts())
    }
  }, [userReducer])


  return (
    <div className='Container'>
      <Separate></Separate>

      <div id='HomeContent'>
        <QuizAndBuild></QuizAndBuild>
        <Carousel></Carousel>
        <br></br>
        {productsReducer.productsInterested.length > 0 ?  <ProductCards products={productsReducer.productsInterested} title={"Según tu interés TODO"}></ProductCards> : ''}
        <ProductCards products={productsReducer.productsOffer} title={"Ofertas"}></ProductCards>
        <ProductCards products={productsReducer.products} title={"Destacados"}></ProductCards>
      </div>

      <Separate></Separate>
    </div>
  )
}


export default Home
