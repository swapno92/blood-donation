import React from 'react';

const SharedBanner = ({bannerImg, heading}) => {
    return (
        <div>
            <div className='text-center py-24 h-11' style={{backgroundImage: `url(${bannerImg})`}}>
                <h2 className='text-3xl font-bold'>{heading}</h2>
            </div>
        </div>
    );
};

export default SharedBanner;