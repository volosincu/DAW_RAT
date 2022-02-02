import FilmRoll from './FilmRoll.svg';
import React, { Component }  from 'react';
import {useState, useContext} from 'react';
import './Home.css';
import { Box } from '@material-ui/core';
import history from './history';
import  SearchForm  from './SearchForm';
import DawRestContext from './DawRestContext';

function Home() {
    const { state, dispatch } = useContext(DawRestContext);

    // console.log('search form', state);

    // function handleClick(e) {
    //     e.preventDefault();
    //     console.log('The link was clicked.',state);
    // }

    // const [showForm, setShowForm] = useState(false);
   
    
    return (     
        <div className="home">
             <header className="homeHeader">
                <img src={FilmRoll} className="logo" alt="FilmRoll" />
                <span style={{fontSize: 50, color:"#15434a"}}>R</span>
                <span style={{fontSize: 50, color:"#81d8d0"}}>E</span>
                <span style={{fontSize: 50, color:"#176a71"}}>S</span>
                <span style={{fontSize: 50, color:"#81d8d0"}}>T</span>
                <span style={{fontSize: 50, color:"#356b76"}}>m</span>
                <span style={{fontSize: 50, color:"#0095a4"}}>a</span>
                <span style={{fontSize: 50, color:"#81d8d0"}}>n</span>
                <span style={{fontSize: 50, color:"#0095a4"}}>t</span>
                <span style={{fontSize: 50, color:"#176a71"}}>i</span>
                <span style={{fontSize: 50, color:"#15434a"}}>c</span>
                <span style={{fontSize: 50, color:"#176a71"}}>s</span>
            </header>
            <body>
                <div className='row'>
                    <div className='row-a'>
                        <SearchForm />
                    </div>
                </div>
            </body>
        </div>
        );   
}
export default Home;