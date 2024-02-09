"use client";
import React, { useContext, useEffect, useState } from "react";
import { MdBloodtype, MdOutlineBloodtype } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { axiosPublic } from "../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";
import moment from "moment";

// const ThePost = async ({ post }) => {
export default async function ThePost({ post }) {
  const { userName, userPhoto, _id, likes, images, description } = post;
  const router = useRouter();
  const axiosURL = axiosPublic();
  const { user } = useContext(AuthContext);
  const [isLiked, setIsLiked] = useState(false);
  const newLikes = 5;
  const [allcomments, setAllComments] = useState([]);

  useEffect(() => {
    fetch(`https://blood-donation-server-binary-avanger.vercel.app/comments`)
      .then((res) => res.json())
      .then((data) => {
        setAllComments(data);
        router.refresh();
      });
  }, []);

  const handleLike = async (_id) => {
    const post = { newLikes };
    fetch(`https://blood-donation-server-binary-avanger.vercel.app/posts/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        router.refresh();
      });
  };

  // comment posting
  const handleComment = (_id) => (e) => {
    const userEml = user?.email;
    const userName = user?.displayName;
    const currentDate = moment().format("MM-DD-YYYY");
    e.preventDefault();
    const postID = _id;
    const form = new FormData(e.target);
    const comment = form.get("comment");
    const postInfo = {
      postID,
      comment,
      userPhoto,
      userEml,
      userName,
      currentDate,
    };
    console.log(postInfo);
    axiosPublic
      .post("/comments", postInfo)
      .then((res) => {
        toast.success("add comment");
        e.target.reset();
        // router.refresh();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // console.log(allcomments);

  return (
    <>
      <div
        key={post._id}
        className="md:flex bg-white rounded-xl overflow-hidden px-4 my-3"
      >
        <div className="p-8">
          <div className="flex items-center gap-2">
            <Image
              className="object-cover rounded-full h-10 w-10 mt-1 "
              src={
                userPhoto ? userPhoto : "https://i.ibb.co/PY1b9Vd/photo2.png"
              }
              width={36}
              height={36}
              alt="User"
            />
            <div className="uppercase tracking-wide  text-gray-700 font-semibold">
              {userName}
            </div>
          </div>

          <p className="mt-2 text-gray-500">{description}</p>
          <Image
            className="mt-4 rounded-lg w-full h-64 object-cover object-center"
            src={images}
            width={360}
            height={360}
            alt="Card"
          />
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() => handleLike(_id)}
              className="flex px-4 py-2 bg-gray-100 text-primary rounded-full cursor-pointer"
            >
              {isLiked ? (
                <MdBloodtype className="text-primary text-2xl text-center" />
              ) : (
                <MdOutlineBloodtype className="text-primary text-2xl text-center" />
              )}
              <span className="text-primary ml-2 delay-150">{likes}</span>
            </button>
            <div className="">
              <button
                onClick={() => document.getElementById(_id).showModal()}
                className="bg-gray-500 text-white px-4 py-2 rounded-full flex items-center  gap-2"
              >
                <FaRegComment className="text-xl" />
                Comment
              </button>
            </div>

            {/* modal */}
            <dialog id={_id} className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-500 font-bold text-2xl">
                    X
                  </button>
                </form>
                <div className="col-span-10 md:col-span-11">
                  <form onSubmit={handleComment(_id)} className=" mt-4">
                    <div className="md:py-2 px-4 mb-2 md:mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 d">
                      <textarea
                        required
                        name="comment"
                        rows="3"
                        className="px-0 w-full md:w-1/3 text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                        placeholder="Write a comment..."
                      // required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn bg-red-500 hover:bg-red-400 text-white"
                    >
                      Post comment
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>

          {/* show comments */}
        </div>
      </div>
      {allcomments
        .filter((comments) => comments.postID === _id)
        .map((postComment) => (
          <div className="flex border shadow-md rounded-xl p-4 gap-x-3 mt-2 w-full ">
            <div className="">
              <Image
                className="object-cover rounded-full h-10 w-10 mt-1 "
                src={postComment.userPhoto}
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
    </>
  );
}
