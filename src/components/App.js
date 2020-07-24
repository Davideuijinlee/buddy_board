import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../assets/sass/main.scss';

import Dashboard from './Dashboard';
import Log from './Log';
import Journal from './Journal';


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/Log" component={Log} />
                <Route path="/journal" component={Journal} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
