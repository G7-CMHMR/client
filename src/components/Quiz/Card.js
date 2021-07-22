import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import './Card.css'

  

export default function Card({title, img, app, setApp}) {
    

  const handleChange = (event) => {
    console.log(event.target.checked);
  };

    return (
        <div id='AppCard'>
            <div> 
                <img id="AppImage" src={img}/>
            </div>
            <div id="AppName">
            <h5>{title}</h5>
            <Checkbox
        // checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      /></div>
        </div>
    )
}
