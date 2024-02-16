import React, { useContext, useState } from "react";
import defaultUserImage from "../../../public/images/profile-circle-icon.png";
import { AuthContext } from "../provider/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ProfileDrop = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const handleSignOut = () => {
    logOut().then(() => {
      toast.success("Successfully Logged Out!");
      router.push("/");
    });
  };
  return (
    <div className="relative inline-block text-left">
      <button
        id=""
        onClick={toggleDropdown}
        className="flex text-sm rounded-full md:me-0  "
        type="button"
      >
        <span className="sr-only">Open user menu</span>
        <Image
          className="w-10 md:w-12 rounded-full mr-4 object-cover "
          width={100}
          height={100}
          src={user?.photoURL ? user?.photoURL : defaultUserImage}
          alt={user?.displayName}
        />
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          id="dropdownAvatar"
          className="z-10 absolute right-0 mt-2 bg-[#fff] divide-y shadow shadow-[#fb8a8a6d] divide-gray-100 border border-[#f28e8e9e] rounder rounded-lg transition-max-height ease-in-out duration-300"
          style={{
            maxHeight: isDropdownOpen ? "300px" : "0",
            overflow: "hidden",
          }}
        >
          {/* Content of the dropdown */}
          <div className="px-4 py-3 text-sm text-white rounded-t-md bg-primary">
            <div>{user?.displayName}</div>
            <div className="font-medium truncate">{user?.email}</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="dropdownUserAvatarButton"
          >
            <li>
              <Link
                href="/community/dasboardlayout/profile"
                className="block px-4 py-2 hover:bg-primary hover:text-white  "
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-primary hover:text-white"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-primary hover:text-white"
              >
                Settings
              </Link>
            </li>
          </ul>
          <div className="py-2">
            {user?.email ? (
              <button
                onClick={handleSignOut}
                className="w-full text-left text-sm px-4 py-2 hover:bg-primary hover:text-white"
              >
                Sign Out
              </button>
            ) : (
              <>
                <Link href="/login">
                  <button className="block px-4 py-2 hover:bg-primary hover:text-white">
                    Sign In
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDrop;
