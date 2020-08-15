import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Grid from '../../../components/Grid/Grid';
import Input from '../../../components/InputText/InputText'
import UIContainer from '../../Container/Container';

import './FormEstado.css'

const initialValue = {
    nome: ""
};

const FormEstado = () => {
    const [values, setValues] = useState(initialValue);
    const [estadoId, setestadoId] = useState(0);

    function onChange(ev) {
        const {name, value } = ev.target;
        setValues({...values, [name]: value});
    }

    function onSubmit(ev) {
        ev.preventDefault();
        axios.post("http://localhost:8080/estados", values)
            .then(response => {
                setestadoId(response.data.id);
            })
            .catch(error => {
                if(error.response) {
                    console.error(error.response.data.objects);
                }
            });
    }

    // >> estados
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
    },[estadoId]);
    // << estados

    return (
        <UIContainer>
            <div className="form-estado">
                <form onSubmit={onSubmit}>
                    <Input name="nome" title="Nome" value="" onChange={onChange} />
                    <button type="submit">Adicionar</button>
                </form>
            </div>

            <Grid lista={estados} titulosColunas={titulosEstados}/>
        </UIContainer>
    );
};

export default FormEstado;