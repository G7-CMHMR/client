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

import Publications from '../../../views/PanelViews/Publications'
import Products from '../../../views/PanelViews/Products'

import CrearProducto from '../../../views/PanelViews/CreateProduct';
import Sales from '../../../views/PanelViews/Sales';

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

export default function PanelMenu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

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
        <Tab label="P a n e l" {...a11yProps(0)} />
        <Tab label="P u b l i c a c i o n e s" {...a11yProps(1)} />
        <Tab label="P r o d u c t o s" {...a11yProps(2)} />
        <Tab label="C r e a r - P r o d u c t o" {...a11yProps(3)} />
        <Tab label="V e n t a s" {...a11yProps(4)} />
        <Tab label="P r e g u n t a s" {...a11yProps(5)} />

      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Publications></Publications>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Products></Products>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CrearProducto></CrearProducto>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Sales></Sales>
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
    </div>
  );
}