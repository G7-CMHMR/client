import { useDispatch, useSelector } from 'react-redux';
import { FormControl, Button, Form } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import './SearchBar.css'
import { TextField } from '@material-ui/core';
import { onChangeSearchAction } from '../../../redux/Actions/Search/Actions';
import { Link } from 'react-router-dom'
import { CleanProducts, putOnSearchBar } from '../../../redux/Actions/Search/Actions'

function SearchBar() {
  const dispatch = useDispatch();
  var search = useSelector((state) => state.SearchReducer.search);

  var results = useSelector((state) => state.SearchReducer.results);
  results = results.slice(0, 7)

  const maxCharactersResults = 30;


  function CleanResults(e) {
    //console.log(e)
    dispatch(CleanProducts())
    dispatch(putOnSearchBar(e))
  }
  

  return (
    //funcion que busque el input.
    <div className="SearchBar">
      <Form className="d-flex">
        <FormControl id="formcontrol"
          type="search"
          placeholder="Buscar..."
          aria-label="Search"
          value={search}
          
          autoComplete="off"
          onChange={(e) => dispatch(onChangeSearchAction(e.target.value))}
        />
        <Link to={`/Buscar/${search}`}><Button onClick={() => CleanResults(search)} variant="outline-warning" id='SearchbarButton' ><BsSearch /></Button></Link>
      </Form>
      {/* console.log(results) */}
      <ul id='ResultsUL'>
        {results.length !== 0 ? results.map((result) => (<Link onClick={() => CleanResults(result.name)} to={`/Producto/${result.id}`}><li id='ResultsSearchbar'  >{result.name.length > maxCharactersResults ? result.name.substring(0, maxCharactersResults) : result.name}</li></Link>)) : null}
      </ul>

    </div>
  )
}



export default SearchBar