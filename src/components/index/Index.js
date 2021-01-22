import React, { Component } from 'react';

class Index extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container' style={{height: '100vh'}}>
                <div className='row h-100'>
                    <div className='col-sm-12 my-auto d-flex justify-content-center'>
                        <ul>
                            <li>
                                <a href='/repositories'>Repositories</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;