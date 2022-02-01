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
                <span style={{fontSize: 50, color:"#15434a"}}>D</span>
                <span style={{fontSize: 50, color:"#81d8d0"}}>a</span>
                <span style={{fontSize: 50, color:"#176a71"}}>w</span>
                <span style={{fontSize: 50, color:"#81d8d0"}}>R</span>
                <span style={{fontSize: 50, color:"#356b76"}}>e</span>
                <span style={{fontSize: 50, color:"#0095a4"}}>s</span>
                <span style={{fontSize: 50, color:"#81d8d0"}}>t</span>
                <span style={{fontSize: 50, color:"#0095a4"}}>A</span>
                <span style={{fontSize: 50, color:"#176a71"}}>p</span>
                <span style={{fontSize: 50, color:"#15434a"}}>i</span>
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