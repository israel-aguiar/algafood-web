import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import PageEstadosSearch from './Estados/Estados';


const Root = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" component={PageEstadosSearch}/>
            </Switch>
        </Router>
    );
};

  export default Root;