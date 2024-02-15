"use client";
import React, { useContext, useState } from "react";
import Marquee from "react-fast-marquee";
import { IoCreateOutline } from "react-icons/io5";
// import img2 from "../../../public/Banner img/img2.jpg";
// import userimg from "../../../public/images/profile-circle-icon.png";
// import { LuUser2 } from "react-icons/lu";
// import { AiOutlineAlert } from "react-icons/ai";
// import profileIcon from "../../../public/images/profile-circle-icon.png";
// import galleryIcon from "../../../public/images/gallery-icon.png";
// import { AiFillLike, AiFillDislike } from "react-icons/ai";

import Image from "next/image";
import { MdPostAdd } from "react-icons/md";
import Link from "next/link";
import { AuthContext } from "../../provider/AuthProvider";
import ThePosts from "../../ThePosts/ThePosts";
import { useRouter } from "next/navigation";
import { axiosPublic } from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

// export default async function Posts() {
const Posts = () => {
  const router = useRouter();
  let likes = 0;
  const { user } = useContext(AuthContext);
  const userEmailSplit = user?.email ? user?.email.split("@")[0] : "";
  const userName = user?.displayName;
  const userPhoto = user?.photoURL;
  const userEmail = user?.email;
  const axiosURL = axiosPublic();
  const [showModal, setshowModal] = useState(false);


  // ............. post .....................
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const description = form.get("description");
    const images = form.get("image");
    const postInfo = {
      description,
      images,
      likes,
      userName,
      userPhoto,
      userEmail,
    };

    console.log(postInfo);

    axiosPublic
      .post("/posts", postInfo)
      .then((res) => {
        toast.success("post added successfully");
        e.target.reset();

        router.refresh();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* <div className="max-w-screen-md mx-auto my-4">
        <div>
          <ul className="flex justify-center  md:items-center lg:justify-start gap-6  text-gray-500">
            <li>
              <Link
                href="/community/posts "
                className="hover:bg-primary py-2 px-2 hover:text-white duration-500 rounded-sm flex items-center gap-2 border md:pr-4  text-[11px] pr-1 "
              >
                <MdPostAdd className="md:text-2xl text-[15px] " /> All Posts
              </Link>
            </li>
            <li>
              <Link
                href="/community/posts"
                className="hover:bg-primary py-2 px-2 hover:text-white duration-500 rounded-sm flex items-center gap-2 border md:pr-4  text-[11px] pr-1  "
              >
                <LuUser2 className="md:text-2xl text-[15px]" /> My Post
              </Link>
            </li>
            <li>
              <Link
                href="/community/posts"
                className="hover:bg-primary py-2 px-2 hover:text-white duration-500 rounded-sm flex items-center gap-2 border md:pr-4  text-[11px] pr-1 "
              >
                <AiOutlineAlert className="md:text-2xl text-[15px]" /> Emergency
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
      {/* ---------post card------------- */}
      {/* <div className="max-w-screen-md mx-auto border-2 py-8 px-8 bg-gray-100 rounded-md shadow    overflow-hidden  ">
      </div> */}

      <div className="flex   gap-3 my-3 ">
        {/* Profile section */}
        <div className="bg-gray-50 border w-3/12 px-3 min-h-screen">
          <div className="flex items-center js ">
            <Image
              className="w-14 rounded-full object-cover m-2"
              src={user.photoURL}
              alt="user photo"
              height={1000}
              width={1000}
            />
            <div className="tracking-tight">
              <h2 className="uppercase font-bold ">{user?.displayName}</h2>
              <h2>@{userEmailSplit}</h2>{" "}
              {/* Displaying the first part of the email */}
            </div>
          </div>
          <div className="divider "></div>
          <div className="space-y-4">
            <h2 className="hover:bg-slate-600 py-2 px-2 hover:text-white rounded-md post">
              My Post
            </h2>
            <h2 className="hover:bg-slate-600 py-2 px-2 hover:text-white rounded-md post">
              Emergency
            </h2>
            <h2 className="hover:bg-slate-600 py-2 px-2 hover:text-white rounded-md post">
              Dashboard
            </h2>
          </div>
          <div className="divider"></div>
        </div>
        {/* Feed section */}
        <div className="bg- w-6/12">
          <div className="bg-red-50 border-y-2  py-">
            <div className="flex ">
              <div className="flex">
                <button
                  type="button"
                  class="btn z-10 btn-md inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-[#1F2937] rounded-lg hover:bg-[#1c2635]  "
                >
                  Write
                  <span class="inline-flex items-center justify-center  ms-2 ">
                    <IoCreateOutline className="text-white text-lg font-semibold" />
                  </span>
                </button>
              </div>

              <Marquee
                pauseOnHover={true}
                speed={100}
                className="text-xl font-semibold"
              >
                Please Share Your Expreance. 💉 Please Share Your Expreance.
              </Marquee>
            </div>
            
            
             
          </div>
        </div>
        {/* Top sectionm */}
        <div className="bg-red-300 w-3/12">
          <h2>HEllo3</h2>
        </div>
      </div>
    </div>
  );
};

export default Posts;
