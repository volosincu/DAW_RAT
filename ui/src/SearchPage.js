import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import FilmRoll from './FilmRoll.svg';
import useGoogleSearch from './searchAPI';

function SearchResut() {
    const [{term}, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data);
    return (
        <div className="searchPage">
        <div className="searchPageHeader">
            <img src={FilmRoll} className="logoSearch" alt="FilmRoll" />
            <span style={{fontSize: 50, color:"#15434a"}}>D</span>
            <span style={{fontSize: 50, color:"#81d8d0"}}>a</span>
            <span style={{fontSize: 50, color:"#176a71"}}>w</span>
            <span style={{fontSize: 50, color:"#81d8d0"}}>R</span>
            <span style={{fontSize: 50, color:"#356b76"}}>a</span>
            <span style={{fontSize: 50, color:"#0095a4"}}>t</span>
        </div>

        <div className="searchPageResults"></div>
            <h1>{term}</h1>
        </div>
  );
}

export default SearchResut;