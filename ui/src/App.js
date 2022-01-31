import React, { useReducer } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home.js';
import SearchResut from './SearchPage';
import DawRestContext, {reducer, initState} from './DawRestContext'

function App() {

 const [state, dispatch] = useReducer(reducer, initState) 
  return (
    <div className="app">
      <Router>
        <DawRestContext.Provider value={{ state, dispatch }}>
          <Switch>
            <Route path="/search">
              <SearchResut/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </DawRestContext.Provider>
      </Router>
    </div>
  );
}

export default App;
