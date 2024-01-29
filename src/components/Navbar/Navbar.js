"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="">
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
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {user ? (
              <div className="flex items-center">
                <button
                  id="dropdownUserAvatarButton"
                  className="flex text-sm rounded-full md:me-0"
                  type="button"
                  onClick={handleDropdownToggle}
                >
                  <span class="sr-only">Open user menu</span>
                  <Image
                    className="w-10 rounded-full mr-4 object-cover "
                    width={100}
                    height={100}
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyhj1gUUYu1c8817GfPwApJbYzW9lJdjSXQ&usqp=CAU"
                    }
                    alt={user.displayName}
                  />
                </button>
                <div></div>
                <div
                  id="dropdownAvatar"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>Bonnie Green</div>
                    <div class="font-medium truncate">name@flowbite.com</div>
                  </div>
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownUserAvatarButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div class="py-2">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleSignOut}
                  className="btn text-white bg-primary hover:bg-secondary font-medium rounded-sm md:text-sm text-[13px] md:px-10  px-2 py-2 text-center"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <button className="btn text-white bg-primary hover:bg-secondary font-medium rounded-sm md:text-sm text-[13px] md:px-10  px-2 py-2 text-center">
                    Sign In
                  </button>
                </Link>
              </>
            )}
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
                  className="block py-2 px-3 text-primary md:text-sm uppercase font-semibold   rounded md:bg-transparent md:text-rimary md:p-0 "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  onClick={() => toggleMobileMenu(false)}
                  className="block py-2 px-3 text-gray-900 md:text-sm uppercase font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0  "
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => toggleMobileMenu(false)}
                  href="/community/posts"
                  className="block py-2 px-3 text-gray-900  md:text-sm uppercase font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 "
                >
                  community
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => toggleMobileMenu(false)}
                  href="/contact"
                  className="block py-2 px-3 text-gray-900 md:text-sm uppercase font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 "
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
