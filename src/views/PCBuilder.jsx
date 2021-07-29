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
import { getProductsFilter } from '../redux/Actions/Products/Actions'
import { InputTwoTone } from '@material-ui/icons';


function PCBuilder() {

    const { Brand } = useParams()
    const [counter, setCounter] = useState(1)
    const [display, setDisplay] = useState('')
    const dispatch = useDispatch()

    const [input, setInput] = useState({
        Procesador: 0,
        CoolersCPU: 0,
        PlacaMadre: 0,
        PlacadeVideo: 0,
        Ram: [],
        Almacenamiento: [],
        Accesorios: [],
        Gabinete: 0,
        Fuentedealimentación: 0,
        Monitor: 0,
        Total: 0,
    })

    useEffect(() => {
        //console.log(display)
        dispatch(getProductsFilter(display))
    }, [display])

    useEffect(() => {

        // setInput((input) => setInput({
        //     ...input,
        //     "Total": 10000,
        // }))
        setInput({
            ...input,
            'Total': input.Procesador + input.CoolersCPU + input.PlacaMadre + input.PlacadeVideo +
                input.Gabinete + input.Fuentedealimentación + input.Monitor
        })
    }, [counter])

    useEffect(() => {
        switch (counter) {
            case 1: setDisplay('Procesador'); setInput({ ...input, "Procesador": 0 }); break;
            case 2: setDisplay('Coolers CPU'); setInput({ ...input, "CoolersCPU": 0 }); break;
            case 3: setDisplay('Placa Madre'); setInput({ ...input, "PlacaMadre": 0 }); break;
            case 4: setDisplay('Ram'); setInput({ ...input, 'Ram': [0] }); break;
            case 5: setDisplay('Placa de Video'); setInput({ ...input, 'PlacadeVideo': 0 }); break;
            case 6: setDisplay('Almacenamiento'); setInput({ ...input, 'Almacenamiento': [0] }); break;
            case 7: setDisplay('Gabinete'); setInput({ ...input, 'Gabinete': 0 }); break;
            case 8: setDisplay('Fuente de alimentación'); setInput({ ...input, 'Fuentedealimentación': 0 }); break;
            case 9: setDisplay('Accesorios'); setInput({ ...input, 'Accesorios': [0] }); break;
            case 10: setDisplay('Monitor'); setInput({ ...input, 'Monitor': 0 }); break;
            default: console.log('ERROR')
        }
    }, [counter])

    function Siguiente() {
        if (counter < 11) { setCounter(counter + 1) }
    }
    function SiguienteDespuesDeAgregar() {
        if (display == 'Ram' || display == 'Almacenamiento' || display == 'Accesorios') {
            alert('LLEGUE')
        }else{
            if (counter < 11) { setCounter(counter + 1) }
        }
    }
    function Anterior() {
        if (counter > 1) { setCounter(counter - 1) }
    }
    function ComponenteExacto(e) {
        setCounter(parseInt(e.target.name))
    }


    return (

        <div className='DetailContainer'>
            {console.log(input)}
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
                                {input.Procesador == 0 ? <img name='1' id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso2.png' onClick={(e) => ComponenteExacto(e)}></img> : <img name='1' id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso2_sel.png' onClick={(e) => ComponenteExacto(e)}></img>}
                                {input.CoolersCPU == 0 ? <img name='2' id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso3.png' onClick={(e) => ComponenteExacto(e)}></img> : <img name='2' id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso3_sel.png' onClick={(e) => ComponenteExacto(e)}></img>}
                                {input.PlacaMadre == 0 ? <img name='3' id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso1.png' onClick={() => setCounter(parseInt(1))}></img> : <img name='3' id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso1_sel.png' onClick={() => setCounter(parseInt(3))}></img>}
                                {input.Ram.length == 0 ? <img name='4' id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso4.png' onClick={() => setCounter(parseInt(1))}></img> : <img name='4' id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso4_sel.png' onClick={() => setCounter(parseInt(4))}></img>}
                                {input.PlacadeVideo == 0 ? <img name='5' id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso5.png' onClick={() => setCounter(parseInt(1))}></img> : <img name='5' id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso5_sel.png' onClick={() => setCounter(parseInt(5))}></img>}
                                {input.Almacenamiento.length == 0 ? <img name='6' id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso6.png' onClick={() => setCounter(parseInt(1))}></img> : <img name='6' id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso6_sel.png' onClick={() => setCounter(parseInt(6))}></img>}
                                {input.Gabinete == 0 ? <img name='7' id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso10.png' onClick={() => setCounter(parseInt(1))}></img> : <img name='7' id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso10_sel.png' onClick={() => setCounter(parseInt(7))}></img>}
                                {input.Fuentedealimentación == 0 ? <img name='8' id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso11.png' onClick={() => setCounter(parseInt(1))}></img> : <img name='8' id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso11_sel.png' onClick={() => setCounter(parseInt(8))}></img>}
                                {input.Accesorios.length == 0 ? <img name='9' id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso9.png' onClick={() => setCounter(parseInt(1))}></img> : <img name='9' id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso9_sel.png' onClick={() => setCounter(parseInt(9))}></img>}
                                {input.Monitor == 0 ? <img name='10' id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso12.png' onClick={() => setCounter(parseInt(1))}></img> : <img name='10' id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso12_sel.png' onClick={() => setCounter(parseInt(10))}></img>}
                                {/* {input.Procesador == 0 ? <img id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso8.png' onClick={() => setCounter(parseInt(1))}></img> : <img id='ArmaTuPc_ImageLeft' src='https://compragamer.net/img_armado/paso8_sel.png' onClick={() => setCounter(parseInt(11))}></img>} */}
                            </div>
                            <div id='ArmaTuPc_Right'>
                                { }
                                <CardsPC input={input} setInput={setInput} Siguiente={SiguienteDespuesDeAgregar} display={display}></CardsPC>
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
