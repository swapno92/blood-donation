"use client";
import React, { useContext } from "react";
// import img2 from "../../../public/Banner img/img2.jpg";
import userimg from "../../../public/images/profile-circle-icon.png";
import { LuUser2 } from "react-icons/lu";
import { AiOutlineAlert } from "react-icons/ai";
import profileIcon from "../../../public/images/profile-circle-icon.png";
import galleryIcon from "../../../public/images/gallery-icon.png";
// import { AiFillLike, AiFillDislike } from "react-icons/ai";

import Image from "next/image";
import { MdPostAdd } from "react-icons/md";
import Link from "next/link";
import { AuthContext } from "../provider/AuthProvider";
import ThePosts from "../ThePosts/ThePosts";
import { useRouter } from "next/navigation";
import { axiosPublic } from "../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

// export default async function Posts() {
const Posts = () => {
  const router = useRouter();
  let likes = 0;
  const { user } = useContext(AuthContext);
  const userName = user?.displayName;
  const userPhoto = user?.photoURL;
  const userEmail = user?.email;
  const axiosURL = axiosPublic();

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
        toast.success('post added successfully')
        e.target.reset();

 
        router.refresh();

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-screen-md mx-auto mt-5 py-7  border px-9 rounded-xl bg-gray-50  shadow text-gray-500"
      >
        <div className="flex items-center  ">
          <Image
            className=" object-cover w-10 rounded-full "
            src={user?.photoURL}
            alt="Banner 2"
            width={1200}
            height={500}
          />
          <input
            id="1"
            required
            type="search"
            className=" border w-full px-4 py-2 rounded-2xl outline-[#fcd5d5] shadow-ms ml-5 "
            placeholder="Share & Ask Something to everyone?"
            name="description"
          />
        </div>

        <div className="flex items-center justify-between mt-5 mx-3 ">
          <div className="flex items-center gap-2  cursor-pointer">
            <Image
              className=" object-cover w-7  "
              src={galleryIcon}
              alt="Banner 2"
              width={1200}
              height={500}
            />
            <input id="2" type="text" required name="image" className="border-gray-300 focus:outline-none" placeholder="upload Image"/>
          </div>
          <div>
            <button className="btn rounded-lg bg-primary text-white hover:bg-secondary  px-4    ">
              Share
            </button>
          </div>
        </div>
      </form>
      <div className="max-w-screen-md mx-auto my-4">
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
      </div>
      {/* ---------post card------------- */}
      <div className="max-w-screen-md mx-auto border-2 py-8 px-8 bg-gray-100 rounded-md shadow    overflow-hidden  ">
        {/* -----1------ */}
        <ThePosts></ThePosts>
      </div>
    </div>
  );
};

export default Posts;
