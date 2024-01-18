"use client"; 

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import banner1 from "../../../public/Banner img/img1.jpg";
import banner2 from "../../../public/Banner img/img2.jpg";
import banner3 from "../../../public/Banner img/img3.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="">
      <Swiper className="mySwiper md:h-[600px]">
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image className="w-full h-full object-cover" src={banner1} alt="Banner 1" width={1200} height={500} />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image className="w-full h-full object-cover" src={banner2} alt="Banner 2" width={1200} height={500} />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image className="w-full h-full object-cover" src={banner3} alt="Banner 3" width={1200} height={500} />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
