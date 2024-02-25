"use client";
import React, { useContext, useState } from "react";
import Marquee from "react-fast-marquee";
import { IoCreateOutline } from "react-icons/io5";
import Image from "next/image";
import { AuthContext } from "../../provider/AuthProvider";
import { axiosPublic } from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import PostCard from "./PostCard";
import PostModal from "./PostModal";
import Link from "next/link";

const Posts = () => {
  const { user } = useContext(AuthContext);
  const userEmailSplit = user?.email ? user?.email.split("@")[0] : "";
  const [showModal, setshowModal] = useState(false);
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="flex   gap-5  ">
        {/* Profile section */}
        <div className="bg-gray-50 border w-3/12  lg:px-3 lg:top-[143px] md:top-[117px] max-h-screen sticky  md:block hidden">
          <div className="flex items-center js ">
            <Image
              className="w-14 rounded-full object-cover m-2"
              src={
                user?.photoURL
                  ? user?.photoURL
                  : "https://i.ibb.co/xFC9GFr/profile-circle-icon.png"
              }
              alt="user photo"
              height={1000}
              width={1000}
            />
            <div className="tracking-tight">
              <h2 className="uppercase font-bold ">{user?.displayName}</h2>
              <h2 className="text-sm">@{userEmailSplit}</h2>{" "}
              {/* Displaying the first part of the email */}
            </div>
          </div>
          <div className="divider "></div>
          <div className="space-y-4 px-3">
            <h2 className="hover:bg-slate-600 py-2 px-2 hover:text-white rounded-md post">
              My Post
            </h2>
            <h2 className="hover:bg-slate-600 py-2 px-2 hover:text-white rounded-md post">
              Emergency
            </h2>
            <Link href="/community/dasboardlayout/profile">
              <h2 className="hover:bg-slate-600 py-2 px-2 hover:text-white rounded-md post">
                Dashboard
              </h2>
            </Link>
          </div>
          <div className="divider"></div>
        </div>
        {/* Feed section */}
        <div className="bg- md:w-6/12 ">
          <div className="bg-red-50 border-y-2  py-">
            <div className="flex ">
              <div className="flex">
                <button
                  onClick={() => setshowModal(true)}
                  type="button"
                  class="btn z-0 btn-md inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-[#1F2937] rounded-lg hover:bg-[#1c2635]  "
                >
                  Write
                  <span class="inline-flex items-center justify-center  ms-2  ">
                    <IoCreateOutline className="text-white text-lg font-semibold" />
                  </span>
                </button>
              </div>

              <Marquee
                pauseOnHover={true}
                speed={100}
                className="text-md font-semibold"
              >
                Please Share Your Expreance. 💉 Please Share Your Expreance.
              </Marquee>
            </div>
          </div>
          <PostCard/>
        </div>
        <PostModal
          showModal={showModal}
          closeModal={() => setshowModal(false)}
        ></PostModal>

        {/* Top sectionm */}
        <div className="bg-gray-50 border w-3/12 lg:ectop-[143px] md:top-[117px] max-h-screen sticky  md:block hidden">
          <h2 className="lg:text-3xl md:text-2xl text-primary  text-center font-bold mt-5  border-b-2 pb-3 ">
            TOP DONNER
          </h2>
          <div>
            <div className="join join-vertical w-full">
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input
                  type="radio"
                  name="my-accordion-4"
                  defaultChecked={true}
                />
                <div className="collapse-title lg:text-xl text-lg font-medium">
                  Click to open this one and close others
                </div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title lg:text-xl text-lg font-medium">
                  Click to open this one and close others
                </div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title lg:text-xl text-lg font-medium">
                  Click to open this one and close others
                </div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
