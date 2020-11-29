
import React from 'react';

import './Chevron.css';

export const ChevronDirection = {
    TOP: 'top',
    BOTTOM: 'bottom',
    RIGHT: 'right',
    LEFT: 'left',
};

const Chevron = ({ 
    onChevronClick,
    chevronDirection,
    className,
}) => {
    const onClick = () => {
        onChevronClick();
    }
    return (
        <a className={`chevron ${className}`} onClick={onClick}>
            <span className={
                `chevron__span
                chevron__span--${chevronDirection}`
                }
            />
        </a>
    )
};

export default Chevron;