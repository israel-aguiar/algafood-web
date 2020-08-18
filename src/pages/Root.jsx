import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import PageEstadosSearch from './Estados/Estados';
import FormEstado from './Estados/FormEstado/FormEstado';
import PagesCozinhas from './Cozinhas/Cozinhas';

const Root = () => {
    return(
        <Router>
            <Switch>
                <Route path="/estados" component={FormEstado}/>
                <Route path="/" exact component={PageEstadosSearch}/>
                <Route path="/cozinhas" component={PagesCozinhas}/>
            </Switch>
        </Router>
    );
};

  export default Root;