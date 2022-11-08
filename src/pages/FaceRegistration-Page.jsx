import React, {Fragment, lazy, Suspense} from 'react';
import LazyLoader from "../components/masterLayout/LazyLoader";
const FaceIDRegistration =lazy(() => import('../components/FaceRegistration/Index'));
const FaceRegistration = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                <FaceIDRegistration/>
            </Suspense>
        </Fragment>
    );
};

export default FaceRegistration;