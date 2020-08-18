import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './FormasPagamento.css';

const initialValues = {
    descricao: ''
}

const PageFormasPagamento = () => {
    const [formasPagamento, setFormasPagamento] = useState([]);
    const [values, setValues] = useState(initialValues);
    const [idFormaPagamento, setIdFormaPagamento] = useState(0);

    function onChange(event) {
        const { name, value } = event.target;
        setValues({...values, [name]:value});
    }

    function onSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8080/formas_pagamento', values)
            .then(response => {
                setIdFormaPagamento(response.data.id);
            });
    }

    useEffect(() => {
       axios.get('http://localhost:8080/formas_pagamento')
        .then((response) => {
            setFormasPagamento(response.data);
        });
    },[idFormaPagamento]);
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="descricao" >Descrição</label>
                    <input id="descricao" name="descricao" type="text" onChange={onChange}/>
                </div>

                <button>Adicionar</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {formasPagamento.map(formaPagamento =>(
                    <tr key={formaPagamento.id}>
                        <td>{formaPagamento.id}</td>
                        <td>{formaPagamento.descricao}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PageFormasPagamento;