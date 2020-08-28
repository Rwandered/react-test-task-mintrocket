import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Main from "./pages/Main";
import Auth from "./pages/Auth";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={ Main }/>
        <Route exact path={'/auth'} component={ Auth }/>
      </Switch>
    </Router>
  );
}

export default App;
