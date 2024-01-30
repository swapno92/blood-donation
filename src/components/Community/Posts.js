"use client";
import React, { useContext } from "react";
// import img2 from "../../../public/Banner img/img2.jpg";
import userimg from "../../../public/images/profile-circle-icon.png";
import { LuUser2 } from "react-icons/lu";
import { AiOutlineAlert } from "react-icons/ai";
import profileIcon from "../../../public/images/profile-circle-icon.png";
import galleryIcon from "../../../public/images/gallery-icon.png";
// import { AiFillLike, AiFillDislike } from "react-icons/ai";

import Image from "next/image";
import { MdPostAdd } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "../provider/AuthProvider";
import ThePosts from "../ThePosts/ThePosts";

// const getPosts = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/posts", {
//       cache: "no-store",
//     });
//     if (!res.ok) {
//       throw new Error("Failed to fetch topics");
//     }
//     return res.json();
//   } catch (error) {}
//   console.log("Error loading Topics: ", error);
// };

// const Home = () => {
export default async function Posts() {
  // const { topics } = await getPosts();
  // console.log(topics);

  const router = useRouter();
  const likes = 0;
  const { user } = useContext(AuthContext);
  const userName = user?.displayName;
  const userPhoto = user?.photoURL;
  const userEmail = user?.email;

  // const handleLike = () => {
  //   if (isLiked) {
  //     setLikes(likes - 1);
  //   } else {
  //     setLikes(likes + 1);
  //   }
  //   setIsLiked(!isLiked);
  // };

  // ............. post .....................
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const description = form.get("description");
    const images = form.get("image");
    console.log(description, images, likes, userName, userPhoto, userEmail);

    // const data = new FormData();
    // data.append("iamge",  images);
    // fetch(
    //   "https://api.imgbb.com/1/upload?key=12fe474b7bd533a31cc2c49218a513c8",
    //   {
    //     method: "POST",
    //     body: data,
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));

    if (!description || !images) {
      alert("Title and description are required");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          description,
          images,
          likes,
          userName,
          userPhoto,
          userEmail,
        }),
      });
      if (res.ok) {
        console.log("posts");
        router.refresh();
      } else {
        throw new Error("Failed to create a posts");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-screen-md mx-auto mt-5 py-7  border px-9 rounded-xl bg-gray-50  shadow text-gray-500"
      >
        <div className="flex items-center  ">
          <Image
            className=" object-cover w-10 "
            src={profileIcon}
            alt="Banner 2"
            width={1200}
            height={500}
          />
          <input
            type="search"
            className=" border w-full px-4 py-2 rounded-2xl outline-[#fcd5d5] shadow-ms ml-5 "
            placeholder="Share & Ask Something to everyone?"
            name="description"
          />
        </div>

        <div className="flex items-center justify-between mt-5 mx-3 ">
          <div className="flex items-center gap-2  cursor-pointer">
            <Image
              className=" object-cover w-7  "
              src={galleryIcon}
              alt="Banner 2"
              width={1200}
              height={500}
            />
            <input type="text" name="image" className="line" />
          </div>
          <div>
            <button className="btn rounded-lg bg-primary text-white hover:bg-secondary  px-4    ">
              Share
            </button>
          </div>
        </div>
      </form>
      <div className="max-w-screen-md mx-auto my-4">
        <div>
          <ul className="flex justify-center  md:items-center lg:justify-start gap-6  text-gray-500">
            <li>
              <Link
                href="/community/posts "
                className="hover:bg-primary py-2 px-2 hover:text-white duration-500 rounded-sm flex items-center gap-2 border md:pr-4  text-[11px] pr-1 "
              >
                <MdPostAdd className="md:text-2xl text-[15px] " /> All Posts
              </Link>
            </li>
            <li>
              <Link
                href="/community/posts"
                className="hover:bg-primary py-2 px-2 hover:text-white duration-500 rounded-sm flex items-center gap-2 border md:pr-4  text-[11px] pr-1  "
              >
                <LuUser2 className="md:text-2xl text-[15px]" /> My Post
              </Link>
            </li>
            <li>
              <Link
                href="/community/posts"
                className="hover:bg-primary py-2 px-2 hover:text-white duration-500 rounded-sm flex items-center gap-2 border md:pr-4  text-[11px] pr-1 "
              >
                <AiOutlineAlert className="md:text-2xl text-[15px]" /> Emergency
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* getTopics() */}
      {/* ---------post card------------- */}
      <div className="max-w-screen-md mx-auto border-2 py-8 px-8 bg-gray-100 rounded-md shadow    overflow-hidden  ">
        {/* -----1------ */}
        <ThePosts></ThePosts>
      </div>
    </div>
  );
}

// export default Posts;
