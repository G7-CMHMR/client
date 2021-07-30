import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 460,
//    backgroundColor: theme.palette.background.paper,
    backgroundColor: 'transparent',
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
   box: {
     height: 80,
     width: 400,
     display: "flex",
     flexFlow: "column nowrap",
     justifyContent: 'flex-start',
     alignItems: "flex-start"
   },
  inline: {
    display: 'inline-block',    
   },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));



export default function Opinions(reviews) {
  const classes = useStyles();
  const { props } = reviews;

  return (
    <List className={classes.root}>
      { props.length > 0 ?
	props.map(r => {
		return(
	     <ListItem >
	       <Box component="fieldset" mb={2} borderColor="transparent" className={classes.box}>
	       <Rating name="read-only" value={r.type} readOnly />
	       <ListItemText
		   primary={r.title}
		   secondary={
		     <React.Fragment>
		       <Typography
		         component="span"
		         variant="body2"
		         color="textPrimary"
		         className={classes.inline}
		       >
		         {r.user.name} dice: 
		       </Typography>
		       {r.message}
		     </React.Fragment>
		   }
		 />
	       </Box>  
	     </ListItem>
		)
	})
	:
	<li>No se han realizado reseñas al vendedor</li>
        }
    </List>
  );
}





