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
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
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
                    <PanelInput></PanelInput>
                    <PanelForm></PanelForm>
                    
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <PanelInput></PanelInput>
                    <PanelCategory></PanelCategory>
                    
                    <PanelBrand></PanelBrand>
                    <PanelGral></PanelGral>
                    
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}




