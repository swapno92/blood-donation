import React from "react";
import { MdPostAdd } from "react-icons/md";
import { BiDonateBlood } from "react-icons/bi";
import { RiDashboardLine } from "react-icons/ri";
import Link from "next/link";

const ComNavbar = () => {
  return (
    <section className="">
      <div className=" border-b-2   ">
        <div className="max-w-screen-md mx-auto ">
          <ul className="flex justify-center  md:items-center items-center  md:gap-5 gap-2 text-gray-500">
            <li className="hover:bg-primary md:py-2 md: px-2 hover:text-white duration-500 rounded-sm" >
              <Link href='/community/posts' className=" flex items-center gap-2 border-r-2 md:pr-4  text-[11px] pr-3 ">
              <MdPostAdd className="md:text-2xl text-[15px]" /> All Posts
              </Link>
            </li>
            <li className="hover:bg-primary py-2 px-2 hover:text-white duration-500 rounded-sm" >
              <Link href='/community/ourmission' className=" flex items-center gap-2 border-r-2 md:pr-4  text-[11px] pr-3 ">
              <BiDonateBlood className="md:text-2xl text-[15px]" /> Campaign
              </Link>
            </li>
            <li className="hover:bg-primary py-2 px-2 hover:text-white duration-500 rounded-sm" >
              <Link href='/community/dasboardlayout' className="flex items-center gap-2   text-[11px]">
              <RiDashboardLine className="md:text-2xl text-[15px]" /> Dashboard
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
      
    </section>
  );
};

export default ComNavbar;
