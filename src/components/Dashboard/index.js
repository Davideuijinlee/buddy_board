import React, { Fragment } from 'react';

import Activity from './Activity';
import Data from './Data';
import Entry from './Entry';
import Navigation from '../Navigation';

export default props => {
    return (
        <Fragment>
            <Navigation/>
            <div id="dashboard" className="dashboard">
                <Entry/>
                <Data/>
                <Activity/>
            </div>
        </Fragment>
        
    )
}