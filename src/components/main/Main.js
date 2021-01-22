import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../index/Index';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <Route path='/' component={ Index }></Route>
            </Switch>
        );
    }
}

export default Main;