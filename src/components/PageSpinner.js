import { Spinner } from "reactstrap";

const PageSpinner = () => {
    return (
        <div className='row h-100'>
            <div className='col-sm-12 my-auto'>
                <div className='row justify-content-center'>
                    <Spinner style={{width: '50vh', height: '50vh'}}></Spinner>
                </div>
            </div>
        </div>
    );
}

export default PageSpinner;