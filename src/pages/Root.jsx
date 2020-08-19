import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import PageEstadosSearch from './Estados/Estados';
import FormEstado from './Estados/FormEstado/FormEstado';
import PageFormasPagamento from './FormasPagamento/FormasPagamento';
import PagesCozinhas from './Cozinhas/Cozinhas';

const Root = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={PageEstadosSearch}/>
                <Route path="/estados" exact component={FormEstado}/>
                <Route path="/formas_pagamento" exact component={PageFormasPagamento}/>
                <Route path="/cozinhas" exact component={PagesCozinhas}/>
            </Switch>
        </Router>
    );
};

  export default Root;