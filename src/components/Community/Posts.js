"use client";
import React, { useContext, useState } from "react";
import img1 from "../../../public/Banner img/img1.jpg";
// import img2 from "../../../public/Banner img/img2.jpg";
import userimg from "../../../public/images/profile-circle-icon.png";
import { LuUser2 } from "react-icons/lu";
import { AiOutlineAlert } from "react-icons/ai";
import profileIcon from "../../../public/images/profile-circle-icon.png";
import galleryIcon from "../../../public/images/gallery-icon.png";
// import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { MdBloodtype, MdOutlineBloodtype } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import Image from "next/image";
import { MdPostAdd } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "../provider/AuthProvider";

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

  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  // const router = useRouter();
  const { user } = useContext(AuthContext);
  const userName = user?.displayName;
  const userPhoto = user?.photoURL;
  const userEmail = user?.email;

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  // ............. post .....................
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const description = form.get("description");
    const images = form.get("image");
    console.log(description, images, likes, userName, userPhoto, userEmail);

    // const data = new FormData();
    // data.append("iamge", image);
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
        console.log("posts")
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

      {/* ---------post card------------- */}
      <div className="max-w-screen-md mx-auto border-2 py-8 px-8 bg-gray-100 rounded-md shadow    overflow-hidden  ">
        {/* -----1------ */}
        <div className="md:flex bg-white rounded-xl overflow-hidden px-4 my-3">
          <div className="p-8">
            <div className="flex items-center gap-2">
              <Image
                className="  object-cover w-9 mt-1 "
                src={userimg}
                alt="User"
              />
              <div className="uppercase tracking-wide  text-gray-700 font-semibold">
                Swapno Dey
              </div>
            </div>

            <p className="mt-2 text-gray-500">
              {" "}
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
            </p>
            <Image
              className="mt-4 rounded-lg w-full h-64 object-cover object-center"
              src={img1}
              alt="Card"
            />
            <div className="flex items-center gap-4 mt-4 ">
              <button
                onClick={handleLike}
                className="flex px-4 py-2 bg-gray-100 text-primary rounded-full cursor-pointer"
              >
                {isLiked ? (
                  <MdBloodtype className="text-primary text-2xl text-center" />
                ) : (
                  <MdOutlineBloodtype className="text-primary text-2xl text-center" />
                )}
                <span className="text-primary ml-2 delay-150">{likes}</span>
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-full flex items-center  gap-2">
                <FaRegComment className="text-xl" />
                Comment
              </button>
            </div>
          </div>
        </div>
        {/* {
          posts?.map(post => console.log(post))
        } */}
      </div>
    </div>
  );
}

// export default Posts;
