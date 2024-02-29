import Image from "next/image";
import sponsor1 from "../../../public/images/logo_1.webp";
import sponsor4 from "../../../public/images/logo_4.webp";
import sponsor5 from "../../../public/images/logo_5.webp";
import sponsor6 from "../../../public/images/logo_6.webp";
import sponsor7 from "../../../public/images/logo_7.webp";
import sponsor8 from "../../../public/images/logo_8.webp";

const Sponsors = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto my-28">
        <div className="text-center md:px-0 px-5">
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold">
            Our Sponsors
          </h2>
          <p className="lg:text-xl md:text-lg text-base font-normal mt-5">
            The sponsors who give their valuable amount to fulfill our mission.
          </p>
        </div>
        <div className="grid lg:grid-cols-6 md:grid-cols-2 gap-5 mt-20">
          <Image
            alt="a"
            src={sponsor1}
            className="cursor-pointer border border-primary/15 shadow-xl hover:shadow-red-100"
          />
          <Image
            alt="a"
            src={sponsor4}
            className="cursor-pointer border border-primary/15 shadow-xl hover:shadow-red-100"
          />
          <Image
            alt="a"
            src={sponsor5}
            className="cursor-pointer border border-primary/15 shadow-xl hover:shadow-red-100"
          />
          <Image
            alt="aa"
            src={sponsor6}
            className="cursor-pointer border border-primary/15 shadow-xl hover:shadow-red-100"
          />
          <Image
            alt="a"
            src={sponsor7}
            className="cursor-pointer border border border-primary/15 shadow-xl hover:shadow-red-100"
          />
          <Image
            alt="a"
            src={sponsor8}
            className="cursor-pointer border border-primary/15 shadow-xl hover:shadow-red-100"
          />
        </div>
      </div>
    </>
  );
};

export default Sponsors;
