import './detail.css'



function Detail() {

    return (
        <div className='DetailContainer'>
            <div id='Separate'></div>

            <div id='ContentDetail'>

                {/* <div id='SecondNav'>
                    <h1>Aca van las categorias donde estoy con ref links /Monitores/NombreProducto</h1>
                </div> */}

                <div id='FirstSection'>
                    <div id='ImagesAndSimilars'>
                        <div id='Images'>
                            <h1>Images</h1>
                        </div>
                        <div id='Similars'>
                            <h1>Similars</h1>
                        </div>
                    </div>
                    <div id='ProductInfo'>
                        <h1>ProductInfo</h1>
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

            <div id='Separate'></div>
        </div>
    )
}



export default Detail