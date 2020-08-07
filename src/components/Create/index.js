import React, { Fragment } from 'react';

import Navigation from '../Navigation';

import climbingWall1 from '../../assets/images/climbing_wall.jpg';

export default props => {
    return (
        <Fragment>
            <Navigation/>
            <div id="create" className="create">
                <div className="container">
                    <div className="row">
                        <div className="create__wrapper col-12">
                            <div className="col-10 create__wall__container">
                                <img className="create__wall__photo" src={climbingWall1} alt=""/>
                            </div>
                            <div className="col-2 create__holds__container">
                                <div className="col-10 create__holds__actions offset-1">
                                    <div className="col-12 create__holds__actions__type"> Hands </div>
                                    <div className="col-12 create__holds__actions__type"> Feet </div>
                                    <div className="col-12 create__holds__actions__type"> Start </div>
                                    <div className="col-12 create__holds__actions__type"> Finish </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}