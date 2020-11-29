import React from 'react';

import './FilterItem.css';  

const FilterItem = ({
    name,
    onClick,
    filterData,
    isActive,
}) => {
    const onFilterClick = (e) => {
        e.preventDefault();
        onClick(e, filterData);
    }
    return (
        <li className={`filter-item ${isActive && "filter-item--active"}`}>
            <a href="" onClick={onFilterClick}>{name}</a>
        </li>
    )
};

export default FilterItem;