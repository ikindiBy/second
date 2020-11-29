import React from 'react';

import './Button.css';

const Button = ({text, icon, onClick, className, disabled}) => {
    return (
        <button
            onClick={onClick}
            className={`button-base ${className}`}
            disabled={disabled}
        >
            {text}
        </button>
    )
};

export default Button;