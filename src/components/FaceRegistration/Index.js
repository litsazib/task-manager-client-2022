import React, {useEffect} from 'react';


const FaceIDRegistration = () => {

    const howItWorks = () => {
        window.enrollNewUser();
    }

    return (
        <div className="container">
            <div className="row  justify-content-center">
                <div className="col-md-10 col-lg-10 center-screen">
                    <div className="card animated fadeIn w-100 p-3">
                        <div className="card-body">
                            <h4>Face-ID Registration</h4>
                            <hr/>
                            <div className="container-fluid m-0 p-0">
                                <div className="row m-0 p-0">
                                </div>
                                <div lassName="row mt-2 p-0">
                                    <div className="col-md-4 p-2">
                                        <button  onClick={howItWorks} className="btn mt-3 w-100 float-end btn-primary animated fadeInUp">Enroll</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FaceIDRegistration;