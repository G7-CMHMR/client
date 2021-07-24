import React from 'react';
import './PanelMenu.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { bottom } from '@popperjs/core';
import { Media } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import Publications from '../../../views/PanelViews/Publications'
import Products from '../../../views/PanelViews/Products'

import CrearProducto from '../../../views/PanelViews/CreateProduct';
import Sales from '../../../views/PanelViews/Sales';
import { seller_getAllProducts } from '../../../redux/Actions/Seller/Actions';
import Categorias from './Admin/Categorias';
import Usuarios from './Admin/Usuarios';
import SuperAdmin from './Admin/SuperAdmin';
import ReviewPc from './Admin/ReviewPc';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 747,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function PanelMenuAdmin() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const user = useSelector(state => state.userReducer.userData)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <div className={classes.root} id='TestPadding'>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className='Test1'
        id='pepe'
      > 
        <Tab label="U S U A R I O S" {...a11yProps(0)} />
        <Tab label="C A T E G O R I A S" {...a11yProps(1)} />
        <Tab label="R E V I E W  PC" {...a11yProps(2)} />
        <Tab label="S U P E R  A D M I N " {...a11yProps(3)} />

      </Tabs>
      <TabPanel value={value} index={0}>
        <Usuarios/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Categorias/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ReviewPc/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SuperAdmin/>
      </TabPanel>
      
    </div>
  );
}
