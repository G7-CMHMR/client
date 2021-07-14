//componente para crear una poregunta en la publicacion
import{FormControl, InputGroup, Button} from 'react-bootstrap'

function Ask() {
    return(
        <div>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="¿Tenes alguna duda? Preguntale al vendedor"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                Preguntar
                </Button>
            </InputGroup>
        </div>
    )
}



export default Ask