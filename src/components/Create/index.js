import React, { Component, Fragment } from 'react';

import Navigation from '../Navigation';

import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';

import climbingWall1 from '../../assets/images/climbing_wall.jpg';

class CreateBoard extends Component {

    render() {
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
                                        <div className="col-12 create__holds__actions__type create__holds__actions__type--start"> 
                                            Start 
                                            <RadioButtonUncheckedOutlinedIcon className="create__holds__actions__type--icon"/>
                                        </div>
                                        <div className="col-12 create__holds__actions__type create__holds__actions__type--hands"> 
                                            Hands
                                            <RadioButtonUncheckedOutlinedIcon className="create__holds__actions__type--icon"/> 
                                        </div>
                                        <div className="col-12 create__holds__actions__type create__holds__actions__type--feet"> 
                                            Feet 
                                            <RadioButtonUncheckedOutlinedIcon className="create__holds__actions__type--icon"/>
                                        </div>
                                        <div className="col-12 create__holds__actions__type create__holds__actions__type--finish"> 
                                            Finish 
                                            <CheckCircleOutlineOutlinedIcon className="create__holds__actions__type--icon"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default CreateBoard;