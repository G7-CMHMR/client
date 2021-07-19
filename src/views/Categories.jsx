import './Categories.css'
import Carousel from '../components/Utils/Carousel/Carousel'
import CategoryFilters from '../components/Category/CategoryFilters/CategoryFilters'
import CategoryProductCards from '../components/Category/CategoryProductCards/CategoryProductCards'
import Separate from '../components/Utils/Separate/Separate'
import {useDispatch, useSelector} from 'react-redux'
import { getFavourites } from '../redux/Actions/Favourites/Actions'


function Categories() {
    const userReducer = useSelector(state => state.userReducer.userData)
    const dispatch = useDispatch()

    userReducer.id? dispatch(getFavourites(userReducer.id)): console.log('Loading..')
    
    return (
        <div className='Container'>
            <Separate></Separate>
            <div id='CategoriesContent'>
                <Carousel></Carousel>
                <div id="Categories">
                    <CategoryFilters></CategoryFilters>
                    <CategoryProductCards></CategoryProductCards>
                </div>
            </div>
            <Separate></Separate>
        </div>
    )
}

export default Categories
