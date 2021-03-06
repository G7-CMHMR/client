import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Separate from '../components/Utils/Separate/Separate'
import TextField from '@material-ui/core/TextField';
import {Button, ToggleButton, ToggleButtonGroup, ProgressBar} from 'react-bootstrap'
import { gaming_app, student_app, programming_app, graphic_app, audiovisual_app, diary_app } from '../components/Quiz/Apps';
import Card from '../components/Quiz/Card';
import {FaArrowLeft} from 'react-icons/fa'
import './Quiz.css'
import {getProductsOfCategory, getProductQuiz} from '../redux/Actions/Products/Actions'
import ProductCard from '../components/Category/ProductCard/ProductCard';

export default function Quiz() {
    const name = useSelector(state => state.userReducer.userData.name)
    const productsReducer = useSelector(state => state.productsReducer)
    const [counter, setCounter]= useState(1)
    const [progress, setProgress]= useState(25)
    const [display, setDisplay] = useState('')
    const dispatch = useDispatch()
    const [checked, setChecked] = useState({
        gaming:false,
        diary:false,
        homeoffice:false,
        programming:false,
        audiovisual:false,
        graphicdesign:false,
        university:false,
        escolar:false
    });
    const [games, setGames] = useState({});
    const [input, setInput] = useState({
        name: name,
    })

    useEffect(() => {
      
        switch (counter) {
            case 1: setDisplay('Empezar'); break;
            case 2: setDisplay('Seleccionar'); break;
            case 3: setDisplay('Apps'); break;
            case 4: setDisplay('Resultados'); break;
            default: console.log('ERROR')
        }
    }, [counter])

   function handleChange(e){
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
    function changeState(){
        setCounter(counter+1)
        setProgress(progress+25)
    }
    function changeStateUlt(){
        setCounter(counter+1)
        setProgress(progress+25)
        dispatch(getProductQuiz(Objectfilter(games)))
    }
    function changeState2(){
        setCounter(counter-1)
        setProgress(progress-25)
    }
    function handleCheck(e){
        setChecked({
            ...checked,
            [e.currentTarget.value]:e.currentTarget.checked
        })
    }
    function Objectfilter(object){
        let array=[]
        for (const property in object) {
            if (object[property]===true){
                array.push(property)
            }console.log(array)
          }return Math.max(...array)
        }
    return (
        <div className='DetailContainer'>
            <Separate></Separate>
            <div id='ContentDetail'>
            
            <ProgressBar id='progressBar' animated now={progress} />
            {
                counter<2?<button disable={true} id="buttonDisable"><FaArrowLeft /></button>:
                <button  onClick={changeState2}id="buttonBackQuiz"><FaArrowLeft /></button>
            }
            
               { display=='Empezar' && <div id="empezar">{
                name? 
                 <h2> Hola {name}! </h2>:
                    <div id='WelcomeQuiz'> <TextField name="name" onChange={(e)=>handleChange(e)} id="standard-basic" label="Ingres?? tu nombre" /> </div>
                } 
                <h3>De forma f??cil te  vamos a ayudar a elegir la computadora que mas te convenga 
                    seg??n el uso que le quieras dar 
                </h3>
                <button id='btnquizcontinue' onClick={changeState} >EMPEZAR</button>
                </div>
                }
                { 
                display=='Seleccionar' && 
                <div>
                    <h2>Eleg?? el los usos que le vas a dar a tu computadora (podes elegir muchos!)</h2>
                    <div id="QuizSelection">
                    <ToggleButtonGroup type="checkbox" className="mb-2">
                    <ToggleButton checked={checked.gaming} className="mb-2" 
                    id="toggle-check" type="checkbox"                        
                    variant="outline-primary" value="gaming"
                    onChange={(e) => handleCheck(e)} >
                    GAMING
                    </ToggleButton> 
                     </ToggleButtonGroup>
                     <ToggleButtonGroup type="checkbox" className="mb-2">
                    <ToggleButton className="mb-2" id="toggle-check" type="checkbox"                        
                    variant="outline-primary" checked={checked.diary} value="diary"
                    onChange={(e) => handleCheck(e)} >
                    USO DIARIO
                    </ToggleButton>
                     </ToggleButtonGroup>
                     <ToggleButtonGroup type="checkbox" className="mb-2">
                    <ToggleButton className="mb-2" id="toggle-check" type="checkbox"                        
                    variant="outline-primary" checked={checked.homeoffice} value="homeoffice"
                    onChange={(e) => handleCheck(e)} >
                    HOME OFFICE
                    </ToggleButton>
                     </ToggleButtonGroup>
                     <ToggleButtonGroup type="checkbox" className="mb-2">
                    <ToggleButton className="mb-2" id="toggle-check" type="checkbox"                        
                    variant="outline-primary" checked={checked.programming} value="programming"
                   onChange={(e) => handleCheck(e)} >
                    PROGRAMACI??N
                    </ToggleButton>
                     </ToggleButtonGroup>
                     <ToggleButtonGroup type="checkbox" className="mb-2">
                    <ToggleButton className="mb-2" id="toggle-check" type="checkbox"                        
                    variant="outline-primary" checked={checked.graphicdesign} value="graphicdesign"
                    onChange={(e) => handleCheck(e)} >
                    DISE??O GR??FICO
                    </ToggleButton>
                     </ToggleButtonGroup>
                     <ToggleButtonGroup type="checkbox" className="mb-2">
                    <ToggleButton className="mb-2" id="toggle-check" type="checkbox"                        
                    variant="outline-primary" checked={checked.audiovisual} value="audiovisual"
                    onChange={(e) => handleCheck(e)} >
                    EDICION AUDIOVISUAL
                    </ToggleButton>
                     </ToggleButtonGroup>
                     <ToggleButtonGroup type="checkbox" className="mb-2">
                    <ToggleButton className="mb-2" id="toggle-check" type="checkbox"                        
                    variant="outline-primary" checked={checked.escolar} value="escolar"
                    onChange={(e) => handleCheck(e)} >
                    ESTUDIO ESCOLAR
                    </ToggleButton>
                     </ToggleButtonGroup>
                     <ToggleButtonGroup type="checkbox" className="mb-2">
                    <ToggleButton className="mb-2" id="toggle-check" type="checkbox"                        
                    variant="outline-primary" checked={checked.university} value="university"
                    onChange={(e) => handleCheck(e)} >
                    ESTUDIO UNIVERSITARIO
                    </ToggleButton>
                     </ToggleButtonGroup><br></br>
                     </div>
                     <button id='btnquizcontinue' onClick={changeState} >CONTINUAR</button>
                </div>
                }
                {
                    display=='Apps' && 
                    <div id="Applications">
                    <h4>Selecciona las aplicaciones que queres en tu equipo</h4>
                    <div className='AppsRow'>
                    {
                        checked.gaming && 
                        gaming_app.map((e)=>{
                         return (
                            <Card title={e.title} key={e.key} img={e.img} games={games} valuation={e.valuation} setGames={setGames}></Card>  
                         )
                        })
                    }</div>
                    <div>
                     <div className='AppsRow'>
                     { 
                        checked.programming && 
                        programming_app.map((e)=>{
                            return <Card title={e.title} key={e.key} img={e.img} games={games} valuation={e.valuation} setGames={setGames}></Card>  
                           })
                    }</div>
                     <div className='AppsRow'>
                     {
                        checked.audiovisual && 
                        audiovisual_app.map((e)=>{
                            return <Card title={e.title} key={e.key} img={e.img} games={games} valuation={e.valuation} setGames={setGames}></Card>    
                           })
                    }</div>
                    <div className='AppsRow'>
                     {
                         checked.homeoffice || checked.university || checked.escolar &&  
                        student_app.map((e)=>{
                            return <Card title={e.title} key={e.key} img={e.img} games={games} valuation={e.valuation} setGames={setGames}></Card>  
                           })
                    }</div>
                      <div className='AppsRow'>
                     {
                        checked.graphicdesign && 
                        graphic_app.map((e)=>{
                            return <Card title={e.title} key={e.key} img={e.img} games={games} valuation={e.valuation} setGames={setGames}></Card>  
                           })
                    }</div>
                     <div className='AppsRow'>
                     {
                        checked.diary && 
                        diary_app.map((e)=>{
                            return <Card title={e.title} key={e.key} img={e.img} games={games} valuation={e.valuation} setGames={setGames}></Card>   
                           })
                    } </div><button id='btnquizcontinue' onClick={changeStateUlt}>CONTINUAR</button></div>
                    </div>
                    
                }
                 {
                    display==='Resultados' && 
                    <div id='containerQuizPcsResult'>
                        
                        {name? <h4>{name}</h4>:<h4>{input.name}</h4>}
                        <h4>Estas son las computadoras que se adecuan a los programas y/o juegos
                            que elegiste</h4> 
                            
                            {productsReducer.products.length>0 && productsReducer.products.map((x) => {
                return (
                    <ProductCard name={x.name} images={x.images}
                        valuation={x.valuation} delivery={x.delivery} price={x.price}
                        discount={x.discount} seller={x.seller}
                        status={x.status} id={x.id} />
                )
                })
                            }

                    </div>
                }
            </div>
            <Separate></Separate>
        </div>
    )
}
