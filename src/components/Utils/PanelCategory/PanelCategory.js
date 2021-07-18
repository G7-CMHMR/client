import React, {useEffect} from 'react'
import './PanelCategory.css'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getCategories } from '../../../redux/Actions/Products/Actions'
import { useDispatch, useSelector } from 'react-redux';



const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function PanelCategory({ input, setInput }) {
    console.log(input)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const productsReducer = useSelector(state => state.productsReducer)


    const classes = useStyles();

    const handleChange = (event) => {
        const name = event.target.name;
        
        setInput({
            ...input,
            [name]: [event.target.value],
        });
    };


    return (
        <div id='PanelCategoryFormContainer'>
            <FormControl variant="outlined" id='PanelCategoryForm'>
                <InputLabel htmlFor="outlined-age-native-simple">Categoria</InputLabel>
                <Select
                    native
                    value={input.categories}
                    onChange={handleChange}
                    label="Categoria"
                    name='categories'
                    inputProps={{
                        name: 'categories',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None"  value="" />
                    {productsReducer? productsReducer.categories.map((element) => {
                        return(<option value={element.title}>{element.title}</option>)
                    }):''}
                </Select>
            </FormControl>
        </div>
    )
}

