import React from 'react';
const Input = ({name, label, value, error, onChange, type, placeholder}) => {
    return (
        <div className="form-group">
            <label className="labels" htmlFor={name}>{label} </label>
            <input
                value={value}
                onChange = {onChange}
                type={type}
                name={name}
                id={name}
                className="form-control"
                placeholder={placeholder}
            />
            {error && <div className="alert alert-danger">{error} </div>}
        </div>
    );
};
export default Input;