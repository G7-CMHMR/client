import Separate from '../components/Utils/Separate/Separate'
import './Product.css'
import Images from '../components/Product/Images/Images'
import Description from '../components/Product/Description/Description'
import ProductInfo from '../components/Product/ProductInfo/ProductInfo'
import QandA from '../components/Product/QandA/QandA'
import SellerInfo from '../components/Product/SellerInfo/SellerInfo'
import Similars from '../components/Product/Similars/Similars'




function Product() {

    return (
        <div className='DetailContainer'>
        <Separate></Separate>

        <div id='ContentDetail'>

            <div id='SecondNav'>
                <h3>Monitores / Monitor Samsung 27 pulgadas</h3>
            </div>

            <div id='FirstSection'>
                <div id='ImagesAndSimilars'>
                    <div id='Images'>
                        <Images></Images>
                    </div>
                    <div id='Similars'>
                        <h1>Similars</h1>
                    </div>
                </div>
                <div id='ProductInfo'>
                    <ProductInfo></ProductInfo>
                </div>
            </div>

            <div id='SecondSection'>
                <div id='Description'>
                <h1>Descripcion</h1>
                </div>
                <div id='SellerInfo'>
                <h1>Informacion Del Vendedor</h1>
                </div>
            </div>

            <div id='Questions'>
            <h1>Preguntas</h1>
            </div>

        </div>

        <Separate></Separate>
    </div>
    )
}

export default Product
