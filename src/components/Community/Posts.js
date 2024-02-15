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
  const userEmailSplit = user?.email ? user?.email.split("@")[0] : "";
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
     

      <div className="max-w-screen-md mx-auto border-2 py-8 px-8 bg-gray-100 rounded-md shadow    overflow-hidden  ">
    

      <div className="flex   gap-6 my-3 ">
        {/* Profile section */}
        <div className="bg-gray-100 border w-3/12 px-3 min-h-screen">
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
        <div className="bg-blue-300 w-6/12">
          <h2>HEllo2</h2>
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
