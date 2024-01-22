import React from 'react';
import { MdPostAdd } from "react-icons/md";
import { BiShekel } from "react-icons/bi";

const ComNavbar = () => {
    return (
        <div className=' border-b-2 py-3 px-4 '>
            <div className='max-w-screen-lg mx-auto '> 
                <ul className='flex gap-5'>
                    <li className='flex items-center gap-2 border-r-2 pr-4 '> <MdPostAdd className='text-2xl' /> All Posts</li>
                    <li className='flex items-center gap-2 2 border-r-2 pr-4 '> <BiShekel className='text-2xl' /> Our Misstion</li>
                    <li className='flex items-center gap- pr-4 '> <BiShekel className='text-2xl' /> Roadmap</li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default ComNavbar;