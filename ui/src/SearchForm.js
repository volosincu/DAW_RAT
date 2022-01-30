import React, {useState} from 'react';
import { BiRocket } from "react-icons/bi";
import './SearchForm.css';
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import {useHistory} from 'react-router-dom';

function Search(){
    const [{}, dispatch] = useStateValue();
    const [term, setTerm] = useState("");
    const [showResults, setShowResults] = useState(false);
    const history = useHistory();
 
    const search = (e) =>  {
        e.preventDefault();
        console.log("search ", term);

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: term,
          });
        
        history.push('/search'); 
    }
  
    return (
        <form action="/" method="get" id='searchForm'>
            <div className='searchField'>
                <input type="text" id = "searchBar" placeholder="Search" name="Search" value = {term} onChange={(e) => setTerm(e.target.value)} />
            </div>

            
            <button type="submit"  id = "searchButton" onClick={search} ><BiRocket/></button>
            {showResults ? <resultBox /> : null} 
        </form>
    );

}
export default Search;
