"use client";
import { FaArrowRightToBracket } from "react-icons/fa6";
import DonatRequest from "../Modal/DonatRequest";
import { loadStripe } from "@stripe/stripe-js";
import { axiosPublic } from "../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";


const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Donate = () => {
  // const userPhoto = user?.photoURL;
  // const userEmail = user?.email;
  const [amount, setAmount] = useState(10);
  const makePayment = async () => {

    const handleDonate = async () => {
      const stripe = await stripePromise;
      const response = await fetch('http://localhost:5000/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });
      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    }
  }
  return (
    <div className="container max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 my-20 px-5 md:px-10 lg:px-0">

        <div onClick={makePayment}   className="bg-primary md:p-10 p-5 mb-5 lg:mb-0">
          <Link href={'https://donate.stripe.com/test_cN2eXB6YHbbD784bIJ'}>
            <h2 className="md:text-4xl text-3xl text-white font-semibold">
              Donation Fund
            </h2>
          </Link>
          <div className="flex align-top md:gap-16 gap-5">
            <p className="md:text-xl text-base text-white py-4">
              Empowering communities through life-saving blood donation initiatives. Help our funding as much you can.
            </p>
            <a href="/payment">
            <FaArrowRightToBracket className="text-7xl cursor-pointer text-white m-2" />
            </a>
          </div>
        </div>


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
