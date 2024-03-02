import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { AuthContext } from "@/components/provider/AuthProvider";
import moment from "moment";
import axios from "axios";
import UseComment from "@/components/Hooks/UseComment";
import Likes from "./Likes";
import UsePosts from "@/components/Hooks/UsePosts";
const PostCard = () => {
  const { user } = useContext(AuthContext);
  const [post, refetch] = UsePosts();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isCommentVisible, setCommentVisible] = useState(false);
  const [comment, setComment] = useState("");
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleCommentVisibility = () => {
    setCommentVisible(!isCommentVisible);
  };

  // get comment
  const [allcomments, commentRefetch] = UseComment();
  // post comment
  const handleComment = (id) => {
    const userImage = user?.photoURL;
    const userEml = user?.email;
    const userName = user?.displayName;
    const currentDate = moment().format(" D MMM YYYY");
    const postID = id;
    const commentInfo = {
      postID,
      comment,
      userImage,
      userEml,
      userName,
      currentDate,
    };

    axios
      .post("https://blood-donation-server-binary-avanger.vercel.app/comments", commentInfo)
      .then((data) => {
        if (data.data.insertedId) {
        }
        commentRefetch();
        setCommentVisible(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sortedPosts = post.sort((a, b) => {
    const dateA = moment(a.currentDateTime, "D MMM YYYY, h:mm:ss a");
    const dateB = moment(b.currentDateTime, "D MMM YYYY, h:mm:ss a");
    return dateB - dateA;
  });

  // deletePost
  const handleDelete = (id) => {
    fetch(`https://blood-donation-server-binary-avanger.vercel.app/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
        }
        refetch();
      });
  };

  const handleEdit = (id) => {
    console.log(id)
  }

  return (
    <>
      {sortedPosts?.map((data) => (
        <div className="md:mt-12 mt-4 md:px-0 px-2" key={data?._id}>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Image
                className="h-12 w-12 rounded-lg"
                src={
                  data?.userPhoto
                    ? data.userPhoto
                    : "https://i.ibb.co/xFC9GFr/profile-circle-icon.png"
                }
                alt="userPhoto"
                width={1000}
                height={1000}
              />
              <div className="">
                <h2 className="text-lg font-semibold">{data?.userName}</h2>
                <h2 className="text-sm">
                  {moment(
                    data?.currentDateTime,
                    "D MMM YYYY, h:mm:ss a"
                  ).format("D MMM YYYY")}
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
                  className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow pr-8 pl-2 -ml-28"
                >
                  <ul
                    className="py-2 text-sm text-gray-700"
                    aria-labelledby="dropdownMenuIconHorizontalButton"
                  >
                    <li
                      onClick={() => handleEdit(data?._id)}
                      className="flex items-center "
                    >
                      <FiEdit className="text-lg" />
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Edit
                      </a>
                    </li>
                    <li
                      onClick={() => handleDelete(data?._id)}
                      className="flex items-center "
                    >
                      <MdOutlineDelete className="text-2xl" />
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
              <div className="cursor-pointer flex">
                <Likes postId={data?._id}></Likes>
              </div>

              <button
                onClick={toggleCommentVisibility}
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100"
                type="button"
              >
                Comment
              </button>
            </div>
          </div>
          {isCommentVisible && (
            <from className="flex items-center gap-2 ">
              <input
                type="text "
                placeholder="Comment"
                onChange={(e) => setComment(e.target.value)}
                className="border bg-gray-100 hover:bg-white rounded-md w-full py-2.5 px-3 my-3 outline-none"
              />
              <div
                onClick={() => handleComment(data?._id)}
                className="btn bg-blue-700  hover:bg-blue-600 btn-md"
              >
                <LuSend className="text-3xl text-white mx-2" />
              </div>
            </from>
          )}

          {allcomments
            .filter((comments) => comments.postID === data?._id)
            .map((postComment) => (
              <div className="flex border shadow-md rounded-xl p-4 gap-x-3 mt-2 w-full ">
                <div className="">
                  <Image
                    className="object-cover rounded-full h-10 w-10 mt-1 "
                    src={
                      postComment.userImage
                        ? postComment.userImage
                        : "https://i.ibb.co/RCMBXjt/profile-circle-icon.png"
                    }
                    width={36}
                    height={36}
                    alt="User"
                  />
                </div>
                <div>
                  <h1 className="text-[16px] font-semibold">
                    {postComment.userName}
                  </h1>
                  <p className="text-[12px] font-semibold">
                    {postComment.currentDate}
                  </p>
                  <p>{postComment.comment}</p>
                </div>
              </div>
            ))}
        </div>
      ))}
    </>
  );
};

export default PostCard;