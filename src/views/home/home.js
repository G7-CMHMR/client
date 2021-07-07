import './Home.css'



function Home() {
    return (
        <div className='Container'>
            <div id='Separate'></div>

            <div id='Content'>
                <div id='PhotosHome'>
                    <h1>Quiz and ArmarPC</h1>
                </div>
                <div id='CarrouselHome' class='carousel slide' data-ride='carousel'>
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
            
                </div>
                <div id='CardsHome'>
                    <h1>ProductCards</h1>
                </div>
            </div>

            <div id='Separate'></div>
        </div>
    )
}



export default Home




