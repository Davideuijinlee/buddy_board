import React, { Fragment } from 'react';

import Stats from './Stats';
import Board from './Board';
import Entry from './Entry';
import Navigation from '../Navigation';

export default props => {
    return (
        <Fragment>
            <Navigation/>
            <div id="dashboard" className="dashboard">
                <Entry/>
                <Board/>
                <Stats/>
            </div>
        </Fragment>
        
    )
}