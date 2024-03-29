"use-client";
import React, { useContext, useEffect, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import UseDoneted from "../Hooks/useDoneted";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import UseAxiosSecure from "../Hooks/useAxiosSecure";

const Notification = () => {
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const axiosSecure = UseAxiosSecure();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const currentUser = user?.email;
  const [all_Doneted, refetch] = UseDoneted();
  const [userInfo, setuserInfo] = useState([]);
  const userBlood = userInfo?.blood;

  useEffect(() => {
    fetch(
      `https://blood-donation-server-binary-avanger.vercel.app/users/${currentUser}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.length === 0) {
          // Handle the case when the response is empty
          console.warn("Empty response from the server");
        } else {
          setuserInfo(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currentUser]);

  const specificRerquest =
    all_Doneted &&
    all_Doneted?.length > 0 &&
    all_Doneted?.filter(
      (donated) =>
        donated?.bloodGroup === userBlood && donated?.status === "processing"
    );
  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be egnore  this request!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, egnore it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`doneted/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Egnored!",
              text: "You egnored the  request.",
              icon: "success",
            });
            refetch();
          }
        });
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
          <h2 className=" bg-red-700 relative text-[10px]   border  bottom-3 -left-8 rounded-full  font-semi text-white text-center  px-[5px] py-[0px]  ">
            {specificRerquest?.length > 0 ? specificRerquest?.length : ""}
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
            {specificRerquest?.length > 0 ? (
              specificRerquest?.map((request) => (
                <div
                  key={request._id}
                  className="md:w-[380px] w-[350px] py-4 md:px-2 flex justify-center text-black font-semibold text-center "
                >
                  {/* <h2 className="text-[12px]">{index + 1}</h2> */}
                  <h2 className="text-[12px] ">
                    <span className="font-bold text-sm pr-1">
                      {request?.name}
                    </span>
                    <span className="text-red-600">
                      {" "}
                      {request?.bloodGroup}{" "}
                    </span>{" "}
                    <span className="text-green-600">
                      Quantity: {request?.quantity}{" "}
                    </span>
                    <button
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
              ))
            ) : (
              <div className="md:w-[380px] w-[350px] py-4 md:px-2 flex justify-center text-black font-semibold text-center">
                <h2 className="text-[12px]">No request right now</h2>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
