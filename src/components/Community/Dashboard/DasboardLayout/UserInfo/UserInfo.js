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
    fetch(`https://blood-donation-server-binary-avanger.vercel.app/users/${currentUser}`)
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

    <div >
      <div className=" shadow-sm pl-4 ">

        <Image
          src="https://i.ibb.co/F3NqnDC/premium-photo-1664299422915-d67e36404534-hpg.jpg"
          alt="user_Banner"
          className="w-screen  lg:h-36 h-12 md:h-24   object-cover"
          width={1200}
          height={1200}
        />
        <div className="relative -top-[28px] left-20">
          <div className=" flex items-center gap-6">
            <Image
              src={userInfo.photo}
              alt="user_Banner"
              className="lg:w-40 md:w-16 w-12 lg:h-40 md:h-16  h-12 shadow-md shadow-black  object-cover  rounded-full"
              width={1200}
              height={1200}
            />

            <div>
              <h2 className="font-bold text-primary text-2xl mt-5">
                {userInfo.name}
              </h2>
              <h2 className="text-gray-500 mb-1 flex items-center">
                <IoLocationOutline className="text-2xl" /> {userInfo?.address ? userInfo?.address : "---"}
              </h2>
              <button
                onClick={() => setshowModal(true)}
                className="flex items-center btn btn-md text-[16px] bg-[#32262614] hover:bg-[#3226262d] text-black mt-1 "
              >
                <FaRegEdit className="text-[20px] text-primary" />
                <span className="mt-1">Edit Your Profile</span>
              </button>
            </div>
          </div>
        </div>
        {/* ----------------Your Information section--------------- */}


        <section className=" shadow-sm block">
          <div>
            <h2 className="text-2xl font-bold py-2 px-4 bg-primary text-white shadow-gray-700 shadow-sm text-center ">
              Your Information
            </h2>
          </div>
          <div className=" block">
            <div className=" py-4  shadow-sm text-center xl font-bold">
              <div>
                <h3 className="border p-4  bg-gray-100 shadow-sm text-gray-700 shadow-gray-400 text-xl">
                  Name: {userInfo?.name ? userInfo?.name : "---"}
                </h3>
                <h3 className="border p-4  bg-gray-100 shadow-sm text-gray-700 shadow-gray-400 text-xl">
                  Mobile: {userInfo?.mobile ? userInfo?.mobile : "---"}
                </h3>
                <h3 className="border p-4  bg-gray-100 shadow-sm text-gray-700 shadow-gray-400 text-xl">
                  Email: {userInfo?.email ? userInfo?.email : "---"}
                </h3>
                <h3 className="border p-4  bg-gray-100 shadow-sm text-gray-700 shadow-gray-400 text-xl">
                  Adress: {userInfo?.address ? userInfo?.address : "---"}
                </h3>

                <h3 className="border p-4  bg-gray-100 shadow-sm text-gray-700 shadow-gray-400 md:text-xl text-md">
                  <UserUpdateModal
                    showModal={showModal}
                    userInfo={userInfo}
                    closeModal={() => setshowModal(false)}
                  />
                  Blood: {userInfo?.blood ? userInfo?.blood : "---"}
                </h3>j
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserInfo;