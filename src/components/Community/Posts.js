"use client";
import React, { useState } from "react";
import img1 from "../../../public/Banner img/img1.jpg";
import img2 from "../../../public/Banner img/img2.jpg";
import userimg from "../../../public/images/profile-circle-icon.png";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import Image from "next/image";

const Posts = () => {
  const [likes, setLikes] = useState(16);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <div className=" mx-auto bg-white rounded-xl overflow-hidden px-4 ">
        <div className="md:flex">
          <div className="p-8">
            <div className="flex items-center gap-2">
              <Image
                className="  object-cover w-9 mt-1 "
                src={userimg}
                alt="User"
              />
              <div className="uppercase tracking-wide  text-gray-700 font-semibold">
                Swapno Dey
              </div>
            </div>

            <p className="mt-2 text-gray-500">
              {" "}
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
            </p>
            <Image
              className="mt-4 rounded-lg w-full h-64 object-cover object-center"
              src={img1}
              alt="Card"
            />
            <div className="flex items-center gap-4 mt-4 ">
              <button
                onClick={handleLike}
                className="flex px-4 py-2 bg-primary text-white rounded-full cursor-pointer"
              >
                {isLiked ? (
                  <AiFillDislike className="text-white text-xl text-center" />
                ) : (
                  <AiFillLike className="text-white text-xl text-center" />
                )}
                <span className="text-white ml-2">{likes}</span>
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-full flex items-center  gap-2">
                <FaRegComment className="text-xl" />
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* -------2--------- */}
      <div className=" mx-auto bg-white rounded-xl overflow-hidden px-4 my-3">
        <div className="md:flex">
          <div className="p-8">
            <div className="flex items-center gap-2">
              <Image
                className="  object-cover w-9 mt-1 "
                src={userimg}
                alt="User"
              />
              <div className="uppercase tracking-wide  text-gray-700 font-semibold">
                Tuhin Hossain
              </div>
            </div>

            <p className="mt-2 text-gray-500">
              {" "}
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including ve
            </p>
            <Image
              className="mt-4 rounded-lg w-full h-64 object-cover object-center"
              src={img2}
              alt="Card"
            />
            <div className="flex items-center gap-4 mt-4 ">
              <button
                onClick={handleLike}
                className="flex px-4 py-2 bg-primary text-white rounded-full cursor-pointer"
              >
                {isLiked ? (
                  <AiFillDislike className="text-white text-xl text-center" />
                ) : (
                  <AiFillLike className="text-white text-xl text-center" />
                )}
                <span className="text-white ml-2">{likes}</span>
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-full flex items-center  gap-2">
                <FaRegComment className="text-xl" />
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* -------3--------- */}
      <div className=" mx-auto bg-white rounded-xl overflow-hidden px-4 my-3">
        <div className="md:flex">
          <div className="p-8">
            <div className="flex items-center gap-2">
              <Image
                className="  object-cover w-9 mt-1 "
                src={userimg}
                alt="User"
              />
              <div className="uppercase tracking-wide  text-gray-700 font-semibold">
                J P Choyon Khan
              </div>
            </div>

            <p className="mt-2 text-gray-500">
              {" "}
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including ve
            </p>
            <Image
              className="mt-4 rounded-lg w-full h-64 object-cover object-center"
              src={img2}
              alt="Card"
            />
            <div className="flex items-center gap-4 mt-4 ">
              <button
                onClick={handleLike}
                className="flex px-4 py-2 bg-primary text-white rounded-full cursor-pointer"
              >
                {isLiked ? (
                  <AiFillDislike className="text-white text-xl text-center" />
                ) : (
                  <AiFillLike className="text-white text-xl text-center" />
                )}
                <span className="text-white ml-2">{likes}</span>
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-full flex items-center  gap-2">
                <FaRegComment className="text-xl" />
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* -------4--------- */}
      <div className=" mx-auto bg-white rounded-xl overflow-hidden px-4 my-3">
        <div className="md:flex">
          <div className="p-8">
            <div className="flex items-center gap-2">
              <Image
                className="  object-cover w-9 mt-1 "
                src={userimg}
                alt="User"
              />
              <div className="uppercase tracking-wide  text-gray-700 font-semibold">
                MD Nazmul Huda
              </div>
            </div>

            <p className="mt-2 text-gray-500">
              {" "}
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including ve
            </p>
            <Image
              className="mt-4 rounded-lg w-full h-64 object-cover object-center"
              src={img2}
              alt="Card"
            />
            <div className="flex items-center gap-4 mt-4 ">
              <button
                onClick={handleLike}
                className="flex px-4 py-2 bg-primary text-white rounded-full cursor-pointer"
              >
                {isLiked ? (
                  <AiFillDislike className="text-white text-xl text-center" />
                ) : (
                  <AiFillLike className="text-white text-xl text-center" />
                )}
                <span className="text-white ml-2">{likes}</span>
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-full flex items-center  gap-2">
                <FaRegComment className="text-xl" />
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* -------5--------- */}
      <div className=" mx-auto bg-white rounded-xl overflow-hidden px-4 my-3">
        <div className="md:flex">
          <div className="p-8">
            <div className="flex items-center gap-2">
              <Image
                className="  object-cover w-9 mt-1 "
                src={userimg}
                alt="User"
              />
              <div className="uppercase tracking-wide  text-gray-700 font-semibold">
                Golam Rabby
              </div>
            </div>

            <p className="mt-2 text-gray-500">
              {" "}
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including ve
            </p>
            <Image
              className="mt-4 rounded-lg w-full h-64 object-cover object-center"
              src={img2}
              alt="Card"
            />
            <div className="flex items-center gap-4 mt-4 ">
              <button
                onClick={handleLike}
                className="flex px-4 py-2 bg-primary text-white rounded-full cursor-pointer"
              >
                {isLiked ? (
                  <AiFillDislike className="text-white text-xl text-center" />
                ) : (
                  <AiFillLike className="text-white text-xl text-center" />
                )}
                <span className="text-white ml-2">{likes}</span>
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-full flex items-center  gap-2">
                <FaRegComment className="text-xl" />
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
