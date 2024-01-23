import React from 'react';

import process1 from '../../../public/images/process_1.webp'
import process2 from '../../../public/images/process_2.webp'
import process3 from '../../../public/images/process_3.webp'
import Image from 'next/image';

const DonationProcess = () => {
    return (
        <>
            <div className='bg-stone-50 py-28'>
                <div className='max-w-screen-xl mx-auto'>
                    <div className='text-center md:px-0 px-5'>
                        <h2 className='lg:text-5xl md:text-4xl text-3xl font-bold'>Donation Process</h2>
                        <p className='lg:text-xl md:text-lg text-base font-normal mt-5'>The donation process from the time you arrive center until the time you leave</p>
                    </div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 mt-20 lg:px-0 md:px-10 px-5'>
                        <div className="card rounded-none cursor-pointer">
                            <figure className='relative'>
                                <Image src={process1} alt="blood donation process" />
                                <h2 className='text-5xl font-extrabold absolute px-8 py-6 bg-primary text-white bottom-0 right-0'>1</h2>
                            </figure>
                            <div className="card-body px-3">
                                <h2 className="card-title text-3xl hover:text-primary">REGISTRATION</h2>
                                <p className='text-[17px]'>You need to complete a very simple registration form. Which contains all required contact information to enter in the donation process.</p>
                            </div>
                        </div>
                        <div className="card rounded-none cursor-pointer">
                            <figure className='relative'>
                                <Image src={process2} alt="blood donation process" />
                                <h2 className='text-5xl font-extrabold absolute px-8 py-6 bg-primary text-white bottom-0 right-0'>2</h2>
                            </figure>
                            <div className="card-body px-3">
                                <h2 className="card-title text-3xl hover:text-primary">SCREENING</h2>
                                <p className='text-[17px]'>A drop of blood from your finger will take for simple test to ensure that your blood iron levels are proper enough for donation process.</p>
                            </div>
                        </div>
                        <div className="card rounded-none cursor-pointer">
                            <figure className='relative'>
                                <Image src={process3} alt="blood donation process" />
                                <h2 className='text-5xl font-extrabold absolute px-8 py-6 bg-primary text-white bottom-0 right-0'>3</h2>
                            </figure>
                            <div className="card-body px-3">
                                <h2 className="card-title text-3xl hover:text-primary">DONATION</h2>
                                <p className='text-[17px]'>After ensuring and passed screening test successfully you will be directed to a donor bed for donation. It will take only 6-10 minutes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DonationProcess;