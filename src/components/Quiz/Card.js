import React, { useEffect, useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import './Card.css'
import { useDispatch, useSelector } from 'react-redux';
import {getProductsOfCategory, getProductQuiz} from '../../redux/Actions/Products/Actions'
export default function Card({title, key, img, games, setGames, valuation}) {
 
  const handleChange = (event) => {
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
