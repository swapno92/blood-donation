"use client"
import Lottie from 'lottie-react';
import loadingAnimation from '../../public/animations/blood-drop-loading.json'

const Loading = () => {
    
    return (
        <>
            <div className="w-full  flex items-center justify-center">
                <Lottie animationData={loadingAnimation} />
            </div>
        </>
    );
};

export default Loading;