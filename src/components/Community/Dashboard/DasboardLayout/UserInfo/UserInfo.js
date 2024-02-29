"use client";
import React, { useContext, useEffect, useState } from "react";
// import Banner from '../../../../../../public/Banner img'
import Image from "next/image";
import { AuthContext } from "@/components/provider/AuthProvider";
import { FaRegEdit } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import UserUpdateModal from "@/components/Modal/UserUpdateModal";

const UserInfo = () => {
  const { user } = useContext(AuthContext);
  const currentUser = user?.email;
  const [userInfo, setuserInfo] = useState([]);
  const [showModal, setshowModal] = useState(false);
  console.log(userInfo);

  useEffect(() => {
    fetch(
      `http://localhost:5000/users/${currentUser}`
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

  return (
    <div>
      <div className=" shadow-sm md:pl-4 pl-1 ">
        <Image
          src="https://i.ibb.co/F3NqnDC/premium-photo-1664299422915-d67e36404534-hpg.jpg"
          alt="user_Banner"
          className="w-screen  lg:h-36 h-20 md:h-24   object-cover"
          width={1200}
          height={1200}
        />
        <div className="relative -top-[28px]   md:left-20">
          <div className=" flex items-center gap-6  ">
            <Image
              src={userInfo.photo}
              alt="user_Banner"
              className="relative lg:-top-0 -top-6 md:left-0 left-3 lg:w-40 md:w-16 w-12 lg:h-40 md:h-16  h-12 shadow-md shadow-black  object-cover  rounded-full"
              width={1200}
              height={1200}
            />

            <div>
              <h2 className="font-bold text-primary md:text-2xl text-md  lg:mt-5 mt-6">
                {userInfo.name}
              </h2>
              <h2 className="text-gray-500 mb-1 flex items-center">
                <IoLocationOutline className="md:text-2xl text-md" />{" "}
                {userInfo?.address ? userInfo?.address : "---"}
              </h2>
              <button
                onClick={() => setshowModal(true)}
                className="flex items-center   p-4 md:px-4 md:py-5 rounded-md md:text-[16px] text-[10px] h-2  bg-[#32262614] hover:bg-[#3226262d] text-black lg:mt-4 "
              >
                <FaRegEdit className="text-xl  text-primary" />
                <span className="mt-1 ">Edit Your Profile</span>
              </button>
            </div>
          </div>
        </div>
        {/* ----------------Your Information section--------------- */}

        <section className=" shadow-sm block">
          <div>
            <h2 className="md:text-2xl text-md font-bold py-2 px-4 bg-primary text-white shadow-gray-700 shadow-sm text-center ">
              Your Information
            </h2>
          </div>
          <div className=" block">
            <div className=" py-4  shadow-sm text-center xl font-bold">
              <div>
                <h3 className="border p-4  bg-gray-100 shadow-sm text-gray-700 shadow-gray-400 md:text-xl text-md">
                  Name: {userInfo?.name ? userInfo?.name : "---"}
                </h3>
                <h3 className="border p-4  bg-gray-100 shadow-sm text-gray-700 shadow-gray-400 md:text-xl text-md">
                  Mobile: {userInfo?.mobile ? userInfo?.mobile : "---"}
                </h3>
                <h3 className="border p-4  bg-gray-100 shadow-sm text-gray-700 shadow-gray-400 md:text-xl text-md">
                  Email: {userInfo?.email ? userInfo?.email : "---"}
                </h3>
                <h3 className="border p-4  bg-gray-100 shadow-sm text-gray-700 shadow-gray-400 md:text-xl text-md">
                  Adress: {userInfo?.address ? userInfo?.address : "---"}
                </h3>
                <h3 className="border p-4  bg-gray-100 shadow-sm text-gray-700 shadow-gray-400 md:text-xl text-md">
                  <UserUpdateModal
                    showModal={showModal}
                    userInfo={userInfo}
                    closeModal={() => setshowModal(false)}
                  />
                  Blood: {userInfo?.blood ? userInfo?.blood : "---"}
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserInfo;
