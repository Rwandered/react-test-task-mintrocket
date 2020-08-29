import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Redirect, Route} from "react-router-dom";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import { PrivateRouter } from "./utils/privateRouter";
import {useDispatch} from "react-redux";
import {changeAuth} from "./redux/actions/actionCreators";
import './App.scss';



const App = () => {
  const dispatch = useDispatch()

  useEffect( () => {
    const token = localStorage.getItem('token')
    dispatch( changeAuth(token) )
    // eslint-disable-next-line
  }, [])

  return (
    <Router>
      <Switch>
        <PrivateRouter exact path={'/'} component={ Main }/>
        <Route exact path={'/auth'} component={ Auth }/>
        <Redirect to={'/auth'}/>
      </Switch>
    </Router>
  );
}

export default App;
