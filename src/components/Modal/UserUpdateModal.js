import React from 'react';
import { CiSquareRemove } from "react-icons/ci";

const UserUpdateModal = ({showModal, closeModal}) => {
    if(!showModal) return null;
    return (
        <div className=' flex justify-center items-center  fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm'>
           <div className='w-1/2 flex flex-col '>
            <button onClick={() => closeModal()} className='text-4xl place-self-end text-primary font-semibold shadow-xl '><CiSquareRemove  /></button>
            <div className='bg-gray-200 py-12 px-10'>Modal</div>
           </div>
        </div>
    );
};

export default UserUpdateModal;