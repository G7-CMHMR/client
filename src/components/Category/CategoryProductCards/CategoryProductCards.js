import CategoryOrder from '../CategoryOrder/CategoryOrder'
import ProductCard from '../ProductCard/ProductCard'
import './CategoryProductCards.css'

var prueba= [{
    titulo:"Producto de prueba",
    precio:4354,
    precioviejo:10000,
    vendedor:"Fulanito",
    estado:"Nuevo",
    freeship:true,
    stars:3.5,
    imagen:"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-logitech-g203-0.jpg"
},
{
    titulo:"Producto de prueba 2",
    precio:201,
    precioviejo:1000,
    vendedor:"Pirulo",
    estado:"Racondicionado",
    freeship:false,
    stars:5,
    imagen:"https://http2.mlstatic.com/D_NQ_NP_948354-MLA45141563332_032021-W.jpg"
}]

function CategoryProductCards() {
    return(
        <div id="CategoryProductCards">
            <CategoryOrder></CategoryOrder>
            {prueba.map((x)=>{
			return(
				<ProductCard titulo={x.titulo} imagen={x.imagen} 
                stars={x.stars} freeship={x.freeship} precio={x.precio}
                precioviejo={x.precioviejo} vendedor={x.vendedor}
                estado={x.estado} />
			)
		})}
        </div>
    )
}



export default CategoryProductCards