import React, {useState} from 'react';
import { NavLink } from "react-router-dom";

import './Navigation.css';

const navItems = [
    {name: 'Главная', url: '/'},
    {name: 'Статьи', url: '/blog'},
    {name: 'Каталог', url: '/catalog'},
    // {name: 'Мой список', url: '/mylist'},
    // {name: 'Календарь', url: '/calendar'},
    // {name: 'Сервисы', url: '/services'},
];

const Navigation = () => {
    const [activeLiName, setActiveLiName] = useState(navItems[0].name);

    return (
        <div className="navigation">
            <ul className="nav-list">
                {navItems.map(({name, url}) => {
                    return (
                        <li
                            key={name}
                            onClick={() => setActiveLiName(name)}
                            className={`nav-list__item ${activeLiName === name && "nav-list__item--active"}`}
                        >
                            <NavLink activeClassName='active' exact to={url}>
                                {name}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default Navigation;