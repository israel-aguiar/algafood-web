import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import PageEstadosSearch from './Estados/Estados';
import FormEstado from './Estados/FormEstado/FormEstado';


const Root = () => {
    return(
        <Router>
            <Switch>
                <Route path="/estados" component={FormEstado}/>
                <Route path="/" component={PageEstadosSearch}/>
            </Switch>
        </Router>
    );
};

  export default Root;