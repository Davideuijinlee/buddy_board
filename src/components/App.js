import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../assets/sass/main.scss';

import Dashboard from './Dashboard';
import Entries from './Entries';
import Journal from './Journal';


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/entries" component={Entries} />
                <Route path="/journal" component={Journal} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
