"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const DynamicPage = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(
      `https://blood-donation-server-binary-avanger.vercel.app/campaign/${id}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  return (
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <div className="h-[30rem] w-[50%] mx-auto">
          <Image
            src={data?.img}
            alt="details Img"
            width={700}
            height={700}
            className="w-full  object-center object-cover h-full"
          />
        </div>
        <div className="w-[50%] mx-auto">
          <h2 className="text-4xl font-semibold text-primary pt-6">
            {data?.name}
          </h2>
          <p className="text-xl pt-4 font-medium">{data?.description}</p>
        </div>
      </div>
    </dialog>
  );
};

export default DynamicPage;
