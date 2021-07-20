import Separate from '../../components/Utils/Separate/Separate';
import './CreateProduct.css'

import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PanelForm from '../../components/Utils/PanelForm/PanelForm';
import PanelBrand from '../../components/Utils/PanelBrand/PanelBrand';
import PanelGral from '../../components/Utils/PanelGral/PanelGral';
import PanelInput from '../../components/Utils/PanelInput/PanelInput';
import PanelCategory from '../../components/Utils/PanelCategory/PanelCategory';
import { isElementOfType } from 'react-dom/test-utils';
import { useSelector } from 'react-redux';

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

export default function FullWidthTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    
    const userReducer = useSelector(state => state.userReducer.userData)

    const [input, setInput] = React.useState({
        name: '',
        status: '',
        price: '',
        stock: '',
        description: '',
        visible: false,
        brand: '',
        type: 'PC de Escritorio',
        warranty: '',
        delivery: false,
        title: '',
        images: ['https://economipedia.com/wp-content/uploads/Tipos-de-hardware.png'],
        discount: 0,
        userId: userReducer.id,
        category: 'PC',
    })



    const handleChange = (event, newValue) => {
        setValue(newValue);
        if(newValue === 0){
            setInput({
                ...input,
                'type' : 'PC de Escritorio',
                'category' : 'PC',
            })
        }
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className='CreateProductForms'>
            
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="PC" {...a11yProps(0)} />
                    <Tab label="Componente" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <PanelInput input={input} setInput={setInput}></PanelInput>
                    <PanelForm input={input} setInput={setInput}></PanelForm>
                    
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <PanelInput input={input} setInput={setInput}></PanelInput>
                    <PanelCategory input={input} setInput={setInput}></PanelCategory>
                    {console.log(input)}
                    <PanelBrand input={input} setInput={setInput}></PanelBrand>
                    <PanelGral input={input} setInput={setInput}></PanelGral>
                    
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}




