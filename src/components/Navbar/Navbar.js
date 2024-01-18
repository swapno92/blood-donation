import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";

const Navbar = () => {
  return (
    <div className="">
      <nav className="bg-white w-full z-20 top-0 start-0 border-b border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:py-1">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={logo}
              alt="Flowbite Logo"
              className=" w-28 md:w-44 ld lg:w-48"
            
            />
            
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-primary font-medium  rounded-md md:text-sm text-[13px] md:px-4  px-2 py-2 text-center  "
            >
              Sign In
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-sticky"
              aria-expanded="false"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 text-primary uppercase font-semibold  rounded md:bg-transparent md:text-rimary md:p-0 "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              
              <li>
                <Link
                  href="/about"
                  className="block py-2 px-3 text-gray-900 uppercase font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0  "
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-gray-900  uppercase font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 "
                >
                  community
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-gray-900 uppercase font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 "
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-3 text-gray-900 uppercase font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 "
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
