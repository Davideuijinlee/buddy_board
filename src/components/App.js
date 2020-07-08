import React, {Fragment} from 'react';

import '../assets/sass/main.scss';

import Navigation from './Navigation';

const App = () => {
    return (
        <Fragment>
            <Navigation/>
            <section>Entries</section>
            <section>Data</section>
        </Fragment>
    )
}

export default App;
