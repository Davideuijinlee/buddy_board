import React from 'react';
import { NavLink } from 'react-router-dom';

export default props => {
    return (
        <nav id="sidenav" className="sidenav">
            <div className="container">
                <div className="row">
                    <ul className="sidenav__list">
                        <li className="sidenav__item">
                            <NavLink className="sidenav__link" exact to="/">Dashboard</NavLink>
                        </li>
                        <li className="sidenav__item">
                            <NavLink className="sidenav__link" to="/Log">Log</NavLink>
                        </li>
                        <li className="sidenav__item">
                            <NavLink className="sidenav_link" to="/Create">Set Problems</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}