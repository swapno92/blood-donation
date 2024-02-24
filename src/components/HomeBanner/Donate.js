"use client";
import { FaArrowRightToBracket } from "react-icons/fa6";
import DonatRequest from "../Modal/DonatRequest";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";


const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Donate = () => {
  return (
    <div className="container max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 my-20 px-5 md:px-10 lg:px-0">
        <Link href={'https://donate.stripe.com/test_cN2eXB6YHbbD784bIJ'}>
          <div className="bg-primary md:p-10 p-5 mb-5 lg:mb-0">
            <h2 className="md:text-4xl text-3xl text-white font-semibold">
              Donation Fund
            </h2>
            <div className="flex align-top md:gap-16 gap-5">
              <p className="md:text-xl text-base text-white py-4">
                Help our fund for better contribution. If you would like to send use 10$ for our work.Thank you
              </p>
              <FaArrowRightToBracket className="text-7xl cursor-pointer text-white m-2" />
            </div>
          </div>
        </Link>
        <div
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="bg-black md:p-10 p-5 mb-5 lg:mb-0 text-left ">
          <h2 className="md:text-4xl text-3xl text-white font-semibold">
            Donate Now
          </h2>
          <div className="flex align-top md:gap-16 gap-5">
            <p className="md:text-xl text-base text-white py-4">
              Nor again is there anyone who loves or pursues or desires to
              obtain pain of itself, because it is pain,
            </p>
            <FaArrowRightToBracket className="text-7xl cursor-pointer text-white m-2" />
          </div>
        </div>
        <DonatRequest></DonatRequest>
      </div>
    </div>
  );
};

export default Donate;
