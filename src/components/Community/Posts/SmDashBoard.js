import { AuthContext } from "@/components/provider/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const SmDashBoard = () => {
  const { user } = useContext(AuthContext);
  const userEmailSplit = user?.email ? user?.email.split("@")[0] : "";

  const [isDropdownOpenUserPost, setDropdownOpenUserPost] = useState(false);
  const toggleDropdownUserPost = () => {
    setDropdownOpenUserPost(!isDropdownOpenUserPost);
    setDropdownOpenTopDonner(false);
  };

  const [isDropdownOpenTopDonner, setDropdownOpenTopDonner] = useState(false);
  const toggleDropdownTopDonner = () => {
    setDropdownOpenTopDonner(!isDropdownOpenTopDonner);
    setDropdownOpenUserPost(false);
  };

  return (
    <div className="flex justify-between bg-red-300 border px-3 md:hidden ">
      <div className="py-3">
        {isDropdownOpenUserPost ? (
          <IoCloseSharp
            size={26}
            className="cursor-pointer"
            onClick={toggleDropdownUserPost}
          />
        ) : (
          <MdKeyboardDoubleArrowRight
            size={26}
            onClick={toggleDropdownUserPost}
          />
        )}
      </div>
      <div className="py-3">
        {isDropdownOpenTopDonner ? (
          <IoCloseSharp
            size={26}
            className="cursor-pointer"
            onClick={toggleDropdownTopDonner}
          />
        ) : (
          <MdKeyboardDoubleArrowLeft
            size={26}
            onClick={toggleDropdownTopDonner}
          />
        )}
      </div>

      {/* Dropdown menu user posts*/}
      {isDropdownOpenUserPost && (
        <div
          id="dropdownDotsHorizontal"
          className="mt-12 z-10 absolute bg-white divide-y divide-gray-100 rounded-xl shadow "
        >
          <div className="bg-gray-50 border  px-2 rounded-xl">
            <div className="flex items-center ">
              <Image
                className="w-14 rounded-full object-cover m-2"
                src={
                  user?.photoURL
                    ? user?.photoURL
                    : "https://i.ibb.co/xFC9GFr/profile-circle-icon.png"
                }
                alt="user photo"
                height={1000}
                width={1000}
              />
              <div className="tracking-tight ">
                <h2 className="uppercase font-bold ">{user?.displayName}</h2>
                <h2 className="text-sm">@{userEmailSplit}</h2>{" "}
                {/* Displaying the first part of the email */}
              </div>
            </div>
            <div className="divider -mt-2"></div>
            <div className="space-y-4 px-3">
              <Link href="/community/dasboardlayout/profile">
                <h2 className="hover:bg-slate-600 py-2 px-2 hover:text-white rounded-md post">
                  My Post
                </h2>
              </Link>
              <Link href="/community/dasboardlayout/profile">
                <h2 className="hover:bg-slate-600 py-2 px-2 hover:text-white rounded-md post">
                  Emergency
                </h2>
              </Link>
              <Link href="/community/dasboardlayout/profile">
                <h2 className="hover:bg-slate-600 py-2 px-2 hover:text-white rounded-md post">
                  Dashboard
                </h2>
              </Link>
            </div>
            <div className="divider -mt-2"></div>
          </div>
        </div>
      )}

      {/* Dropdown menu Top Donner*/}
      {isDropdownOpenTopDonner && (
        <div
          id="dropdownDotsHorizontal"
          className="right-0 w-3/4 mt-12 z-10 absolute bg-white divide-y divide-gray-100 rounded-xl shadow "
        >
          <div className="bg-gray-50 border rounded-xl ">
            <h2 className="  text-primary  text-center font-bold mt-5  border-b-2 pb-3 ">
              TOP DONNER
            </h2>
            <div>
              <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border border-base-300">
                  <input
                    type="radio"
                    name="my-accordion-4"
                    defaultChecked={true}
                  />
                  <div className="collapse-title lg:text-xl text-lg font-medium">
                    Click to open this one and close others
                  </div>
                  <div className="collapse-content">
                    <p>hello</p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title lg:text-xl text-lg font-medium">
                    Click to open this one and close others
                  </div>
                  <div className="collapse-content">
                    <p>hello</p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title lg:text-xl text-lg font-medium">
                    Click to open this one and close others
                  </div>
                  <div className="collapse-content">
                    <p>hello</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmDashBoard;
