import { Alert } from "reactstrap"


const PageError = (props) => {
    return (
        <div className='row h-100'>
            <div className='col my-auto'>
                <Alert color='danger'>
                    <h2 className="alert-heading">Error!</h2>
                    <p>{ props.errorMessage }</p>
                </Alert>
            </div>
        </div>
    );
}

export default PageError;