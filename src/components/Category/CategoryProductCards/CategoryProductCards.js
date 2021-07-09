import CategoryOrder from '../CategoryOrder/CategoryOrder'
import ProductCard from '../ProductCard/ProductCard'
import './CategoryProductCards.css'

function CategoryProductCards() {
    return(
        <div id="CategoryProductCards">
            <CategoryOrder></CategoryOrder>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>  
            
        </div>
    )
}



export default CategoryProductCards