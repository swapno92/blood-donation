import React from 'react';
import member1 from '../../../public/images/member_1.webp'
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa6';


const Volunteers = () => {
    return (
        <>
        <div className='bg-stone-50 py-28'>
            <div className='max-w-screen-xl mx-auto'>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10'>
                    <div className="card bg-base-100 rounded-md cursor-pointer card-shadow">
                        <figure className="px-5 pt-5 flex-col">
                            <Image src={member1} alt="Shoes" className="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-primary">MELISSA MUNOZ</h2>
                            <p className=''>Co-founder</p>
                            <div className='social-icon flex gap-3 text-2xl bottom-0 w-full justify-center py-2 mt-2'>
                                <FaFacebook className='text-[#3b5998] hover-icon'></FaFacebook>
                                <FaLinkedin className='text-[#0077b5] hover-icon'></FaLinkedin>
                                <FaInstagram className='text-[#d53f66] hover-icon'></FaInstagram>
                                <FaTwitter className='text-[#1DA1F2] hover-icon'></FaTwitter>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 rounded-md cursor-pointer card-shadow">
                        <figure className="px-5 pt-5 flex-col">
                            <Image src={member1} alt="Shoes" className="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-primary">MELISSA MUNOZ</h2>
                            <p className=''>Co-founder</p>
                            <div className='social-icon flex gap-3 text-2xl bottom-0 w-full justify-center py-2 mt-2'>
                                <FaFacebook className='text-[#3b5998] hover-icon'></FaFacebook>
                                <FaLinkedin className='text-[#0077b5] hover-icon'></FaLinkedin>
                                <FaInstagram className='text-[#d53f66] hover-icon'></FaInstagram>
                                <FaTwitter className='text-[#1DA1F2] hover-icon'></FaTwitter>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 rounded-md cursor-pointer card-shadow">
                        <figure className="px-5 pt-5 flex-col">
                            <Image src={member1} alt="Shoes" className="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-primary">MELISSA MUNOZ</h2>
                            <p className=''>Co-founder</p>
                            <div className='social-icon flex gap-3 text-2xl bottom-0 w-full justify-center py-2 mt-2'>
                                <FaFacebook className='text-[#3b5998] hover-icon'></FaFacebook>
                                <FaLinkedin className='text-[#0077b5] hover-icon'></FaLinkedin>
                                <FaInstagram className='text-[#d53f66] hover-icon'></FaInstagram>
                                <FaTwitter className='text-[#1DA1F2] hover-icon'></FaTwitter>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 rounded-md cursor-pointer card-shadow">
                        <figure className="px-5 pt-5 flex-col">
                            <Image src={member1} alt="Shoes" className="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-primary">MELISSA MUNOZ</h2>
                            <p className=''>Co-founder</p>
                            <div className='social-icon flex gap-3 text-2xl bottom-0 w-full justify-center py-2 mt-2'>
                                <FaFacebook className='text-[#3b5998] hover-icon'></FaFacebook>
                                <FaLinkedin className='text-[#0077b5] hover-icon'></FaLinkedin>
                                <FaInstagram className='text-[#d53f66] hover-icon'></FaInstagram>
                                <FaTwitter className='text-[#1DA1F2] hover-icon'></FaTwitter>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
           
        </>
    );
};

export default Volunteers;