import FilmRoll from './FilmRoll.svg';
import React, { Component }  from 'react';
import {useState} from 'react';
import './Home.css';
import { Box } from '@material-ui/core';
import history from './history';
import  Search  from './SearchForm';

function Home() {
    
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    const [showForm, setShowForm] = useState(false);
    const onClickShow = () =>{ setShowForm(true); 	document.getElementById("buttonId").style.display="none"; }
    
    return (     
        <div className="home">
            <header className="homeHeader">
                <img src={FilmRoll} className="logo" alt="FilmRoll" />
                <span style={{fontSize: 100, color:"#15434a"}}>D</span>
                <span style={{fontSize: 100, color:"#81d8d0"}}>a</span>
                <span style={{fontSize: 100, color:"#176a71"}}>w</span>
                <span style={{fontSize: 100, color:"#81d8d0"}}>R</span>
                <span style={{fontSize: 100, color:"#356b76"}}>a</span>
                <span style={{fontSize: 100, color:"#0095a4"}}>t</span>
            </header>
            <body>
                <button className='buttonClass' id='buttonId' onClick={onClickShow}>Start</button>
                {showForm ? <Search /> : null} 
            </body>
        </div>
        );   
}
export default Home;