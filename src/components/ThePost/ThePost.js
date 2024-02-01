"use client";
import React, { useState } from "react";
import { MdBloodtype, MdOutlineBloodtype } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ThePost = ({ post }) => {
  const router = useRouter();
  const { userName, description, userPhoto, _id, likes, images } = post;

  const [isLiked, setIsLiked] = useState(false);
  const newLikes = 5;

  const handleLike = async (_id) => {

    const post = { newLikes };
    fetch(`https://blood-donation-server-binary-avanger.vercel.app/posts/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        router.refresh();
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

        <p className="mt-2 text-gray-500">{description}</p>
        <Image
          className="mt-4 rounded-lg w-full h-64 object-cover object-center"
          src={images}
          width={360}
          height={360}
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
          <Link
            href={`/posts/${_id}`}
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="bg-gray-500 text-white px-4 py-2 rounded-full flex items-center  gap-2"
          >
            <FaRegComment className="text-xl" />
            Comment
          </Link>

          {/* modal */}
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click on ✕ button to close
              </p>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default ThePost;
