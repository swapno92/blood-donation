"use client";
import Lottie from 'lottie-react';
import Heart from "./../../../public/animations/donate-blood.json";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { IoArrowUndoOutline } from "react-icons/io5";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { axiosPublic } from "../Hooks/useAxiosSecure";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, googleSignIn, facebookSignIn, updateUaserPofile } =
    useContext(AuthContext);
  const axiosURL = axiosPublic();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((res) => {
      const loggedUser = res.user;
      console.log(loggedUser);
      updateUaserPofile(data.name, data.photo)
        .then(() => {
          console.log("user");
        })
        .catch((err) => console.log(err.message));
      const userInfo = {
        name: data.name,
        email: data.email,
        photo: "https://i.ibb.co/RCMBXjt/profile-circle-icon.png",
      };
      console.log(userInfo);
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Resgistration  successfully");
          router.push("/");
        }
      });
    });
  };

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const userInfo = {
        email: result.user.email,
        name: result.user.displayName,
        photo: result.user.photoURL,
      };
      axiosURL.post("/users", userInfo).then((res) => {
        console.log(res.data);
        toast.success("Logged In Successful with Google!");
        router.push("/");
      });
    });
  };

  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then((result) => {
        toast.success("Logged In Successful with Facebook!");
      })
      .catch((error) => {
        toast.error("Logged In Failed with Facebook!");
      });
  };

  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className=" flex flex-col lg:flex-row items-center justify-between gap-5 p-5 my-10 border border-primary/20 rounded-xl">
          <div className="lg:w-1/2 w-full lg:text-left -mt-12">
            <Link href={"/"}>
              <div className="flex items-center gap-2 hover:text-primary text-sm">
                <IoArrowUndoOutline />
                <p>Back to Home</p>
              </div>
            </Link>
            <Lottie animationData={Heart} />
          </div>

          <div className="lg:w-1/2 w-full card shrink-0 bg-base-100 p-10">
            <div className=" pb-0">
              <p className="italic text-sm">Save A Life</p>
              <h2 className="text-4xl font-semibold my-3">
                Sign Up to <span className="text-primary">DropSync</span>
              </h2>
              <p className="text-sm">
                Already A Donor?{" "}
                <Link
                  href={"/login"}
                  className="text-blue-500 hover:text-primary font-semibold"
                >
                  Sign In Now
                </Link>
              </p>
              <div className="divider"></div>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body p-0 my-5"
            >
              <div className="form-control">
                <input
                  {...register("name", { required: true })}
                  id="12"
                  type="text"
                  placeholder="Your Name..."
                  className="input focus:border-0 focus-within:outline-none border-0 border-b-2 border-gray-400 focus:border-b-2 focus:border-primary rounded-none px-1"
                />
                {errors.name && (
                  <span className="text-red-600 text-sm mt-2">
                    Enter your Name*
                  </span>
                )}
              </div>

              <div className="form-control mt-2">
                <input
                  {...register("email", { required: true })}
                  id="13"
                  type="email"
                  placeholder="Your Email..."
                  className="input focus:border-0 focus-within:outline-none border-0 border-b-2 border-gray-400 focus:border-b-2 focus:border-primary rounded-none px-1"
                />
                {errors.email && (
                  <span className="text-red-600 text-sm mt-2">
                    Enter your Email address*
                  </span>
                )}
              </div>

              <div className="form-control mt-2 relative">
                <input
                  id="14"
                  {...register("password", { required: true })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="input focus:border-0 focus-within:outline-none border-0 border-b-2 border-gray-400 focus:border-b-2 focus:border-primary rounded-none px-1"
                />
                <span
                  className="cursor-pointer absolute right-3 top-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
                {errors.password && (
                  <span className="text-red-600 text-sm mt-2">
                    Enter your Password*
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-primary border-0 hover:bg-secondary text-white text-lg shadow-lg shadow-primary/30 rounded-sm">
                  Sign Up
                </button>
              </div>
            </form>
            <div className="divider divider-error">OR</div>
            <div className="flex items-center gap-5 mt-4">
              <button onClick={handleFacebookSignIn} className="w-1/2">
                <div className="flex items-center text-white bg-[#3b5998] justify-center p-2 gap-3">
                  <FaFacebook />
                  <p>Facebook</p>
                </div>
              </button>
              <button onClick={handleGoogleSignIn} className="w-1/2">
                <div className="flex items-center text-white bg-[#dd4b39] justify-center p-2 gap-3 ">
                  <SiGmail />
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

export default Registration;
