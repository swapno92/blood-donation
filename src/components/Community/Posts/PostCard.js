import { axiosPublic } from "@/components/Hooks/useAxiosSecure";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
const PostCard = () => {
  const [post, setPost] = useState();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {
    fetch("https://blood-donation-server-binary-avanger.vercel.app/posts")
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
          setPost(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(post);
  return (
    <>
      {post?.map((data) => (
        <div className="mt-12" key={data?._id}>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Image
                className="h-12 w-12 rounded-lg"
                src={data?.userPhoto}
                alt="userPhoto"
                width={1000}
                height={1000}
              />
              <div className="">
                <h2 className="text-lg font-semibold">{data?.userName}</h2>
                <h2 className="text-sm">
                  {data?.currentDate ? data?.currentDate : "10 Feb 2024"}
                </h2>
              </div>
            </div>
            <div className="">
              <button
                id="dropdownMenuIconHorizontalButton"
                onClick={toggleDropdown}
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 "
                type="button"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </button>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div
                  id="dropdownDotsHorizontal"
                  className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow pr-8 pl-2"
                >
                  <ul
                    className="py-2 text-sm text-gray-700"
                    aria-labelledby="dropdownMenuIconHorizontalButton"
                  >
                    <li className="flex items-center ">
                      <FiEdit className="text-lg"/>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Edit
                      </a>
                    </li>
                    <li className="flex items-center ">
                    <MdOutlineDelete className="text-2xl"/>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          {/* Dropdown menue */}

          <div>
            <p className="mt-2">{data?.description}</p>
          </div>
          <div className="mt-5">
            <Image
              className=" rounded-lg"
              src={data?.images}
              alt="userPhoto"
              width={1000}
              height={1000}
            />
          </div>

          <div className="border-y-2 mt-4">
            <div className="flex justify-evenly py-2 ">
              <h2 className="">Like</h2>
              <h2 className="">Comment</h2>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostCard;
