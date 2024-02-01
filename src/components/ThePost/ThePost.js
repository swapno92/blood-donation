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

  // const [newLikes, setLike] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);
  const newLikes = 5

  const handleLike = async (_id) => {
    // if (isLiked) {
    //   setLike(likes - 1);
    // } else {
    //   setLike(likes + 1);
    // }
    // setIsLiked(!isLiked);
    console.log(newLikes);


    const post = { newLikes };
    fetch(`http://localhost:5000/posts/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        router.refresh()
        // swal({
        //   title: "Success!",
        //   text: "Product Updated Successful",
        // });
      });
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
            <span className="text-primary ml-2 delay-150">{likes}</span>
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
