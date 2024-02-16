import { axiosPublic } from "@/components/Hooks/useAxiosSecure";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const PostCard = () => {
  const [post, setPost] = useState();
  //   useEffect(() => {
  //     fetch("https://blood-donation-server-binary-avanger.vercel.app/posts")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setPost(data);
  //       });
  //   }, []);
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
          <div className="flex gap-2">
            <Image
              className="h-12 w-12 rounded-lg"
              src={data?.userPhoto}
              alt="userPhoto"
              width={1000}
              height={1000}
            />
            <div>
              <h2 className="text-lg font-semibold">{data?.userName}</h2>
              <h2 className="text-sm">
                {data?.currentDate ? data?.currentDate : "10 Feb 2024"}
              </h2>
            </div>
          </div>
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
        </div>
      ))}
    </>
  );
};

export default PostCard;