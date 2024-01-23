import React from 'react';
import logo from '../../../public/logo.png'
import Image from 'next/image';
import Link from 'next/link';

const Footer2 = () => {
    return (
        <>
            <div className='bg-primary/10' >
                <footer className="grid grid-cols-5 gap-5 py-28 max-w-screen-xl mx-auto text-base-content">
                    <aside className='col-span-2 pr-10'>
                        <Image src={logo}/>
                        <p>We are world largest and trustful blood donation center. We have been working since 1973 with a prestigious vision to helping patient to provide blood. </p>
                    </aside> 
                    <nav className=''>
                        <header className="footer-title text-xl text-secondary">Services</header> 
                        <div className='flex flex-col gap-3'>
                            <Link href={'/'} className="link link-hover hover:text-primary">Branding</Link>
                            <Link href={'/'} className="link link-hover hover:text-primary">Design</Link>
                            <Link href={'/'} className="link link-hover hover:text-primary">Marketing</Link>
                            <Link href={'/'} className="link link-hover hover:text-primary">Advertisement</Link>
                        </div>
                    </nav> 
                    <nav>
                        <header className="footer-title">Company</header> 
                        <div className='flex flex-col'>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </div>
                    </nav> 
                    <nav>
                        <header className="footer-title">Legal</header> 
                        <div className='flex flex-col'>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </div>
                    </nav>
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