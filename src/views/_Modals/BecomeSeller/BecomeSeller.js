import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  becomeSellerAction } from '../../../redux/Actions/User/Actions';
import '../Modals.css'

const BecomeSeller = () => {
    const dispatch = useDispatch();
    const stateBeSeller = useSelector((state) => state.userReducer.becomeseller);
    const openBeSeller = () => {
        dispatch(becomeSellerAction(!stateBeSeller))
    }

    return (

        <div className="superposition">
            <div id="becomesellerbox" className="animate__animated animate__fadeIn animate_faster">
                <div className="contenedorX"><button id="X" onClick={openBeSeller}>X</button></div>
            <h1 id="becomeseller">SER VENDEDOR</h1>
            <form>
                <div className="containerInputBS">
                    <p
                    className="subtitleName">DNI</p>
                    <input 
                        name="dni"
                        type="number"
                        placeholder="Numero de Identificacion Ciudadana"
                        className="inputslogin" 
                    />
                </div>
                <div className="containerInputBS">
                    <p
                    className="subtitleName">CUIL</p>
                    <input 
                        name="cuil"
                        type="number"
                        placeholder="Numero de Identificacion de Empresa"
                        className="inputslogin" 
                    />
                </div>
                <div className="containerInputBS">
                    <p
                    className="subtitleName">TELEFONO CONTACTO</p>
                    <input 
                        name="telefono"
                        type="number"
                        placeholder="Numero de Identificacion Ciudadana"
                        className="inputslogin" 
                    />
                </div>
                <div className="containerInputBS">
                    <p
                    className="subtitleName">DIRECCION OFICINA/TIENDA</p>
                    <input 
                        name="telefono"
                        type="text"
                        placeholder="Donde se pueda recoger"
                        className="inputslogin" 
                    />
                    <br />
                </div>                
                <div className="submit">
                    <input type="submit" value="Iniciar" className="buttonInitiate"/>
                </div>
                
                
            </form>
            </div>
        </div>
      );
}
 
export default BecomeSeller;