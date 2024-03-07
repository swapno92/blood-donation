"use client";
import UseRequest from "@/components/Hooks/UseRequest";
import All_Request from "./All_Request";
import Image from "next/image";

const DonnerRequest = () => {
  const [allRequest, refetch] = UseRequest();

  const pendingRerquest =
    allRequest &&
    allRequest?.length > 0 &&
    allRequest?.filter((donated) => donated?.status === "pending");
  console.log(pendingRerquest);

  return (
    <div className="">
      <div className="text-center font-bold text-3xl my-10">
        {pendingRerquest?.length > 0
          ? `Total Request - ${pendingRerquest.length}`
          : ""}
      </div>
      {pendingRerquest?.length > 0 ? (
        pendingRerquest?.map((request, index) => (
          <All_Request
            key={request?._id}
            request={request}
            index={index}
            reqRefetch={refetch}
          />
        ))
      ) : (
        <div className=" py-4 md:pl-16 px-2  text-black font-semibold text-center">
          <h2 className="lg:text-5xl md:text-2xl text-base">Haven't
             Any  <span className="text-red-600">Request</span> Right Now
          </h2>
          <Image
            className="lg:w-32 md:w-20 w-12 mx-auto "
            src="https://i.ibb.co/C6zZmYr/st-small-507x507-pad-600x600-f8f8f8.png"
            width={1000}
            height={1000}
          />
        </div>
      )}
    </div>
  );
};

export default DonnerRequest;
