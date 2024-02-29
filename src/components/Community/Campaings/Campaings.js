"use client";
import { BsCalendar2Check } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import UseCampaign from "@/components/Hooks/UseCampaign";

const Campaings = () => {
  const [campaign] = UseCampaign();
  // const [showCampaign, setShowCampaign] = useState();
  // useEffect(() => {
  //   fetch("https://blood-donation-server-binary-avanger.vercel.app/campaign")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setShowCampaign(data);
  //     });
  // }, []);
  return (
    <div className="md:my-16  my-4">
      <div className="md:mb-10 mb-5">
        <h2 className="md:text-4xl text-2xl text-center font-semibold md:mb-4 mb-2">
          OUR CAMPAIGNS
        </h2>
        <p className="text-center md:text-xl text-sm text-gray-500">
          Campaigns to encourage new donors to join and existing to continue to
          give blood.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:w-[60%] mx-auto gap-8 px-6">
        {campaign?.map((campign) => (
          <div
            key={campign._id}
            className="bg-gray-50 shadow-md hover:shadow-2xl rounded-b-none"
          >
            <div className="h-[20rem]">
              <Image
                src={campign?.img}
                alt="campaingImg"
                width={700}
                height={700}
                className="w-full  object-center object-cover h-full"
              />
            </div>
            <div className="py-2  px-5">
              <div className="flex items-center gap-3 lg:pt-2 lg:pb-4">
                <h2 className="flex items-center gap-3 text-sm">
                  <BsCalendar2Check className="text-primary text-2xl" />
                  {campign?.currentDate}
                </h2>
                <div className="divider lg:divider-horizontal"></div>
                <h2 className="flex items-center gap-2 text-gray-500">
                  <FiClock className="text-primary text-xl" />
                  {campign?.start}am - {campign.end}pm
                </h2>
              </div>
              <h5 className="text-2xl lg:text-3xl font-medium text-primary mb-2 lg:mb-4">
                {campign?.name}
              </h5>

              <p className="text-xl text-gray-500 pb-4">
                {campign?.description.slice(0, 120)}
                <span className=" font-bold cursor-pointer pl-2">
                  {" "}
                  see more.....
                </span>
              </p>
              <h2 className="flex items-center gap-1 pb-6 text-gray-500">
                <FaLocationDot className="text-primary text-xl" />
                {campign?.location}
              </h2>
              <div className="flex justify-end pb-4">
                <Link href={`/community/campaings/${campign._id}`}>
                  <button className="btn bg-primary hover:bg-primary text-white text-xl">
                    Read More <FaArrowRightLong />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaings;
