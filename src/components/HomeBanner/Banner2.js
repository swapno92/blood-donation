"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import DonatRequest from "../Modal/DonatRequest";




const Banner2 = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div
            className="bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url('https://i.ibb.co/wNxbrjJ/banner-Img1.webp')`,
            }}
          >
            <div className="max-w-screen-xl mx-auto min-h-[calc(100vh-90px)] flex items-center">
              <div className="text-white space-y-5 lg:px-0 md:px-10 px-5">
                <h3 className="lg:text-3xl md:text-xl text-lg text-red-500 font-bold">
                  Donate blood,save life!
                </h3>
                <h2 className="lg:text-6xl md:text-5xl text-3xl font-bold lg:leading-[70px] md:leading-[60px]">
                  YOUR <span className="text-red-600 ">BLOOD</span> <br /> CAN BRING SMILE <br /> IN OTHER PERSON FACE
                </h2>
                <div className="flex gap-5 md:flex-row flex-col">
                  {
                    user && <><button onClick={() => document.getElementById("my_modal_5").showModal()} className="btn bg-primary hover:bg-secondary border-0 text-white rounded-none px-10 md:text-lg text-base  font-medium">
                      Donate Now
                    </button></>
                  }
                  <DonatRequest></DonatRequest>
                  <button className="btn bg-gray-700 hover:bg-primary border-0 text-white rounded-none px-10 md:text-lg text-base font-medium">
                    Call: +91 234 5678
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url('https://i.ibb.co/Qcpdt5x/home-1-slider-2.webp')`,
            }}
          >
            <div className="max-w-screen-xl mx-auto min-h-[calc(100vh-90px)] flex items-center">
              <div className="text-white space-y-5 lg:px-0 md:px-10 px-5">
                <h3 className="lg:text-2xl md:text-xl text-lg">
                  Donate blood,save life!
                </h3>
                <h2 className="lg:text-6xl md:text-5xl text-3xl font-bold lg:leading-[70px] md:leading-[60px]">
                  DONATE BLOOD <br /> AND INSPIRES OTHERS
                </h2>
                <div className="flex gap-5 md:flex-row flex-col">
                  <button className="btn bg-primary hover:bg-secondary border-0 text-white rounded-none px-10 md:text-lg text-base  font-medium">
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner2;
