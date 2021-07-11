import './Home.css'
import QuizAndBuild from '../components/Home/QuizAndBuild/QuizAndBuild'
import Carousel from '../components/Utils/Carousel/Carousel'
import ProductCards from '../components/Home/ProductCards/ProductCards'
import Separate from '../components/Utils/Separate/Separate'

function Home() {

    const products = [
        {
          name: "Acer Accesorio para computadora",
          status: "New",
          price: 129.99,
          valuation: 5,
          stock: 44,
          brand: "Acer",
          description: "23.8 Full HD IPS widescreen with 1920 x 1080 resolution",
          seller: "Giorgio",
          images: [
            "https://images-na.ssl-images-amazon.com/images/I/91CAvrhwPbL._AC_SX450_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61FqnfB6QzL._AC_SX450_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/71TIMU3KATL._AC_SX450_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/91u-JxjgBoL._AC_SX450_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/91K9SyGiyzL._AC_SX466_.jpg"
          ],
          categories: [
            "monitor"
          ],
          discount: 12,
          delivery: true,
          id: 2
        },
        {
          name: "Teclado Logitech G213 Prodigy Gaming Keyboard, LIGHTSYNC RGB retroiluminado",
          status: "Nuevo",
          price: 39.99,
          valuation: 5,
          stock: 101,
          brand: "Logitech ",
          description: "Iluminación de espectro de colores brillantes: personaliza cinco zonas de iluminación individuales de un espectro de más de 16. 8 millones de colores. Cambia los colores para que coincida con tu configuración, juegos específicos o para mostrar tus colores favoritos.",
          seller: "Giorgio",
          images: [
            "https://images-na.ssl-images-amazon.com/images/I/61Rn7n7tg-L._AC_SY450_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/616mQhwJNtL._AC_SY450_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/610d47EIn1L._AC_SY450_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/71RDYwxnlDL._AC_SY450_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61I52zZ-7qL._AC_SY450_.jpg"
          ],
          categories: [
            "keyboard"
          ],
          discount: 10,
          delivery: true,
          id: 5
        },
        {
          name: "Crucial Ballistix - Kit de memoria RAM DDR4 2400 MHz para computadoras de escritorio",
          status: "Nuevo",
          price: 88.5,
          valuation: 4,
          stock: 0,
          brand: "Crucial",
          description: "Compatibilidad con XMP 2.0 para overclocking automático o ejecutarse en el perfil predeterminado de JEDEC",
          seller: "Nacho",
          images: [
            "https://images-na.ssl-images-amazon.com/images/I/51V3WQnH77L._AC_SX450_PIbundle-2,TopRight,0,0_SH20_.jpg"
          ],
          categories: [
            "ram"
          ],
          discount: 35,
          delivery: true,
          id: 8
        },
        {
          name: "ROG Strix Z590-A Gaming WiFi 6 LGA 1200(Intel 11th/10thGen)",
          status: "Nuevo",
          price: 323,
          valuation: 4,
          stock: 70,
          brand: "ASUS",
          description: "Intel LGA 1200 Socket: diseñado para liberar el máximo rendimiento de los procesadores Intel Core de 11ª generación",
          seller: "Giorgio",
          images: [
            "https://images-na.ssl-images-amazon.com/images/I/91QRYoLkhEL._AC_SY450_.jpg"
          ],
          categories: [
            "mother"
          ],
          discount: 5,
          delivery: true,
          id: 12
        },
        {
          name: "TEAMGROUP T-Force Dark Z 32GB Kit (2x16GB) DDR4 Dram 3200MHz (PC4-25600)",
          status: "Nuevo",
          price: 182,
          valuation: 4.5,
          stock: 32,
          brand: "DarkZ",
          description: "Diseño de armadura para una protección perfecta",
          seller: "Lucemon",
          images: [
            "https://images-na.ssl-images-amazon.com/images/I/71OuXckpcPL._AC_SX522_PIbundle-2,TopRight,0,0_SH20_.jpg"
          ],
          categories: [
            "ram"
          ],
          discount: 69,
          delivery: true,
          id: 14
        },
        {
          name: "Acer K242HYL Hbi 23.8 Full HD (1920 x 1080) Monitor con tecnología AMD Radeon FreeSync, 75Hz, 1 ms (VRB) (puerto HDMI 1.4 y puerto VGA) Negro",
          status: "Nuevo",
          price: 139,
          valuation: 1,
          stock: 110,
          brand: "acer",
          description: "Relación de aspecto 16:9. Soporta 16,7 millones de colores. Inclinación ergonómica: -5 grados a 20 grados",
          seller: "Totodile",
          images: [
            "https://images-na.ssl-images-amazon.com/images/I/714F6KusyaL._AC_SX450_.jpg"
          ],
          categories: [
            "monitor"
          ],
          discount: 20,
          delivery: true,
          id: 22
        },
        {
          name: "TEAMGROUP Elite DDR4 Kit de 32 GB (2 x 16 GB) 2666 MHz PC4-21300 CL19 sin búfer no ECC 1.2 V SODIMM 260-Pin ordenador portátil PC módulo de memoria RAM actualización – TED432G2666C19DC-S01-32GB Kit (2 GB (2 GB)",
          status: "Nuevo",
          price: 170,
          valuation: 5,
          stock: 8,
          brand: "teamgroup",
          description: "MKit de memoria DDR4 de 32 GB (2 x 16 GB) 2666 MHz PC4-21300 CL19 SODIMM de 260 pines para portátil",
          seller: "Lucemon",
          images: [
            "https://images-na.ssl-images-amazon.com/images/I/81f2sfT42FS._AC_SY450_PIbundle-2,TopRight,0,0_SH20_.jpg"
          ],
          categories: [
            "ram"
          ],
          discount: 100,
          delivery: true,
          id: 29
        }
      ]

    return (
        <div className='Container'>
            <Separate></Separate>

            <div id='HomeContent'>
                <QuizAndBuild></QuizAndBuild>
                <Carousel></Carousel>
                <ProductCards products={products} title={"Ofertas"}></ProductCards>
                <ProductCards products={products} title={"Destacados"}></ProductCards>
            </div>

            <Separate></Separate>
        </div>
    )
}

export default Home
