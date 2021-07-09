import './Categories.css'
import Carousel from '../components/Utils/Carousel/Carousel'
import CategoryFilters from '../components/Category/CategoryFilters/CategoryFilters'
import CategoryProductCards from '../components/Category/CategoryProductCards/CategoryProductCards'
import Separate from '../components/Utils/Separate/Separate'


function Categories() {

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
