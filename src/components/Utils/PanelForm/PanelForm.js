import './PanelForm.css'

import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PanelBrand from '../PanelBrand/PanelBrand';
import PanelGral from '../PanelGral/PanelGral';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
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
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
}));

export default function PanelForm({input, setInput}) {


    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
        /* console.log(e.target.name)
        console.log(e.target.name)
        console.log(e.target.name)
        console.log(e.target.name) */
        setInput({
            ...input,
           'type' : e.target.textContent,
        })
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

   

    return (
        <div className='PanelFormContainer'>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    name='type'
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="PC de Escritorio" {...a11yProps(0)} />
                    <Tab label="Portatil" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel name='type' value={value} index={0} dir={theme.direction}>
                    <PanelGral input={input} setInput={setInput}></PanelGral>
                    
                </TabPanel>
                <TabPanel name='type' value={value} index={1} dir={theme.direction}>
                    <PanelBrand input={input} setInput={setInput}></PanelBrand>
                    <PanelGral input={input} setInput={setInput}></PanelGral>
                    
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}