import React from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ProductCategory(images,id,name,seller) {
    console.log(name)
    return (
        <div id='ProductAdminCard'>
            <div id="MyProductCardOfPublicationAdmin">
                <div id='MyProductCardContainerPublicationAdmin'>
                    <img id="MyProductImage" alt="product" src={images[0]} />
                    <Link id="link" to={`/Producto/${id}`}>
                        <div class="Publication_MyProduct-details">
                            <h4 id="MyProductName">{name}</h4> </div>
                    </Link>
                    <div id="MyProductButtonsAdmin">

                        <Button  variant="danger">Eliminar</Button>
                        <Button  variant="info">Modificar</Button>
                        <Button  variant="warning">Pausar</Button>

                    </div>


                </div>
            </div>
        </div>
    )
}
