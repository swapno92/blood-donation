"use client";
import { AuthContext } from "@/components/provider/AuthProvider";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const DynamicPage = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://blood-donation-server-binary-avanger.vercel.app/campaign/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="my-24 px-4">
      <div className="h-[30rem] lg:w-[50%] mx-auto">
        <Image
          src={data.img}
          alt="detailsImg"
          width={700}
          height={700}
          className="w-full  object-center object-cover h-full"
        />
      </div>
      <div className="lg:w-[50%] mx-auto flex mt-8 gap-6">
        <div className="bg-primary">
          <h2 className="flex items-center gap-3 text-2xl text-white font-bold p-6 text-center justify-center ">
            {data?.currentDate}
          </h2>
        </div>

        <div>
          <div className="flex items-center">
            <Image
              className="w-10 md:w-12 rounded-full mr-4 object-cover "
              width={100}
              height={100}
              src={user?.photoURL}
              alt={user}
            />
            <h2 className="text-xl font-semibold">{user?.displayName}</h2>
          </div>

          <h2 className="text-2xl lg:text-4xl font-semibold text-primary pt-4">
            {data.name}
          </h2>
          <p className="text-lg lg:text-xl pt-4 font-medium">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DynamicPage;
