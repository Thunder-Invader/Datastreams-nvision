import React from 'react';
import TestComponent from './component/TestComponent';
import NavBar from './component/NavBar';
import { Router, Route, Switch } from "react-router-dom";
import SendingPage from './component/SendingPage';
import DocumentsPage from './component/DocumentsPage';
import history from "./utils/history";
import AddDetails from './component/AddDetails';
import Confirmation from './component/Confirmation';
import DetailCheck from './component/DetailCheck';


function App() {
  return (
  <>
  <Router history={history}>
                <header>
                    <NavBar />
                </header>
                <Switch>
                    <Route path="/" exact />
                    <Route path="/Dashboard" component={TestComponent} />
                    <Route path="/Documents" component={DocumentsPage} />
                    <Route path="/Sending" component={SendingPage} />
                    <Route path="/Details" component={AddDetails} />
                    <Route path="/Check" component={DetailCheck} />
                    <Route path="/Confirm" component={Confirmation} />
                </Switch>
    </Router>
  </>
  );
}

export default App;
