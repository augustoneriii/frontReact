import React from 'react'

function InputGroup({ label, type, placeholder, name, handleChange, value }) {
    return (
        <div className="input-group mb-3">
            <label
                className="input-group-text"
            >{label}</label>
            <input
                type={type}
                className="form-control"
                placeholder={placeholder}
                name={name}
                onChange={handleChange}
                value={value}
            />
        </div>
    )
}

export default InputGroup