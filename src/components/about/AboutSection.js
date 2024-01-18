import React from 'react';

const AboutSection = () => {
    return (
        <>
           <div className='container max-w-7xl mx-auto my-24'>
                <div className='lg:flex gap-12 lg:flex-row flex-col'>
                    <div className='md:w-1/2 w-2/3 mx-auto'>
                        <img src="https://i.ibb.co/LYMzXdy/UVG5CCF.jpg" alt="" />
                    </div>
                    <div className='lg:w-1/2 space-y-5 w-full px-10 lg:px-0 lg:mt-0 mt-10'>
                        <h4 className='text-primary text-lg font-medium'>About Us</h4>
                        <h2 className='md:text-5xl text-3xl font-bold md:leading-tight'>Together We Can Make World More Health & Better</h2>
                        <p className='text-zinc-500 font-poppins tracking-wide leading-6'>Welcome to Dropsync, where every drop counts in the tapestry of life. At Dropsync, our mission is to bridge the gap between those in need and those willing to give the gift of life. We believe that blood donation is a simple yet profound act of kindness that can make a significant impact on the well-being of individuals and communities.</p>
                        <button className='btn bg-primary text-white hover:bg-secondary rounded px-10'>Contact Us</button>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default AboutSection;