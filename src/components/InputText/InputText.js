import React from 'react';
import './InputText.css';


const InputText = ({ name, value, title, onChange }) => {

    return(
        <div className="input-text">
            { title && (<label htmlFor={name}>{title}</label>) }
            <input type="text" id={name} name={name} value={value} onChange={onChange}/>
        </div>
    );
}

export default InputText;