import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from '../Home';
import Shop from '../Shop';
import ArticlePage from '../ArticlePage';
import DetailPage from '../DetailPage';
import Blog from '../Blog';
import Calendar from '../Calendar';
import Basket from '../Basket';

const Main = () => {
    return (
        <main className="main-wrapper">
            <Switch>
              <Route path="/catalog" component={Shop}/>
              <Route path='/page/:id' render={(props) => (<ArticlePage {...props} />)}/>
              <Route path='/product/:id' render={(props) => (<DetailPage {...props} />)}/>
              <Route path="/blog" component={Blog}/>
              <Route path="/calendar" component={Calendar}/>
              <Route path="/mylist" component={Basket}/>
              <Route path="/" component={Home}/>
            </Switch>
        </main>
    )
};

export default Main;