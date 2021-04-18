import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";

import { AuthContext } from '../../context/AuthContext'

import './Navigation.css';

const TITLE_LOGO = 'ЦВЕТОЧНОЕ НАСТРОЕНИЕ';

const navItemsGuest = [
    {name: 'Главная', url: '/'},
    {name: 'Статьи', url: '/blog'},
    {name: 'Каталог', url: '/catalog'},
    {name: 'Мой список', url: '/mylist'},
];

const navItemsAuthed = [
    {name: 'Главная', url: '/'},
    {name: 'Статьи', url: '/blog'},
    {name: 'Каталог', url: '/catalog'},
    {name: 'Админ-карта', url: '/cardAdmin'},
];

const Header = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);
    const navItems = isAuthenticated ? navItemsAuthed : navItemsGuest;
    return (
        <header className="header-wrapper">
            <div className="header-container">
                <nav className="nav-extended teal darken-4">
                    <div className="nav-wrapper">
                    <a href="#" className="brand-logo">{TITLE_LOGO}</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {isAuthenticated ? (
                        <li>
                            <NavLink
                                exact
                                to={'/'}
                                onClick={() => logout()}
                            >
                                Выход
                            </NavLink>
                        </li>
                        ) : (
                        <li>
                            <NavLink
                                exact
                                to={'/auth'}
                            >
                                Вход/Регистрация
                            </NavLink>
                        </li>
                        )}
                    </ul>
                    </div>
                    <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                    {navItems.map(({name, url}) => {
                        return (
                            <li
                                key={name}
                                // onClick={() => setActiveLiName(name)}
                                className="tab"
                            >
                                <NavLink
                                    activeClassName='active'
                                    exact
                                    to={url}
                                >
                                    {name}
                                </NavLink>
                            </li>
                        )
                    })}
                    </ul>
                    </div>
                </nav>
                {/* <div className="header-logo">
                    {TITLE_LOGO}
                </div>
                <Navigation />*/}
            </div>
      </header>
    )
};

export default Header;
