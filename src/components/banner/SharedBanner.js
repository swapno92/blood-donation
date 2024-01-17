import React from 'react';

const SharedBanner = ({bannerImg, heading}) => {
    return (
        <div>
            <div className='text-center py-24' style={{backgroundImage: `url(./public/about-image.jpg)`}}>
                <h2 className='text-4xl font-bold'>{heading}</h2>
            </div>
        </div>
    );
};

export default SharedBanner;