import './SellerInfo.css';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import { IoLocationSharp } from "react-icons/io5";
import Opinions from './Opinions/Opinions';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles({
  root: {
    backgroundColor: "transparent",
    border: 0,
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


function SellerInfo() {

    const sellerData = useSelector(state => state.productsReducer.productDetail.seller);
    const sellerReview = useSelector(state => state.reviewReducer.sellerReview);

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;


    return(
        <div>
	<Card className={classes.root} variant='outlined'>
		<CardContent>
			<Typography className={classes.title} color="textSecondary" gutterBottom>
			Información del vendedor
			</Typography>
			<Typography variant="h5" component="h2">
			{sellerData.user.name} {sellerData.user.lastName}
			</Typography>
			<br />			
			<Typography className={classes.title} variant="h6" color="textSecondary">
			Localizacion del vendedor: {sellerData.location}
			</Typography>
			<br />			
			<Typography className={classes.title} variant="h6" color="textSecondary">
			Reputación del vendedor:
			</Typography>
		        <Rating name="half-rating-read" value={sellerData.reputation} precision={1} readOnly />
		</CardContent>
           	<h4 variant="h5" component="h2">Opiniones</h4>
		<hr/>
            	<div id="OpinionsCards">
		  <Opinions props={sellerReview}/>	  
	        </div>
		<hr/>	

	</Card>
        </div>
    )
}



export default SellerInfo;    

