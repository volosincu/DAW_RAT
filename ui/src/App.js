import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home.js';
import Search from './SearchForm';
import SearchResut from './SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchResut/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
