import React, { Component } from 'react';
import UserRestRepository from '../../services/Users/UserRestRepository';
import UserServiceImpl from '../../services/Users/UserService';
import PageError from '../PageError';
import PageSpinner from '../PageSpinner';
import RepositoriesList from './RepositoriesList';

class RepositoriesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoading: true,
            hasError: false,
            errorMessage: '',
        }
        this.userService = new UserServiceImpl(new UserRestRepository('data.json'));
    }

    componentDidMount() {
        this.userService.getUsers()
        .then((users) => {
            this.setState({ users: users, isLoading: false });
        })
        .catch(error => {
            this.setState({ hasError: true, isLoading: false, errorMessage: error.message });
        });
    }

    render() {
        const contentRetrieved = this.state.hasError ? (<PageError errorMessage={ this.state.errorMessage }></PageError>) : (<RepositoriesList users={ this.state.users }></RepositoriesList>);
        return (
            <div className='container' style={{height: '100vh'}}>
                { this.state.isLoading ? (<PageSpinner></PageSpinner>) : contentRetrieved }
            </div>
        );
    }
}

export default RepositoriesContainer;