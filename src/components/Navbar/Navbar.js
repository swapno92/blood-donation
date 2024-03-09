"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import ProfileDrop from "./ProfileDrop";
import { IoIosNotificationsOutline } from "react-icons/io";
import Notficaiton from "../Notification/Notficaiton";
import UseRequest from "../Hooks/UseRequest";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [allRequest, refetch] = UseRequest();
  

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSignOut = () => {
    logOut().then(() => {
      toast.success("Successfully Logged Out!");
    });
  };

  return (
    <div className=" sticky top-0 z-30  ">
      <nav className="bg-white w-full z-20 top-0 start-0 border-b border-gray-200 md:px-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:py-1">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={logo}
              alt="Flowbite Logo"
              className="w-28 md:w-32 lg:w-48"
            />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center ">
           <Notficaiton allRequest={allRequest} refetch={refetch}/>
            <ProfileDrop />

            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <Link
                  href="/"
                  className={`link ${
                    pathname === "/"
                      ? "active-link font-semibold"
                      : "font-semibold no-underline hover:text-primary"
                  } `}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  onClick={() => toggleMobileMenu(false)}
                  className={`link ${
                    pathname === "/about"
                      ? "active-link font-semibold"
                      : "font-semibold no-underline hover:text-primary"
                  } `}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => toggleMobileMenu(false)}
                  href="/community/posts"
                  className={`link ${
                    pathname === "/community/posts"
                      ? "active-link font-semibold"
                      : "font-semibold no-underline hover:text-primary"
                  } `}
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => toggleMobileMenu(false)}
                  href="/contact"
                  className={`link ${
                    pathname === "/contact"
                      ? "active-link font-semibold"
                      : "font-semibold no-underline hover:text-primary"
                  } `}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
