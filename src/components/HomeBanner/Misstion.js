import React from "react";
import misson1 from "../../../public/missstion img/img2.jpg"
import misson2 from "../../../public/missstion img/img3.jpg"
import misson3 from "../../../public/missstion img/img4.jpg"
import Image from "next/image";
import Link from "next/link";

const Misstion = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-20 px-4 md:px-8 lg-px-12 md:py-24">
        <div className="flex flex-col lg:flex-row  md:px-16 justify-center items-center gap-2 md:gap-12">
          <div className="flex gap-4 lg:w-1/2">
            <div>
              <Image src={misson1} alt="misstion 1 image" />
              <Image
                className="w-3/5 float-right mt-4"
                src={misson3} alt="misstion 2 image" 
                
              />
            </div>

            <div >
              <Image className="" src={misson2} alt="misstion 3 image" />
            </div>
          </div>

          <div  className="space-y-4 lg:w-1/2">
            <div
              className="border-2 w-1/6  border-red-700"
            ></div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            Our Mission
            </h2>
            <p className="text-gray-500">
            At Dropsync, our mission is rooted in a profound belief: every drop of blood has the power to save a life.  of regular blood donation and addressing the <br/> critical need for a stable blood supply. Our mission is driven by the following principles:
            </p>
            <ul
              className="list-disc ml-7 text-gray-500"
            >
              <li> Save Lives, One Drop at a Time</li>
              <li>Raise Awareness and Education</li>
              <li> Accessibility and Inclusivity</li>
              <li> Emergency Response and Preparedness</li>
              <li> Community Building and Support</li>
            </ul>
            <button className="btn bg-primary hover:bg-secondary px-10 text-white rounded"><Link href={'/about'}>Learn More</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Misstion;
