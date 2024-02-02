"use client";
import React, { useContext, useEffect, useState } from "react";
// import Banner from '../../../../../../public/Banner img'
import Image from "next/image";
import { AuthContext } from "@/components/provider/AuthProvider";

const UserInfo = async () => {
  const { user } = useContext(AuthContext);
  const currentUser = user?.email;
  const [userInfo, setuserInfo] = useState([]);
  console.log(userInfo);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${currentUser}`)
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
      <div className="">
        <Image
          src="https://i.ibb.co/F3NqnDC/premium-photo-1664299422915-d67e36404534-hpg.jpg"
          alt="user_Banner"
          className="w-screen  lg:h-44 h-12 md:h-24   object-cover"
          width={1200}
          height={1200}
        />
        <div className="relative -top-12 left-20">
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
              <h2 className="text-gray-500">Donner</h2>
              <h2 className="">Join at 12-01-1024</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
