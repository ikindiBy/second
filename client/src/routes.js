import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Home from './components/Home';
import Shop from './components/Shop';
import ArticlePage from './components/ArticlePage';
import DetailPage from './components/DetailPage';
import Blog from './components/Blog';
import Calendar from './components/Calendar';
import Basket from './components/Basket';
import AuthPage from './components/AuthPage';
import CardAdmin from './components/CardAdmin';

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/cardAdmin" component={CardAdmin}/>
                <Route path="/auth" component={AuthPage}/>
                <Route path="/catalog" component={Shop}/>
                <Route path='/page/:id' render={(props) => (<ArticlePage {...props} />)}/>
                <Route path='/product/:id' render={(props) => (<DetailPage {...props} />)}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/calendar" component={Calendar}/>
                <Route path="/mylist" component={Basket}/>
                <Route path="/" component={Home}/>
                <Redirect path="/cardAdmin" />
            </Switch>
        );
    }

    return (
        <Switch>
            <Route path="/auth" component={AuthPage}/>
            <Route path="/catalog" component={Shop}/>
            <Route path='/page/:id' render={(props) => (<ArticlePage {...props} />)}/>
            <Route path='/product/:id' render={(props) => (<DetailPage {...props} />)}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/calendar" component={Calendar}/>
            <Route path="/mylist" component={Basket}/>
            <Route path="/" component={Home}/>
            <Redirect path="/" />
        </Switch>
    )
}