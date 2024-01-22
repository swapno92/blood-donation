'use client'
import Lottie from 'lottie-react';
import Heart from './../../../public/animations/heart.json'
import { useForm } from "react-hook-form"

const Registration = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    
      console.log(watch("example"))

    return (
        <>
            <div className='max-w-screen-xl mx-auto'>
                <div className="min-h-screen flex flex-col lg:flex-row-reverse items-center justify-between gap-10 p-10">
                    <div className="w-1/2 lg:text-left">
                        {/* <Image src={heart} className='w-full' /> */}
                        <Lottie animationData={Heart} />
                    </div>

                    <div className="w-1/2 card shrink-0 bg-base-100 border p-10">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="text-lg font-semibold">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="Your Email..." className="input focus:border-0 focus-within:outline-none border-0 border-b-2 border-gray-400 focus:border-b-2 focus:border-primary rounded-none px-1" />
                                {errors.email && <span className='text-red-600 text-sm mt-2'>Enter your Email address*</span>}
                            </div>

                            <div className="form-control mt-5">
                                <label className="label">
                                    <span className="text-lg font-semibold">Password</span>
                                </label>
                                <input {...register("password", { required: true })} type="password" placeholder="Password" className="input focus:border-0 focus-within:outline-none border-0 border-b-2 border-gray-400 focus:border-b-2 focus:border-primary rounded-none px-1" />
                                {errors.password && <span className='text-red-600 text-sm mt-2'>Enter your Password*</span>}

                                <label className="label mt-4">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-primary hover:bg-secondary text-white text-lg">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;