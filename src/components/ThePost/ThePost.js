"use client";
import React, { useState } from "react";
import { MdBloodtype, MdOutlineBloodtype } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import img1 from "../../../public/Banner img/img1.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ThePost = ({ post }) => {
  const router = useRouter();
  const { userName, userPhoto, _id, likes } = post;

  const [newLikes, setLike] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async (_id) => {
    console.log(isLiked)
    if (isLiked) {
      setLike(likes - 1);
    } else {
      setLike(likes + 1);
    }
    setIsLiked(!isLiked);
    console.log(newLikes);
    // const newLikes = 0;
    try {
      const res = await fetch(`http://localhost:3000/api/posts/${_id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newLikes }),
      });
      if (!res.ok) {
        throw new Error("Failed to update topic");
      }
      router.push("http://localhost:3000/community/posts");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      key={post._id}
      className="md:flex bg-white rounded-xl overflow-hidden px-4 my-3"
    >
      <div className="p-8">
        <div className="flex items-center gap-2">
          <Image
            className="object-cover rounded-full mt-1 "
            src={userPhoto}
            width={36}
            height={36}
            alt="User"
          />
          <div className="uppercase tracking-wide  text-gray-700 font-semibold">
            {userName}
          </div>
        </div>

        <p className="mt-2 text-gray-500">{post.description}</p>
        <Image
          className="mt-4 rounded-lg w-full h-64 object-cover object-center"
          src={img1}
          alt="Card"
        />
        <div className="flex items-center gap-4 mt-4 ">
          <button
            onClick={() => handleLike(_id)}
            className="flex px-4 py-2 bg-gray-100 text-primary rounded-full cursor-pointer"
          >
            {isLiked ? (
            <MdBloodtype className="text-primary text-2xl text-center" />
            ) : (
              <MdOutlineBloodtype className="text-primary text-2xl text-center" />
            )}
            <span className="text-primary ml-2 delay-150">{post.likes}</span>
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-full flex items-center  gap-2">
            <FaRegComment className="text-xl" />
            Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThePost;
