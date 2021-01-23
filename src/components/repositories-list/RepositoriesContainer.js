import React, { Component } from 'react';
import Data from '../../share/data.json';
import RepositoriesList from './RepositoriesList';

class RepositoriesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] }
    }

    componentDidMount() {
        this.setState({ users: Data.users });
    }

    render() {
        return (
            <RepositoriesList users={ this.state.users }></RepositoriesList>
        );
    }
}

export default RepositoriesContainer;