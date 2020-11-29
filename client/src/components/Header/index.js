import React from 'react';

import Navigation from './Navigation';

const TITLE_LOGO = 'ЦВЕТОЧНОЕ НАСТРОЕНИЕ';

const Header = () => {
    return (
        <header className="header-wrapper">
            <div className="header-container">
                <div className="header-logo">
                    {TITLE_LOGO}
                </div>
                <Navigation />
            </div>
      </header>
    )
};

export default Header;
