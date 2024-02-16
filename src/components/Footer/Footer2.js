import React from 'react';
import logo from '../../../public/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer2 = () => {
    return (
        <>
            <div className='bg-primary/10' >
                <footer className="grid lg:grid-cols-6 grid-cols-2 gap-5 py-10 lg:px-0 md:px-10 px-5 max-w-screen-xl mx-auto text-base-content">
                    <aside className='col-span-2 md:pr-10 pr-0 -mt-3 lg:mb-0 mb-10'>
                        <Image alt='logo' src={logo}/>
                        <p className='my-3'>We are world largest and trustful blood donation center. We have been working since 1973 with a prestigious vision to helping patient to provide blood. </p>
                        <div className='social-icon flex gap-5 text-2xl bottom-0 w-full justify-start py-2 mt-2'>
                                <FaFacebook className='text-primary hover-icon cursor-pointer text-3xl'></FaFacebook>
                                <FaLinkedin className='text-primary hover-icon cursor-pointer text-3xl'></FaLinkedin>
                                <FaInstagram className='text-primary hover-icon cursor-pointer text-3xl'></FaInstagram>
                                <FaTwitter className='text-primary hover-icon cursor-pointer text-3xl'></FaTwitter>
                            </div>
                    </aside> 
                    <nav className=''>
                        <header className="footer-title text-xl text-secondary">Company</header> 
                        <div className='flex flex-col gap-3 mt-5'>
                            <Link href={'/about'} className="link link-hover hover:text-primary">About Us</Link>
                            <Link href={'/contact'} className="link link-hover hover:text-primary">Contact Us</Link>
                            <Link href={'/community'} className="link link-hover hover:text-primary">Community</Link>
                            <Link href={'/'} className="link link-hover hover:text-primary">Support</Link>
                        </div>
                    </nav> 
                    <nav>
                        <header className="footer-title text-xl text-secondary">Legal</header> 
                        <div className='flex flex-col gap-3 mt-5'>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </div>
                    </nav>
                    <div className='col-span-2 lg:mt-0 mt-10'>
                        <div className='mb-5'>
                            <header className="footer-title text-xl text-secondary">Newsletter</header> 
                            <p className="mt-5">Join our newsletter to get top news before anyone else.</p>
                        </div>
                        <form className="">
                            <div className="w-full">
                                <input id='7' type="email" placeholder="Your Email..." className="input focus:border-0 focus-within:outline-none border-0 border-b-2 border-gray-400 focus:border-b-2 focus:border-primary rounded-none px-3 w-full" />
                                <button className="btn w-full bg-primary border-0 hover:bg-secondary text-white text-lg shadow-md shadow-primary/30 rounded-sm mt-5">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </footer>
                
            </div>
                <footer className="footer footer-center bg-primary text-white p-4">
                    <aside>
                        <p className='text-base'>Copyright © 2024 - All right reserved by DropSync Ltd</p>
                    </aside>
                </footer>
            
        </>
    );
};

export default Footer2;