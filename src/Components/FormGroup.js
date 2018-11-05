import React from 'react';

const FormGroup = ({
    label,
    name,
    value,
    placeholder,
    type,
    onChange
    }) => {
    return (
        <div className="form-group">
            <label htmlFor="name">{label}</label>
            <input className="form-control"
                   name={name}
                   type={type}
                   placeholder={placeholder}
                   value={value}
                   onChange={onChange}
            />
        </div>
    );
}


export default FormGroup;