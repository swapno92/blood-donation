"use-client";
import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import All_Request from "../Hooks/All_Request";
import deafuletUserPhoto from "./../../../public/images/profile-circle-icon.png";
import axios from "axios";
import Image from "next/image";

const Notification = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [all_request] = All_Request();
  console.log(all_request);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        id=""
        onClick={toggleDropdown}
        className="flex text-sm rounded-full md:me-0"
        type="button"
      >
        <span className="sr-only">Open user menu</span>
        <div className="flex items-center">
          <IoIosNotificationsOutline className="text-4xl mr-3" />
          <h2 className=" bg-red-700 relative text-[10px]   border  bottom-3 -left-8 rounded-full  font-semi text-white text-center  px-[5px] py-[1px]  ">
            {all_request?.length}
          </h2>
        </div>
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          id="dropdownAvatar"
          className="z-40 line absolute right-0 mt-2  bg-[#fff] divide-y shadow shadow-[#fb8a8a6d] divide-gray-100   rounded-lg  ease-in-out duration-300 line"
          style={{
            maxHeight: isDropdownOpen ? "300px" : "0",
            overflow: "scroll",
          }}
        >
          {/* Content of the dropdown */}
          <div>
            {all_request?.map((request, index) => (
              <div
                key={request._id}
                className="w-full flex text-black font-semibold text-center "
              >
                <h2 className="text-[12px]">{index + 1}</h2>
                <h2 className="text-[12px]">
                  .{request?.name} Need A
                  <span className="text-red-600"> {request?.bloodGroup} </span>{" "}
                  blood
                  <span className="text-green-600">
                    {request?.quantity} packe{" "}
                  </span>
                  waht are you want{" "}
                  <button className=" bg-green-600 btn-sm ">Confirm</button> or{" "}
                  <button className=" bg-red-600 btn-sm">Egnore</button>
                </h2>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
