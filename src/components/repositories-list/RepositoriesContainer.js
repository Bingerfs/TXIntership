import React, { Component } from 'react';
import UserRestRepository from '../../services/Users/UserRestRepository';
import UserServiceImpl from '../../services/Users/UserService';
import PageSpinner from '../PageSpinner';
import RepositoriesList from './RepositoriesList';

class RepositoriesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoading: true,
        }
        this.userService = new UserServiceImpl(new UserRestRepository('data.json'));
    }

    componentDidMount() {
        this.userService.getUsers()
        .then((users) => {
            this.setState({ users: users, isLoading: false });
        });
    }

    render() {
        return (
            <>
                { this.state.isLoading ? (<PageSpinner></PageSpinner>) : (<RepositoriesList users={ this.state.users }></RepositoriesList>) }
            </>
        );
    }
}

export default RepositoriesContainer;