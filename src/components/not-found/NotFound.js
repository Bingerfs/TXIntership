import { Jumbotron } from "reactstrap"

const NotFound = () => {
    return (
        <div style={{height: '100vh'}}>
            <div className='row h-100'>
                <div className='col-sm-12 my-auto'>
                <Jumbotron className='row justify-content-center'>
                    <ul>
                        <h1 className="display-3">404</h1>
                        <p className="lead">Looks like you got lost, huh?</p>
                    </ul>
                </Jumbotron>
                </div>
            </div>
        </div>
    );
}

export default NotFound;