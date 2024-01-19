import React from "react";
import logo from "../../../public/logo.png";
import Image from "next/image";
import Newsletter from "./Newsletter";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube  } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <Newsletter/>
      <footer class="bg-[#e9e9e9] ">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between py-10">
            <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                <Image src={logo} class="" alt="FlowBite Logo" />
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                  Resources
                </h2>
                <ul class="text-gray-500 md:space-y-3 space-y-1">
                  <li class="">
                    <a href="https://flowbite.com/" class="hover:underline">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Community
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                  Follow Us On
                </h2>
                <ul class="text-gray-500 md:space-y-3 space-y-1">
                  <li class="">
                    <a
                      href="#"
                      class="hover:underline "
                    >
                      Facebook
                    </a>
                  </li>
                  <li class="">
                    <a
                      href="#"
                      class="hover:underline "
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      class="hover:underline"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                  Legal
                </h2>
                <ul class="text-gray-500 ">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto " />
          <div class="sm:flex sm:items-center sm:justify-between border-t-[1px] border-gray-300 pt-3">
            <span class="text-sm text-gray-600 sm:text-center ">
              © 2023{" "}
              
              . All Right Binary_Averages
            </span>
            <div class="flex mt-4 sm:justify-center gap-3 sm:mt-0">
              <a href="#" class="text-gray-600 hover:text-primary">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" class="text-gray-600 hover:text-primary">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" class="text-gray-600 hover:text-primary">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" class="text-gray-600 hover:text-primary">
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
