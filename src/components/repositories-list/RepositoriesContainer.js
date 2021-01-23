import React, { Component } from 'react';
import UserFileRepository from '../../services/Users/UserFileRepository';
import UserRestRepository from '../../services/Users/UserRestRepository';
import UserServiceImpl from '../../services/Users/UserService';
import RepositoriesList from './RepositoriesList';

class RepositoriesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] }
        this.userService = new UserServiceImpl(new UserRestRepository('data.json'));
    }

    componentDidMount() {
        this.userService.getUsers()
        .then((users) => {
            this.setState({ users: users });
        });
    }

    render() {
        return (
            <RepositoriesList users={ this.state.users }></RepositoriesList>
        );
    }
}

export default RepositoriesContainer;