import React, { useState, useEffect } from 'react';

import './Cozinhas.css';

import axios from 'axios';

const initialValues = {
    nome: ''
}

const PagesCozinhas = () => {

    const [cozinhas, setCozinhas] = useState([]);
    const [values, setValues] = useState(initialValues);
    const [idCozinhas, setIdCozinhas] = useState(0);

    function onChange(event) {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }

    function onSubmit(event) {
        event.preventDefault();
        console.log(values)
        axios.post('http://localhost:8080/cozinhas',values)
            .then(response => {
                setIdCozinhas(response.data.id);
            });
    }

    useEffect(() => {
        axios.get('http://localhost:8080/cozinhas')
            .then(response => {
                setCozinhas(response.data.contents);
            });
    }, [idCozinhas]);


    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input id="nome" name="nome" type="text" onChange={onChange} />
                </div>
                <button>Adicionar</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {cozinhas.map(cozinha => (
                        <tr key={cozinha.id}>
                            <td>
                                {cozinha.id}
                            </td>
                            <td>
                                {cozinha.nome}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PagesCozinhas;