import React from "react";
import { MdPostAdd } from "react-icons/md";
import { BiDonateBlood } from "react-icons/bi";
import { FaRoad } from "react-icons/fa6";

import { RiDashboardLine } from "react-icons/ri";
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
              <Link href='/community/dasboard' className="flex items-center gap-2  pr-4 ">
              <RiDashboardLine className="text-2xl" /> Dashboard
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
      
    </section>
  );
};

export default ComNavbar;
