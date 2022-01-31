import React, {useState, useContext} from 'react';
import { BiRocket } from "react-icons/bi";
import './SearchForm.css';
import { actionTypes } from "./reducer";
import {useHistory} from 'react-router-dom';
import DawRestContext from './DawRestContext'
import ReactJson from 'react-json-view'
import {callNLP} from "./apicalls"

const JsonStyle = {
    propertyStyle: { color: '#c9cd05' },
    stringStyle: { color: '#68e1a5' },
    numberStyle: { color: 'darkorange' }
  }


  const sample = {"text":"My name is John Doe.","pos":["DET","NOUN","AUX","PROPN","PROPN","PUNCT"],"join":[{"part":"My","pos":"DET"},{"part":"name","pos":"NOUN"},{"part":"is","pos":"AUX"},{"part":"John","pos":"PROPN"},{"part":"Doe","pos":"PROPN"},{"part":".","pos":"PUNCT"}]}

function Search(){
    const { state, dispatch } = useContext(DawRestContext);
    const [showResults, setShowResults] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const history = useHistory();

    const search = (e) =>  {
        e.preventDefault();
        dispatch({type: "search", payload: {term: "Guardians of Galaxy"}});
        setShowResults(false);
    }

    const onClickShowResults = async (e) =>{
        const results = await callNLP();
        dispatch({type: "results", payload: {results: results}});
        setShowResults(true);
    }
  
   
    return (
        <>
            <div id='searchForm'>
                <div className='searchField'>
                    <input autoComplete="off" 
                    type="text" 
                    id = "searchBar" 
                    placeholder="Ce filme au mai apărut.... " 
                    name="Search" onChange={(e) => {
                        dispatch({type: "search", payload: {term: "abc de"}})
                        }} />
                </div>

                <button type="button"  id = "searchButton" onClick={search} ><BiRocket/></button>
            </div>
            <div className='row-c'>
                <button className='buttonClass' id='buttonId' onClick={onClickShowResults}>Afisează rezultate</button>
            </div>
          
            <div className='results-display'>
                <div className='view1'>
                    {showResults ? <ReactJson src={sample} theme="monokai" indentWidth={6} /> : null} 
                </div>
                <div className='view2'>
                    {showResults ? <ReactJson src={state.results} theme="monokai" indentWidth={6} /> : null} 
                </div>
            </div>
        </>
    );

}
export default Search;
