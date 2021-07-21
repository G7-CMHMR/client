import Separate from '../components/Utils/Separate/Separate'
import './PCBuilder.css'

import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from "react-router";
import { useState } from 'react';
import { getPurchaseOrderHistory } from '../redux/Actions/PurchaseOrder/Actions'
import { Link } from 'react-router-dom'
import { Button, TextField } from '@material-ui/core'
import Icon from '@material-ui/core/Icon';
import CardsPC from '../components/PCBuilder/CardsPCBuilder/CardsPC';
import { getProductsOfCategory } from '../redux/Actions/Products/Actions'
import { InputTwoTone } from '@material-ui/icons';


function PCBuilder() {

    const { Brand } = useParams()
    const [counter, setCounter] = useState(1)
    const [display, setDisplay] = useState('')
    const dispatch = useDispatch()

    const [input, setInput] = useState({
        Procesador: 0,
        CoolerCPU: 0,
        PlacaMadre: 0,
        PlacaDeVideo: 0,
        MemoriaRam: 0,
        Almacenamiento: 0,
        Teclado: '',
        Mouse: '',
        Gabinete: '',
        Fuente: '',
        Monitor: '',
        Total: 0,
    })

    useEffect(() => {
        console.log(display)
        dispatch(getProductsOfCategory(display))
    }, [display])

    useEffect(() => {
        setInput((all) => setInput({
            ...all,
            Total: all.Procesador + all.CoolerCPU
        }))
    }, [input.Procesador, input.CoolerCPU, input.PlacaMadre, input.MemoriaRam, input.PlacaDeVideo])

    useEffect(() => {
        switch (counter) {
            case 1: setDisplay('Procesador'); setInput({ ...input, 'Procesador': 0 }); break;
            case 2: setDisplay('CoolersCPU'); setInput({ ...input, 'CoolerCPU': 0 }); break;
            case 3: setDisplay('PlacaMadre'); break;
            case 4: setDisplay('MemoriaRam'); break;
            case 5: setDisplay('PlacadeVideo'); break;
            default: console.log('ERROR')
        }
    }, [counter])

    function Siguiente() {
        if (counter < 11) { setCounter(counter + 1) }
    }
    function Anterior() {
        if (counter > 1) { setCounter(counter - 1) }
    }




    return (

        <div className='DetailContainer'>
            <Separate></Separate>
            <div id='ContentDetail'>
                {Brand ?
                    <div>
                        <div id='ArmaTuPc_Selector'>
                            <Button id='ArmaTuPc_Selector_Btn' onClick={Anterior} variant="contained" color="primary">Anterior</Button>
                            <TextField id="filled-basic" disabled label={display} variant="filled" />
                            <Button id='ArmaTuPc_Selector_Btn2' onClick={Siguiente} variant="contained" color="primary">Siguiente</Button>
                            <Button id="Total2" variant="contained" color="primary" href="#contained-buttons">{`Total: $${input.Total ? input.Total : '0'}`}</Button>
                        </div>
                        <div id='SelectContentArmaTuPc'>

                            <div id='ArmaTuPc_Left'>
                                {input.Procesador == '' ? <img id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso1.png' onClick={() => setCounter(parseInt(1))}></img> : <img id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso1_sel.png' onClick={() => setCounter(parseInt(1))}></img>}
                                <img id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso1.png' onClick={() => setCounter(parseInt(3))}></img>
                                <img id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso4.png' onClick={() => setCounter(parseInt(4))}></img>
                                <img id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso5.png' onClick={() => setCounter(parseInt(5))}></img>
                                <img id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso1.png' onClick={() => setCounter(parseInt(6))}></img>
                                <img id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso1.png' onClick={() => setCounter(parseInt(7))}></img>
                                <img id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso1.png' onClick={() => setCounter(parseInt(8))}></img>
                                <img id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso1.png' onClick={() => setCounter(parseInt(9))}></img>
                                <img id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso1.png' onClick={() => setCounter(parseInt(10))}></img>
                                <img id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso1.png' onClick={() => setCounter(parseInt(11))}></img>
                                <img id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso1.png' onClick={() => setCounter(parseInt(12))}></img>

                            </div>
                            <div id='ArmaTuPc_Right'>
                                { }
                                <CardsPC input={input} setInput={setInput} Siguiente={Siguiente}></CardsPC>
                            </div>
                        </div>
                    </div>
                    :
                    <div>

                        <h1>¡Armá tu PC!</h1>
                        <div id='SelectContent'>
                            <div id='Content_Intel'>
                                <Link to='/ArmaTuPc/Intel'><button id='ButtonContentIntel'>INTEL</button></Link>
                            </div>
                            <div id='Content_Amd'>
                                <Link to='/ArmaTuPc/Amd' ><button id='ButtonContentAmd'>AMD</button></Link>
                            </div>
                        </div>
                    </div>
                }
            </div>


            <Separate></Separate>
        </div >
    )
}

export default PCBuilder
