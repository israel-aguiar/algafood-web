import React from 'react';

import './Grid.css';


const Grid = ({lista, titulosColunas}) => {
    var chaves = Object.keys(titulosColunas);
    var titulos = Object.values(titulosColunas);
//    console.log(chaves);
//    console.log(titulos);

    return (
        <div className="component-grid">
            <table>
                {titulosColunas && (
                <thead>
                <tr>
                    {titulos.map(titulo => (
                    <th key={titulo}>{titulo}</th>
                    ))}
                </tr>
                </thead>
                )}
                <tbody>
                {lista.map(item => (
                <tr key={item.id}>
                    {chaves.map(chave => (
                        <td key={chave}>{item[chave]}</td>
                    ))}
                </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Grid;