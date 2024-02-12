import { BsCalendar2Check } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import campaingImg from "../../../../public/images/process_1.webp"
const Campaings = () => {
  return (
    <div className="my-16">
      <div className="mb-10">
        <h2 className="text-4xl text-center font-semibold">
          DONATION CAMPAIGNS
        </h2>
        {/* <hr className="w-[8rem] text-7xl mt-2 mx-auto"></hr> */}
        <div className="divider w-[10rem] mx-auto divider-error"></div>
        <p className="text-center text-xl text-gray-500">
          Campaigns to encourage new donors to join and existing to continue to
          give blood.
        </p>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[80%] mx-auto">
        <div className="card md:card-side w-full h-[90%] bg-gray-100 shadow-md rounded-none">
          <div className="w-[50%] h-full">
            <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
              className="w-full h-full hidden md:block"
            />
          </div>
          <div className="py-6 px-6 pb-4 space-y-4 w-[80%]">
            <h2 className="flex items-center gap-2"><BsCalendar2Check  className="text-primary text-2xl"/>20 SEP, 2017</h2>
            <h2 className="text-2xl font-semibold text-primary">WORLD BLOOD DONORS DAY</h2>
            <p className="text-lg text-gray-500 text-medium">
              Every year, on 14 June, countries around the world celebrate World
              Blood Donor Day. The event serves to thank voluntary.
              Every year, on 14 June, countries around the world celebrate
            </p>
            <div className="flex justify-between items-center">
                <h2 className="flex items-center gap-1 text-gray-500"><FiClock className="text-primary text-xl"/>10:00am - 6:30pm</h2>
                <h2 className="flex items-center gap-1 text-gray-500"><FaLocationDot className="text-primary text-xl"/>Dhaka, Bangladesh</h2>
            </div>
          </div>
        </div>
        <div className="card card-side w-full h-[90%] bg-gray-100 shadow-md rounded-none">
          <div className="w-[50%] h-full">
            <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
              className="w-full h-full"
            />
          </div>
          <div className="py-6 px-6 pb-4 space-y-4 w-[80%]">
            <h2 className="flex items-center gap-2"><BsCalendar2Check  className="text-primary text-2xl"/>20 SEP, 2017</h2>
            <h2 className="text-2xl font-semibold text-primary">WORLD BLOOD DONORS DAY</h2>
            <p className="text-lg text-gray-500 text-medium">
              Every year, on 14 June, countries around the world celebrate World
              Blood Donor Day. The event serves to thank voluntary.
              Every year, on 14 June, countries around the world celebrate
            </p>
            <div className="flex justify-between items-center">
                <h2 className="flex items-center gap-1 text-gray-500"><FiClock className="text-primary text-xl"/>10:00am - 6:30pm</h2>
                <h2 className="flex items-center gap-1 text-gray-500"><FaLocationDot className="text-primary text-xl"/>Dhaka, Bangladesh</h2>
            </div>
          </div>
        </div>
      </div> */}
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
          <Image
            className="rounded-t-lg"
            src={campaingImg}
            alt="frist camping"
            width={400}
            height={300}
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Campaings;
