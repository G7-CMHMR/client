import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  becomeSellerAction, attemptBecomeSellerAction } from '../../../redux/Actions/User/Actions';
import '../Modals.css'
import { toast } from 'react-toastify';

const BecomeSeller = () => {
    const dispatch = useDispatch();
    const stateBeSeller = useSelector((state) => state.userReducer.becomeseller);
    const userData = useSelector((state) => state.userReducer.userData);
    const openBeSeller = () => {
        dispatch(becomeSellerAction(!stateBeSeller))
    }
    // UseState Fields
    const [input, setInput] = React.useState({
        dni: null,
        cuil: null,
        phone:null,
        address:null,
        accountBank:null,
        location:null,
        commission: 0.1,
    })
    const [error, setError] = React.useState(false);
    const { dni, cuil, phone, address, accountBank, location, //commission 
    } = input;
    const onChangeForm = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault()
            setError(false)

        if( dni < 3 || cuil < 5 || phone.trim() === '' || address.trim() === '' || accountBank === '' || location.trim() === '') {
            setError(true)      
        }
            dispatch(attemptBecomeSellerAction({...input, id: userData.id}))
            toast.success('¡Ya puedes vender ingresando a tu panel!')
    }

    return (

        <div className="superposition">
            <div id="becomesellerbox" className="animate__animated animate__fadeIn animate_faster">
                <div className="contenedorX"><button id="X" onClick={openBeSeller}>X</button></div>
            <h1 id="becomeseller">SER VENDEDOR</h1>
            {error ?<p className="alert alert-danger">Todos los campos son necesarios</p>: null}
            <form
                onSubmit={onSubmit}
            >
                <br></br>
                <div className="containerInputBS">
                    <p
                    className="subtitleName">DNI</p>
                    <input 
                        name="dni"
                        type="number"
                        placeholder="Numero de Identificacion Ciudadana"
                        className="inputslogin"
                        onChange={onChangeForm} 
                    />
                </div>
                <div className="containerInputBS">
                    <p
                    className="subtitleName">CUIL</p>
                    <input 
                        name="cuil"
                        type="number"
                        placeholder="Código Único de Identificación Laboral"
                        className="inputslogin"
                        onChange={onChangeForm} 
                    />
                </div>
                <div className="containerInputBS">
                    <p
                    className="subtitleName">CUIT</p>
                    <input 
                        name="location"
                        type="string"
                        placeholder="Clave Única de Identificación Tributaria "
                        className="inputslogin" 
                        onChange={onChangeForm}
                    />
                </div>
                <div className="containerInputBS">
                    <p
                    className="subtitleName">TELEFONO CONTACTO</p>
                    <input 
                        name="phone"
                        type="string"
                        placeholder="Numero de Identificacion Ciudadana"
                        className="inputslogin" 
                        onChange={onChangeForm}
                    />
                </div>
                <div className="containerInputBS">
                    <p
                    className="subtitleName">DIRECCION OFICINA/TIENDA</p>
                    <input 
                        name="address"
                        type="text"
                        placeholder="Donde se pueda recoger"
                        className="inputslogin" 
                        onChange={onChangeForm}
                    />
                    <br />
                </div> 
                <div className="containerInputBS">
                    <p
                    className="subtitleName">CUENTA BANCARIA</p>
                    <input 
                        name="accountBank"
                        type="number"
                        placeholder=""
                        className="inputslogin" 
                        onChange={onChangeForm}
                    />
                </div>
                <div className="containerInputBS">
                    <p
                    className="subtitleName">LOCALIDAD/PROVINCIA</p>
                    <input 
                        name="location"
                        type="string"
                        placeholder="Ejem: Buenos Aires"
                        className="inputslogin" 
                        onChange={onChangeForm}
                    />
                </div>
                    <input type="submit" value="Vender" className="buttonInitiate" />
            </form>
            </div>
        </div>
      );
}
 
export default BecomeSeller;