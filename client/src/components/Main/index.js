import React, { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext'
import { useRoutes } from '../../routes';

const Main = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const routes = useRoutes(isAuthenticated);
    return (
        <main className="main-wrapper">
            {routes}
        </main>
    )
};

export default Main;