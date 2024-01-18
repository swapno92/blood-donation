import React from 'react';

const SharedBanner = ({bannerImg, heading}) => {
    return (
        <div className=''>
            <div className='hero text-center' style={{backgroundImage: `url(${bannerImg})`}}>
            <div className="hero-overlay bg-black bg-opacity-40"></div>
                <h2 className='text-5xl font-bold py-40 text-white'>{heading}</h2>
            </div>
        </div>
    );
};

export default SharedBanner; 