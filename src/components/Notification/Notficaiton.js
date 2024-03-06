"use-client";
import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import UseRequest from "../Hooks/UseRequest";

const Notification = ({allRequest, refetch}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [allRequest, refetch] = UseRequest();
  console.log(allRequest);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDelete = (id) => {
    fetch(`https://blood-donation-server-binary-avanger.vercel.app/requests/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch()
        }
      });
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
            {allRequest?.length}
          </h2>
        </div>
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          id="dropdownAvatar"
          className="line z-40 bg-red-100 absolute md:right-0  -right-[105px] mt-2 divide-y shadow shadow-[#fb8a8a6d] divide-gray-100   rounded-lg  ease-in-out duration-300 "
          style={{
            maxHeight: isDropdownOpen ? "300px" : "0",
            overflow: "scroll",
          }}
        >
          {/* Content of the dropdown */}
          <div>
            {allRequest?.map((request) => (
              <div
                key={request._id}
                className="md:w-[380px] w-[350px] py-4 md:px-2 flex justify-center text-black font-semibold text-center "
              >
                {/* <h2 className="text-[12px]">{index + 1}</h2> */}
                <h2 className="text-[12px] ">
                  <span className="font-bold text-sm pr-1">
                    {request?.name}
                  </span>
                  <span className="text-red-600"> {request?.bloodGroup} </span>{" "}
                  <span className="text-green-600">
                    Quantity: {request?.quantity}{" "}
                  </span>
                  <button
                    onClick={() => handleDelete(request?._id)}
                    className=" bg-green-600 px-2 py-1 rounded-md "
                  >
                    Confirm
                  </button>{" "}
                  or{" "}
                  <button
                    onClick={() => handleDelete(request?._id)}
                    className=" bg-red-600 px-2 py-1 rounded-md "
                  >
                    Egnore
                  </button>
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
