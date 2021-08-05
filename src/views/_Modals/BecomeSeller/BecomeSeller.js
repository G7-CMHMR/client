import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  becomeSellerAction, attemptBecomeSellerAction } from '../../../redux/Actions/User/Actions';
import '../Modals.css'
import { toast } from 'react-toastify';
import { OverlayTrigger , Tooltip, Button} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const BecomeSeller = () => {
    const classes = useStyles()
    const dispatch = useDispatch();
    const stateBeSeller = useSelector((state) => state.userReducer.becomeseller);
    const userData = useSelector((state) => state.userReducer.userData);
    const openBeSeller = () => {
        dispatch(becomeSellerAction(!stateBeSeller))
    }
    // UseState Fields
    const [input, setInput] = React.useState({
        dni: '',
        cuil: '',
        phone:'',
        address:'',
        accountBank:'',
        location:'',
        commission: 0.1,
        cuit:''
    })
    const [error, setError] = React.useState({
        dni: false,
        cuil: false,
        phone:false,
        address:false,
        accountBank:false,
        location:false,
        cuit:false
    });
    const { dni, cuil, phone, address, accountBank, location, cuit //commission 
    } = input;
    const onChangeForm = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        if (dni) dni.length<7 ? setError({...error, 'dni':true}) : setError({...error, 'dni':false})
        if (cuil) cuil.length<8 ? setError({...error, 'cuil':true}) : setError({...error, 'cuil':false})
        if (cuit) cuit.length<10 ? setError({...error, 'cuit':true}) : setError({...error, 'cuit':false})
        if (accountBank) accountBank.length<19 ? setError({...error, 'accountBank':true}) : setError({...error, 'accountBank':false})

    }
    const onSubmit = e => {
        e.preventDefault()
        
        // if( dni < 3 || cuil < 5 || phone.trim() === '' || address.trim() === '' || accountBank === '' || 
        // location.trim() === '') {
        //     setError({
        //             ...error,
        //             dni:false
        //     })     
        // }else 
        // if (dni>7){
        //     setError({
        //         ...error,
        //         dni:true
        //     })
        // }
            dispatch(attemptBecomeSellerAction({...input, id: userData.id}))
            toast.success('¡Ya puedes vender ingresando a tu panel!')
    }
    function validatenull(){
        if (
            input.dni && input.cuil && input.cuit && input.accountBank && input.phone && input.location &&
            input.address && !error.dni && !error.cuil && !error.cuit && !error.accountBank 
        ){return true}
        else{return false}
    }

    return (

        <div className="superposition">
            <div id="becomesellerbox" className="animate__animated animate__fadeIn animate_faster">
                <div className="contenedorX"><button id="X" onClick={openBeSeller}>X</button></div>
            <h1 id="becomeseller">SER VENDEDOR</h1>
          
            <form  className={classes.root} noValidate autoComplete="off"
                onSubmit={onSubmit}
            >
                <br></br>
                <div className="containerInputBS">
                    <p
                    className="subtitleName">DNI</p>
                    <Input inputProps={{ 'aria-label': 'description' }}
                        name="dni"
                        type="number"
                        placeholder="Numero de Identificacion Ciudadana"
                       error={error.dni}
                        onChange={onChangeForm} 
                    />
                </div>
                <div className="containerInputBS">
                    <p
                    className="subtitleName">CUIL</p>
                    <Input 
                    error={error.cuil}
                        name="cuil"
                        type="number"
                        placeholder="Código Único de Identificación Laboral"
                        onChange={onChangeForm} 
                    />
                </div>
                <div className="containerInputBS">
                    <p
                    className="subtitleName">CUIT</p>
                    <Input 
                    error={error.cuit}
                        name="cuit"
                        type="number"
                        placeholder="Clave Única de Identificación Tributaria "
                        onChange={onChangeForm}
                    />
                </div>
                <div className="containerInputBS">
                    <p
                    className="subtitleName">TELEFONO CONTACTO</p>
                    <Input
                    error={error.phone} 
                        name="phone"
                        type="string"
                        placeholder="Numero de Identificacion Ciudadana"
                        onChange={onChangeForm}
                    />
                </div>
                <div className="containerInputBS">
                    <p
                    className="subtitleName">DIRECCION OFICINA/TIENDA</p>
                    <Input 
                    error={error.address}
                        name="address"
                        type="text"
                        placeholder="Donde se pueda recoger"
                        onChange={onChangeForm}
                    />
                    <br />
                </div> 
                <div className="containerInputBS">
                    <p
                    className="subtitleName">CUENTA BANCARIA</p>
                    <Input 
                    error={error.accountBank}
                        name="accountBank"
                        type="number"
                        placeholder="Clave Bancaria Uniforme"
                        onChange={onChangeForm}
                    />
                </div>
                <div className="containerInputBS">
                    <p
                    className="subtitleName">LOCALIDAD/PROVINCIA</p>
                    <Input 
                    error={error.location}
                        name="location"
                        type="string"
                        placeholder="Ejem: Buenos Aires"
                        onChange={onChangeForm}
                    />
                </div>
                { validatenull() ? <input type="submit" value="Empezar a vender" className="buttonBecomeSeller" /> :
                    <OverlayTrigger key='top' placement='top' overlay={
        <Tooltip id={'tooltip-top'}> Debes llenar todos los datos </Tooltip>  } >
      <Button id='btndisabledBS' className="buttonBecomeSellerd">Empezar a vender</Button>
    </OverlayTrigger>
                }
                    
                    
            </form>
            </div>
        </div>
      );
}
 
export default BecomeSeller;