import React from "react";
import img1 from "../../../public/Banner img/img1.jpg";
import userimg from "../../../public/images/profile-circle-icon.png";
import Image from "next/image";

const Posts = () => {
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
                Swopon Dey
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
              src={img1}
              alt="Card"
            />
            <div className="flex mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full mr-2">
                Like
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-full">
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------- */}
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
                Swopon Dey
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
              src={img1}
              alt="Card"
            />
            <div className="flex mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full mr-2">
                Like
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-full">
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
