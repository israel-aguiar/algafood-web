import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import PageEstadosSearch from './Estados/Estados';
import FormEstado from './Estados/FormEstado/FormEstado';
import PageFormasPagamento from './FormasPagamento/FormasPagamento';


const Root = () => {
    return(
        <Router>
            <Switch>
            <Route path="/" exact component={PageEstadosSearch}/>
            <Route path="/estados" component={FormEstado}/>
            <Route path="/formas_pagamento" component={PageFormasPagamento}/>
            </Switch>
        </Router>
    );
};

  export default Root;