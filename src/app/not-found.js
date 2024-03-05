'use client'
import Lottie from 'lottie-react';
import notFound404 from '../../public/animations/404NotFound.json'
const NotFoundPage = () => {
    // return <div></div>
    return (
        <>
            <div className="w-full  flex items-center justify-center">
                <Lottie animationData={notFound404} />
            </div>
        </>
    );
};

export default NotFoundPage;