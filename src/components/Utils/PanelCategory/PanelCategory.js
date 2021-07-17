import React from 'react'
import './PanelCategory.css'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function NativeSelects() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        Categoria: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };


    return (
        <div id='PanelCategoryFormContainer'>
            <FormControl variant="outlined" id='PanelCategoryForm'>
                <InputLabel htmlFor="outlined-age-native-simple">Categoria</InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    label="Categoria"
                    inputProps={{
                        name: 'Categoria',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" disabled value="" />
                    <option value={10}>CATEGORIA 1</option>
                    <option value={20}>CATEGORIA 2</option>
                    <option value={30}>CATEGORIA 3</option>
                </Select>
            </FormControl>
        </div>
    )
}

