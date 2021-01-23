import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../index/Index';
import NotFound from '../not-found/NotFound';
import RepositoriesContainer from '../repositories-list/RepositoriesContainer';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' component={ Index }></Route>
                <Route exact path='/repositories' component={ RepositoriesContainer }></Route>
                <Route component={ NotFound }></Route>
            </Switch>
        );
    }
}

export default Main;