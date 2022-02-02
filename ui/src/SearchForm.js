import React, {useState, useContext} from 'react';
import { BiRocket } from "react-icons/bi";
import './SearchForm.css';
import { actionTypes } from "./reducer";
import {useHistory} from 'react-router-dom';
import DawRestContext from './DawRestContext'
import ReactJson from 'react-json-view'
import {callNLP, getSemanticField} from "./apicalls"
import { getRESTmanticTargets, getRESTmanticQuery, executeQuery } from './queryBuilder'

const JsonStyle = {
    propertyStyle: { color: '#c9cd05' },
    stringStyle: { color: '#68e1a5' },
    numberStyle: { color: 'darkorange' }
  }

  const sample = {
    "nouns": [
        "film",
        "scene",
    ],
    "verbs": [
        "want",
        "see"
    ],
    "rdf_domains": [
        "actor",
        "movie",
        "cinema"
    ],
    "similarities": {
        "film": [
            0.4444444444444444,
            1.0,
            0.625
        ],
        "scene": [
            0.6444,
            0.0,
            0.625
        ],
    },
    "names": [
        "Tereminator"
    ]
};





function Search(){
    const { state, dispatch } = useContext(DawRestContext);
    const [showResults, setShowResults] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const history = useHistory();

    const search = async (e) =>  {
        e.preventDefault();
        // const results = await callNLP(state.term);
        const semanticField = await getSemanticField("");

        const queryTargets = getRESTmanticTargets(sample);
        const queries = getRESTmanticQuery(queryTargets);
        console.log(queries);

        dispatch({type: "search", payload: {term: "Guardians of Galaxy", rdfdomain: semanticField, queryPaths: queries, names: queryTargets.names}});
        setShowResults(true);
    }

    const onClickShowResults = async (e) =>{
        

        const promises = [];
        
        state.queryPaths.forEach(obj=>{
            obj.queries.forEach(q=>{
                promises.push(executeQuery('http://localhost:51337', q.action, state.names[0]))
            }) 
         })
    
         Promise.all(promises).then((values) => {
            dispatch({type: "results", payload: {results: values}});
          });
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
                        dispatch({type: "search", payload: {term: e.target.value}})
                        }} />
                </div>

                <button type="button"  id = "searchButton" onClick={search} ><BiRocket/></button>
            </div>
            <div className='row-c'>
            {showResults ? <button className='buttonClass' id='buttonId' onClick={onClickShowResults}>Rulează queries</button> : <></>}
            </div>
          
            <div className='results-display'>
                <div className='view1'>
                    {showResults ? <ReactJson src={state.queryPaths} theme="monokai" indentWidth={6} /> : null} 
                </div>
                <div className='view2'>
                    {showResults ? <ReactJson src={state.results} theme="monokai" indentWidth={6} /> : null} 
                </div>

            </div>
            <div class="semantic-field">
                <h2>Semantic field</h2>
                {showResults ? <ReactJson src={state.rdfdomain} theme="monokai" indentWidth={6} collapsed={true} /> : null} 
            </div>
        </>
    );

}
export default Search;
