'use client'
import Lottie from 'lottie-react';
import Error from '../../public/animations/404NotFound.json'
const NotFoundPage = () => {
    return (
        <>
            <div className='max-w-screen-xl mx-auto h-screen flex items-center'>
                <div className="w-1/2 mx-auto">
                    <Lottie animationData={Error} />
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;