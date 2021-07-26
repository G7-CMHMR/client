import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {Button} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
export default function Usuarios() {
    const classes = useStyles(); 
    let prueba=[
    {
        id:3,
        mail:'sdas@gmail.com',
        name:'ricardo fort',
    },
    {
        id:5,
        mail:'sdas@gmail.com',
        name:'susana gimenez',
    },
    {
        id:6,
        mail:'sdas@gmail.com',
        name:'messi',
    },
    {
        id:7,
        mail:'sdas@gmail.com',
        name:'roberto',
    }]




    return (
        <div>
            <List className={classes.root}>
                {
                    prueba.map((x)=>{
            return (
            <ListItem style={{width:'180%'}}>
                    <ListItemAvatar>
                    <Avatar src="/broken-image.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary={x.name} secondary={x.mail} />
                    <Button style={{margin:'3px'}} variant="secondary">Password reset</Button>
             <Button style={{margin:'3px'}} variant="info">Hacer Admin</Button>
             <Button style={{margin:'3px'}} variant="danger">Eliminar</Button>
                    
                    </ListItem>

                    
            )
                    })
                }
             
      </List>
        </div>
    )
}
