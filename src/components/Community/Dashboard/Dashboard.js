"use client";
import React, { useContext, useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiProfileLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { AuthContext } from "@/components/provider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState();
  console.log(users?.roll);
  const currentUser = user?.email;
  console.log(currentUser);

  useEffect(() => {
    fetch(
      `https://blood-donation-server-binary-avanger.vercel.app/users/${currentUser}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, [currentUser]);

  const menusUser = [
    {
      name: "Profile",
      link: "/community/dasboardlayout/profile",
      icon: RiProfileLine,
    },
    {
      name: "Donner List",
      link: "/community/dasboardlayout/donner-list",
      icon: AiOutlineUser,
    },

    {
      name: "Available Donner",
      link: "/community/dasboardlayout/available-dooner",
      icon: FiMessageSquare,
    },
    { name: "Log Out", link: "/logout", icon: CiLogout },
  ];
  const menusAdmin = [
    {
      name: "Profile",
      link: "/community/dasboardlayout/profile",
      icon: RiProfileLine,
    },
    {
      name: "All User",
      link: "/community/dasboardlayout/admin/alluser",
      icon: RiProfileLine,
    },
    {
      name: "Request For Blood",
      link: "/community/dasboardlayout/blood-request",
      icon: TbReportAnalytics,
      margin: true,
    },
    {
      name: " Add Campaing",
      link: "/community/dasboardlayout/campaing",
      icon: AiOutlineUser,
    },
    { name: "Log Out", link: "/logout", icon: CiLogout },
  ];
  const [open, setOpen] = useState(true);
  console.log(users?.roll);

  return (
    <div
      className={`bg-primary min-h-[710px] ${
        open ? "w-72" : "w-16"
      } duration-500 text-gray-100 px-4 md:{ope}`}
    >
      <div className="py-3 flex justify-end">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      {users?.roll === "user" ? (
        <div className="mt-4 flex flex-col gap-4 relative">
          {menusUser?.map((menu, i) => (
            <Link href={menu?.link} key={i} passHref legacyBehavior={true}>
              <a
                className={` ${
                  menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-secondary rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-primary font-semibold whitespace-pre text-white rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </a>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-4 relative">
          <h2 className='text-2xl font-semibold mx-auto border-b-4'>Admin </h2>
          {menusAdmin?.map((menu, i) => (
            <Link href={menu?.link} key={i} passHref legacyBehavior={true}>
              <a
                className={` ${
                  menu?.margin && "mt-2"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-secondary rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-primary font-semibold whitespace-pre text-white rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
