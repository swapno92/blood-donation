"use client";
import { useForm, ValidationError } from "@formspree/react";
import toast from "react-hot-toast";

import {
  FaHome,
  FaPhoneAlt,
  FaRegEnvelope,
  FaGlobe,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const ContactPage = () => {

  const [state, handleSubmit] = useForm("xayrqkwq");
  if (state.succeeded) {
    toast.success("message sent");
  }

  return (
    <>
      <div className="max-w-screen-xl mx-auto my-28">
        <div className="lg:flex lg:px-0 md:px-10 px-5">
          <div className="lg:w-1/2 w-full flex justify-between lg:flex-col md:flex-row flex-col">
            <div className="">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold uppercase">Contact Us</h2>
              </div>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-white p-2">
                    <FaHome className="text-lg"></FaHome>
                  </div>
                  <p>3100 C/A Mouchak, Sylhet, Bangladesh</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-white p-2">
                    <FaPhoneAlt className="text-lg"></FaPhoneAlt>
                  </div>
                  <p>+88 0163 0474 756</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-white p-2">
                    <FaRegEnvelope className="text-lg"></FaRegEnvelope>
                  </div>
                  <p>mdrabbybd474@gmail.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-white p-2">
                    <FaGlobe className="text-lg"></FaGlobe>
                  </div>
                  <p>https://youtube.com</p>
                </div>
              </div>
            </div>
            <div className="lg:mt-10 md:mt-0 mt-10">
              <h2 className="text-2xl font-semibold uppercase">Follow Us On</h2>
              <div className="social-icon flex gap-5 text-2xl bottom-0 w-full justify-start py-2 mt-2">
                <FaFacebook className="text-[#3b5998] hover-icon cursor-pointer text-3xl"></FaFacebook>
                <FaLinkedin className="text-[#0077b5] hover-icon cursor-pointer text-3xl"></FaLinkedin>
                <FaInstagram className="text-[#d53f66] hover-icon cursor-pointer text-3xl"></FaInstagram>
                <FaTwitter className="text-[#1DA1F2] hover-icon cursor-pointer text-3xl"></FaTwitter>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:mt-0 mt-14">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold uppercase">
                Need Blood? Contact Us
              </h2>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="card-body p-0 my-5">
                <div className="flex md:flex-row flex-col lg:gap-10 md:gap-5 gap-5">
                  <div className="form-control md:w-1/2 w-full">
                    <input
                      
                      id="3"
                      type="text"
                      name="name"
                      placeholder="Your Name..."
                      className="input focus:border-0 focus-within:outline-none border-0 border-b-2 border-gray-400 focus:border-b-2 focus:border-primary rounded-none px-1"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                    
                  </div>

                  <div className="form-control md:w-1/2 w-full">
                    <input
                    id="4"
                      
                      type="email"
                      name="email"
                      placeholder="Your Email..."
                      className="input focus:border-0 focus-within:outline-none border-0 border-b-2 border-gray-400 focus:border-b-2 focus:border-primary rounded-none px-1"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                    
                  </div>
                </div>

                <div className="form-control mt-3">
                  <input
                  id="5"
                    
                    type="text"
                    name="subject"
                    placeholder="Subject..."
                    className="input focus:border-0 focus-within:outline-none border-0 border-b-2 border-gray-400 focus:border-b-2 focus:border-primary rounded-none px-1"
                  />
                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                  />
                </div>

                <div className="form-control mt-3">
                  <textarea
                  id="6"
                    
                    type="text"
                    name="description"
                    placeholder="What's on your mind..."
                    className="textarea textarea-lg focus:border-0 focus-within:outline-none border-0 border-b-2 border-gray-400 focus:border-b-2 focus:border-primary rounded-none px-1"
                  />
                  <ValidationError
                    prefix="Description"
                    field="description"
                    errors={state.errors}
                  />
                 
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn bg-primary border-0 hover:bg-secondary text-white text-lg shadow-lg shadow-primary/30 rounded-sm"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 rounded-lg p-10 flex items-end justify-start relative h-[500px]">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58431.538520971895!2d90.34299504467975!3d23.748407914515404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9e940806465%3A0xda50a59cd9ada525!2sBlood%20Bank%20Dhaka!5e0!3m2!1sen!2sbd!4v1705527242150!5m2!1sen!2sbd"
        />
        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
              ADDRESS
            </h2>
            <p className="mt-1">Blood Donation Club , Dhaka 1200</p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
              EMAIL
            </h2>
            <a className="text-red-500 leading-relaxed">bloodbank@email.com</a>
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
              PHONE
            </h2>
            <p className="leading-relaxed">123-456-7890</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
