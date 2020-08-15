import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Grid from '../../components/Grid/Grid';

const PageEstadosSearch = () => {
    const [estados, setEstados] = useState([]);
    var titulosEstados = {
        id: "ID",
        nome: "NOME"
    };

    useEffect(() => {
        axios.get("http://localhost:8080/estados")
            .then(response => {
                setEstados(response.data);
            });
    },[]);

    return(<Grid lista={estados} titulosColunas={titulosEstados}/>);

};

export default PageEstadosSearch;