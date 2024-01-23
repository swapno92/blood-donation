'use client'
import Lottie from 'lottie-react';
import Heart from './../../../public/animations/donate-blood.json'
import { useForm } from "react-hook-form"
import Link from 'next/link';
import { IoArrowUndoOutline } from "react-icons/io5";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { SiGmail  } from "react-icons/si";
import { useState } from 'react';




const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    

    return (
        <>
            <div className='max-w-screen-lg mx-auto'>
                <div className=" flex flex-col lg:flex-row-reverse items-center justify-between gap-5 p-5 my-10 border border-primary/20 rounded-xl">
                    <div className="w-1/2 lg:text-left">
                        <Lottie animationData={Heart} />
                    </div>

                    <div className="w-1/2 card shrink-0 bg-base-100 p-10">
                            <Link href={'/'} className='mb-5'>
                                <div className='flex items-center gap-2 hover:text-primary text-sm'>
                                    <IoArrowUndoOutline />
                                    <p>Back to Home</p>
                                </div>
                            </Link>
                            <div className=' pb-0'>
                                <p className='italic text-sm'>Save A Life</p>
                                <h2 className='text-4xl font-semibold my-3'>SignIn to <span className='text-primary'>DropSync</span></h2>
                                <p className='text-sm'>Not A Life Saver? <Link href={'/registration'} className='text-blue-500 hover:text-primary font-semibold'>Sign Up Now</Link></p>
                                <div className='divider'></div>
                            </div>
                           
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body p-0 my-5">
                            
                            <div className="form-control">
                                <input {...register("email", { required: true })} type="email" placeholder="Your Email..." className="input focus:border-0 focus-within:outline-none border-0 border-b-2 border-gray-400 focus:border-b-2 focus:border-primary rounded-none px-1" />
                                {errors.email && <span className='text-red-600 text-sm mt-2'>Enter your Email address*</span>}
                            </div>

                            <div className="form-control mt-4 relative">
                                <input {...register("password", { required: true })} type={showPassword ? 'text' : 'password'} placeholder="Password" className="input focus:border-0 focus-within:outline-none border-0 border-b-2 border-gray-400 focus:border-b-2 focus:border-primary rounded-none px-1" />
                                <span className="cursor-pointer absolute right-3 top-4" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                                {errors.password && <span className='text-red-600 text-sm mt-2'>Enter your Password*</span>}

                                <label className="label mt-4">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-primary border-0 hover:bg-secondary text-white text-lg shadow-lg shadow-primary/30 rounded-sm">Sign In</button>
                            </div>
                        </form>
                        <div className="divider divider-error">OR</div>
                        <div className='flex items-center gap-5 mt-4'>
                            <button className='w-1/2'>
                                <div className='flex items-center text-white bg-[#3b5998] justify-center p-2 gap-3'>
                                    <FaFacebook />
                                    <p>Facebook</p>
                                </div>
                            </button>
                            <button className='w-1/2'>
                                <div className='flex items-center text-white bg-[#dd4b39] justify-center p-2 gap-3'>
                                    <SiGmail   />
                                    <p>Google</p>
                                </div>  
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;