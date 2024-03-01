import React from 'react';
import member1 from '../../../public/images/tuhin.png'
import member2 from '../../../public/images/nazmul.webp'
import member3 from '../../../public/images/choyon.webp'
import member4 from '../../../public/images/shopno.webp'
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa6';


const Volunteers = () => {
    return (
        <>
        <div className='bg-stone-50 py-28'>
            <div className='w-[70%] mx-auto'>
                <div className='text-center md:px-0 px-5 mb-20'>
                    <h2 className='lg:text-5xl md:text-4xl text-3xl font-bold'>Our Volunteers</h2>
                    <p className='lg:text-xl md:text-lg text-base font-normal mt-5'>The volunteers who give their time and talents help to fulfill our mission.</p>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8'>
                    <div className="card bg-base-100 rounded-md cursor-pointer shadow-lg hover:transform hover:scale-110 duration-500 hover:shadow-red-100">
                        <div className="px-5 pt-5 flex-col h-full w-full">
                            <Image src={member1} alt="member1"   className="w-full  object-center object-cover h-full" />
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-primary">Tuhin Hossain</h2>
                            <p className=''>Founder</p>
                            <div className='social-icon flex gap-3 text-2xl bottom-0 w-full justify-center py-2 mt-2'>
                                <FaFacebook className='text-[#3b5998] hover-icon'></FaFacebook>
                                <FaLinkedin className='text-[#0077b5] hover-icon'></FaLinkedin>
                                <FaInstagram className='text-[#d53f66] hover-icon'></FaInstagram>
                                <FaTwitter className='text-[#1DA1F2] hover-icon'></FaTwitter>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 rounded-md cursor-pointer shadow-lg hover:transform hover:scale-110 duration-500 hover:shadow-red-100">
                        <div className="px-5 pt-5 flex-col h-[70%] w-full">
                            <Image src={member3} alt="member3" className="w-full  object-center object-cover h-full" />
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-primary">Choyon Khan</h2>
                            <p className=''>Co-founder</p>
                            <div className='social-icon flex gap-3 text-2xl bottom-0 w-full justify-center py-2 mt-2'>
                                <FaFacebook className='text-[#3b5998] hover-icon'></FaFacebook>
                                <FaLinkedin className='text-[#0077b5] hover-icon'></FaLinkedin>
                                <FaInstagram className='text-[#d53f66] hover-icon'></FaInstagram>
                                <FaTwitter className='text-[#1DA1F2] hover-icon'></FaTwitter>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 rounded-md cursor-pointer shadow-lg hover:transform hover:scale-110 duration-500 hover:shadow-red-100">
                        <dive className="px-5 pt-5 flex-col h-[70%] w-full">
                            <Image src={member2} alt="member2" className="w-full  object-center object-cover h-full" />
                        </dive>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-primary">Nazmul Huda</h2>
                            <p className=''>Co-Founder</p>
                            <div className='social-icon flex gap-3 text-2xl bottom-0 w-full justify-center py-2 mt-2'>
                                <FaFacebook className='text-[#3b5998] hover-icon'></FaFacebook>
                                <FaLinkedin className='text-[#0077b5] hover-icon'></FaLinkedin>
                                <FaInstagram className='text-[#d53f66] hover-icon'></FaInstagram>
                                <FaTwitter className='text-[#1DA1F2] hover-icon'></FaTwitter>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 rounded-md cursor-pointer shadow-lg hover:transform hover:scale-110 duration-500 hover:shadow-red-100">
                        <div className="px-5 pt-5 flex-col h-[70%] w-full">
                            <Image src={member4} alt="Shoes" className="w-full  object-center object-cover h-full" />
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-primary">Shopno Dey</h2>
                            <p className=''>Manager</p>
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