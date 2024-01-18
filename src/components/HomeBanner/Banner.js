"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Pagination, Navigation } from "swiper/modules";

import banner1 from "../../../public/Banner img/img1.jpg";
import banner2 from "../../../public/Banner img/img2.jpg";
import banner3 from "../../../public/Banner img/img3.jpg";
import Image from "next/image";
import Link from "next/link";
// import required modules

const Banner = () => {
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper md:h-[600px]"
      >
         <SwiperSlide>
          <div className="relative h-full">
            <Image
              className="w-full h-full object-cover"
              src={banner1}
              alt="Banner 1"
              width={1200}
              height={500}
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <div className="text-center">
                <h2 className="md:text-3xl text-[12px] font-bold mb-4">Donate Blood & Save Life</h2>
                <p className="text-[7px] md:text-sm  mb-6">Blood has a short shelf life, so blood donations are always needed. Platelets can only <br></br>  be stored for five to seven days, and red blood cells for up to 42 days.</p>
                <button className="bg-primary text-[8px] md:text-sm text-white hover:bg-secondary  py-2 px-4 rounded-full">
                  <Link href="/">Our Service</Link>
                </button>
                <button className="bg-white text-[8px] md:text-sm text-primary hover:text-secondary font-semibold hover:bg-slate-200 ml-3 md:ml-6 py-2 px-4 rounded-full">
                <Link href="/contact">Contact Us</Link>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="relative h-full">
            <Image
              className="w-full h-full object-cover"
              src={banner2}
              alt="Banner 2"
              width={1200}
              height={500}
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <div className="text-center">
                <h2 className="md:text-3xl text-[12px] font-bold mb-4">Donate Blood & Save Life</h2>
                <p className="text-[7px] md:text-sm  mb-6">Blood has a short shelf life, so blood donations are always needed. Platelets can only <br></br>  be stored for five to seven days, and red blood cells for up to 42 days.</p>
                <button className="bg-primary text-[8px] md:text-sm text-white hover:bg-secondary  py-2 px-4 rounded-full">
                  <Link href="/">Our Service</Link>
                </button>
                <button className="bg-white text-[8px] md:text-sm text-primary hover:text-secondary font-semibold hover:bg-slate-200 ml-3 md:ml-6 py-2 px-4 rounded-full">
                <Link href="/contact">Contact Us</Link>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="relative h-full">
            <Image
              className="w-full h-full object-cover"
              src={banner3}
              alt="Banner 3"
              width={1200}
              height={500}
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <div className="text-center">
                <h2 className="md:text-3xl text-[12px] font-bold mb-4">Donate Blood & Save Life</h2>
                <p className="text-[7px] md:text-sm  mb-6">Blood has a short shelf life, so blood donations are always needed. Platelets can only <br></br>  be stored for five to seven days, and red blood cells for up to 42 days.</p>
                <button className="bg-primary text-[8px] md:text-sm text-white hover:bg-secondary  py-2 px-4 rounded-full">
                  <Link href="/">Our Service</Link>
                </button>
                <button className="bg-white text-[8px] md:text-sm text-primary hover:text-secondary font-semibold hover:bg-slate-200 ml-3 md:ml-6 py-2 px-4 rounded-full">
                <Link href="/contact">Contact Us</Link>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
         
       
      </Swiper>
    </div>
  );
};

export default Banner;

