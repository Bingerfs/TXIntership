import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

class RepositoriesList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const userCards = this.props.users.map((user) => {
            const profileAvatar = user.avatar_url || 'assets/images/Generic-Profile-1600x1600.png'; 
            return (
                <div key='user.nickName' className="col-12 m-1">
                    <Card>
                        <div className='row'>
                            <div className='col-12 col-md-3'>
                                <CardImg width='100%' src={ profileAvatar } alt={ user.nickName } />
                            </div>
                            <div className='col-12 col-md-3'>
                                <CardBody>
                                    <CardTitle tag='h2'>{ user.nickName }</CardTitle>
                                    <CardText>
                                        Full Name: { user.name }
                                        <br></br>
                                        Github repo: <a href={ user.github_url }>{ user.github_url }</a>
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                </div>
            );
        });
        return (
            <div className='container'>
                <div className='row'>
                { userCards }
                </div>
            </div>
        );
    }
}

export default RepositoriesList;