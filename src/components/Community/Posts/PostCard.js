import { axiosPublic } from "@/components/Hooks/useAxiosSecure";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { BsDroplet } from "react-icons/bs";
import { FaDroplet } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/components/provider/AuthProvider";
import toast from "react-hot-toast";
import moment from "moment";
const PostCard = () => {
  const { user } = useContext(AuthContext);
  const [post, setPost] = useState();
  const router = useRouter();

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isCommentVisible, setCommentVisible] = useState(false);
  const [comment, setComment] = useState("");
  const [liked, setLiked] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    console.log("oky");
  };

  const toggleCommentVisibility = () => {
    setCommentVisible(!isCommentVisible);
    console.log("oky2");
  };

  const handleLikedClick = () => {
    setLiked(!liked); 
  };

  // getPosts
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
  // console.log(post);

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

    console.log(commentInfo);

    axiosPublic.post("/comments", commentInfo).then((res) => {
      toast.success("comment posted");
      router.refresh();
    });
  };

  // getComments
  const [allcomments, setAllComments] = useState([]);
  useEffect(() => {
    fetch(`https://blood-donation-server-binary-avanger.vercel.app/comments`)
      .then((res) => res.json())
      .then((data) => {
        setAllComments(data);
        router.refresh();
      });
  }, []);
  console.log(allcomments);

  return (
    <>
      {post?.map((data) => (
        <div className="md:mt-12 mt-4 md:px-0 px-2" key={data?._id}>
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
                  className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow pr-8 pl-2 -ml-28"
                >
                  <ul
                    className="py-2 text-sm text-gray-700"
                    aria-labelledby="dropdownMenuIconHorizontalButton"
                  >
                    <li className="flex items-center ">
                      <FiEdit className="text-lg" />
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Edit
                      </a>
                    </li>
                    <li className="flex items-center ">
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
              <div className="cursor-pointer" onClick={handleLikedClick}>
                {liked ? <FaDroplet className="text-primary text-2xl font-extrabold " /> : <BsDroplet className="text-primary font-extrabold  text-2xl " />}
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
                value={comment}
                className="border bg-gray-100 hover:bg-white rounded-md w-full py-2.5 px-3 my-3 outline-none"
              />
              <div
                onClick={() => handleComment(data?._id)}
                className="btn bg-blue-700  hover:bg-blue-600 btn-md line"
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
