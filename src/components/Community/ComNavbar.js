import React from "react";
import { MdPostAdd } from "react-icons/md";
import { BiDonateBlood } from "react-icons/bi";
import { FaRoad } from "react-icons/fa6";
import { LuUser2 } from "react-icons/lu";
import { AiOutlineAlert } from "react-icons/ai";
import profileIcon from "../../../public/images/profile-circle-icon.png";
import galleryIcon from "../../../public/images/gallery-icon.png";
import Image from "next/image";
import Link from "next/link";

const ComNavbar = () => {
  return (
    <section className="">
      <div className=" border-b-2 py-3 px-4  ">
        <div className="max-w-screen-md mx-auto ">
          <ul className="flex gap-5 text-gray-500">
            <li >
              <Link href='/community/posts' className="flex items-center gap-2 border-r-2 pr-4 ">
              <MdPostAdd className="text-2xl" /> All Posts
              </Link>
            </li>
            <li >
              <Link href='/community/ourmission' className="flex items-center gap-2 border-r-2 pr-4 ">
              <BiDonateBlood className="text-2xl" /> Campaign
              </Link>
            </li>
            <li >
              <Link href='/community' className="flex items-center gap-2 border-r-2 pr-4 ">
              <FaRoad className="text-2xl" /> Roadmap
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
      <div className="max-w-screen-md mx-auto mt-5 py-7  border px-9 rounded-xl bg-gray-50 shadow text-gray-500">
        <div className="flex items-center  ">
          <Image
            className=" object-cover w-10 "
            src={profileIcon}
            alt="Banner 2"
            width={1200}
            height={500}
          />
          <input
            type="search"
            className=" border w-full px-4 py-2 rounded-2xl outline-[#fcd5d5] shadow-ms ml-5 "
            placeholder="Share & Ask Something to everyone?"
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
            <h3> Photo / Video</h3>
          </div>
          <div>
            <button className="btn rounded-lg bg-primary text-white hover:bg-secondary  px-4    ">
              create Post
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-screen-md mx-auto my-4">
        <div>
          <ul className="flex gap-6 text-gray-500">
            <li className="flex items-center gap-2 border-r-2 pr-4 border rounded-md py-2 px-3 ">
              <MdPostAdd className="text-2xl" /> All Posts
            </li>
            <li className="flex items-center gap-2 border-r-2 pr-4 border rounded-md py-2 px-3 ">
              <LuUser2 className="text-2xl" /> My Post
            </li>
            <li className="flex items-center gap-2 border-r-2 pr-4 border rounded-md py-2 px-3 ">
              <AiOutlineAlert className="text-2xl" /> Emergency
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ComNavbar;
