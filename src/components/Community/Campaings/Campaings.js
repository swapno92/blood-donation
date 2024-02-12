import { BsCalendar2Check } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import campaingImg from "../../../../public/images/process_3.webp";
import Image from "next/image";
const Campaings = () => {
  return (
    <div className="my-16">
      <div className="mb-10">
        <h2 className="text-4xl text-center font-semibold mb-4">
          OUR CAMPAIGNS
        </h2>
        <p className="text-center text-xl text-gray-500">
          Campaigns to encourage new donors to join and existing to continue to
          give blood.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:w-[60%] mx-auto gap-8 px-6">
        <div className="bg-gray-50 shadow-md rounded-b-none">
          <div>
          <Image  src={campaingImg} alt='campaing img' className="w-full"/>
          </div>
          <div className="py-2  px-5">
            <div className="flex items-center gap-3 lg:pt-2 lg:pb-4">
              <h2 className="flex items-center gap-3 text-sm">
                <BsCalendar2Check className="text-primary text-2xl" />
                20 SEP, 2017
              </h2>
              <div className="divider lg:divider-horizontal"></div>
              <h2 className="flex items-center gap-2 text-gray-500">
                <FiClock className="text-primary text-xl" />
                10:00am - 6:30pm
              </h2>
            </div>
            <h5 className="text-2xl lg:text-3xl font-medium text-primary mb-2 lg:mb-4">
              WORLD BLOOD DONORS DAY
            </h5>

            <p className="text-lg font-medium text-gray-500 pb-3">
              Every year, on 14 June, countries around the world celebrate World
              Blood Donor Day. The event serves to thank voluntary.
            </p>
            <h2 className="flex items-center gap-1 pb-6 text-gray-500">
              <FaLocationDot className="text-primary text-xl" />
              Dhaka, Bangladesh
            </h2>
            <div className="flex justify-end">
              <button className="btn bg-primary text-white text-xl">
                Read More <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 shadow-md rounded-b-none">
          <div>
          <Image  src={campaingImg} alt='campaing img' className="w-full"/>
          </div>
          <div className="py-2  px-5">
            <div className="flex items-center gap-3 lg:pt-2 lg:pb-4">
              <h2 className="flex items-center gap-3 text-sm">
                <BsCalendar2Check className="text-primary text-2xl" />
                20 SEP, 2017
              </h2>
              <div className="divider lg:divider-horizontal"></div>
              <h2 className="flex items-center gap-2 text-gray-500">
                <FiClock className="text-primary text-xl" />
                10:00am - 6:30pm
              </h2>
            </div>
            <h5 className="text-2xl lg:text-3xl font-medium text-primary mb-2 lg:mb-4">
              WORLD BLOOD DONORS DAY
            </h5>

            <p className="text-lg font-medium text-gray-500 pb-3">
              Every year, on 14 June, countries around the world celebrate World
              Blood Donor Day. The event serves to thank voluntary.
            </p>
            <h2 className="flex items-center gap-1 pb-6 text-gray-500">
              <FaLocationDot className="text-primary text-xl" />
              Dhaka, Bangladesh
            </h2>
            <div className="flex justify-end">
              <button className="btn bg-primary text-white text-xl">
                Read More <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaings;
