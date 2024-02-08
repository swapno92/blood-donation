'use client'
import Lottie from 'lottie-react';
import loadingAnimation from '../../public/animations/loading.json'

const Loading = () => {
    // return <div></div>
    return (
        <>
            <div className="w-full h-screen flex items-center justify-center">
                <Lottie animationData={loadingAnimation} />
            </div>
        </>
    );
};

export default Loading;