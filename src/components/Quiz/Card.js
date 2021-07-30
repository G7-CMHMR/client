import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import './Card.css'

export default function Card({title, key, img, games, setGames, valuation}) {
    let hola='hola'
    console.log(key)
  const handleChange = (event) => {
   setGames({
     ...games,
     [valuation]:event.target.checked
   })
   console.log(games)
  }

    return (
        <div id='AppCard'>
            <div> 
                <img id="AppImage" src={img}/>
            </div>
            <div id="AppName">
            <h5>{title}</h5>
            <Checkbox name={key}
        // checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      /></div>
        </div>
    )
}
