import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import Grid from '../../../components/Grid/Grid';
import InputText from '../../../components/InputText/InputText'
import UIContainer from '../../Container/Container';

import './FormEstado.css'

const initialValue = {
    nome: ""
};

const FormEstado = () => {
    const [values, setValues] = useState(initialValue);
    const [countSave, setCountSave] = useState(0);
    const idEstado = useRef(null);
    
    const clearValues = () => {
        setValues(initialValue);
    }

    const incrementCountSave = () => {
        setCountSave(countSave + 1);
    }

    function onChange(ev) {
        const {name, value } = ev.target;
        setValues({...values, [name]: value});
    }

    function onSubmit(ev) {
        ev.preventDefault();
        let url = idEstado.current
            ? `http://localhost:8080/estados/${idEstado.current}`
            : `http://localhost:8080/estados`
        
        let method = idEstado.current ? "put" : "post";
        

        axios[method](url, values)
            .then(response => {
                incrementCountSave();
                idEstado.current = null;
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

    function onClickRow(eventProps) {
        let t = {...eventProps.item}
        idEstado.current = eventProps.item.id;
        delete t.id;
        setValues(t);
    }

    useEffect(() => {
        axios.get("http://localhost:8080/estados")
            .then(response => {
                setEstados(response.data);
                clearValues();
            });
    },[countSave]);
    // << estados

    return (
        <UIContainer>
            <div className="form-estado">
                <form onSubmit={onSubmit}>
                    <InputText name="nome" title="Nome" value={values.nome} onChange={onChange} />
                    <button type="submit">Adicionar</button>
                </form>
            </div>

            <Grid lista={estados} titulosColunas={titulosEstados} onClickRow={onClickRow}/>
        </UIContainer>
    );
};

export default FormEstado;