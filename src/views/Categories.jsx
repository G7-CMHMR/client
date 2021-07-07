import './Categories.css'
import Carousel from '../components/Utils/Carousel/Carousel'
import CategoryFilters from '../components/Category/CategoryFilters/CategoryFilters'
import CategoryOrder from '../components/Category/CategoryOrder/CategoryOrder'
import CategoryProductCards from '../components/Category/CategoryProductCards/CategoryProductCards'




function Categories() {

    return (
        <div id='CategoriesContent'>  
            <Carousel></Carousel>
            <CategoryFilters></CategoryFilters>
            <CategoryOrder></CategoryOrder>
            <CategoryProductCards></CategoryProductCards>
        </div>
    )
}

export default Categories
