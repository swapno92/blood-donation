"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const DynamicPage = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/campaign/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  
  return (
    <div className="my-24">
      <div className="h-[30rem] w-[50%] mx-auto">
        <Image
          src={data.img}
          alt="detailsImg"
          width={700}
          height={700}
          className="w-full  object-center object-cover h-full"
        />
      </div>
      <div className="w-[50%] mx-auto">
        <h2 className="text-4xl font-semibold text-primary pt-6">{data.name}</h2>
        <p className="text-xl pt-4 font-medium">{data.description}</p>
      </div>
    </div>
  );
};

export default DynamicPage;
