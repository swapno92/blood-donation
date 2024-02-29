"use-client"
import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import All_Request from "../Hooks/All_Request";
import { all } from "axios";



const Notficaiton = () => {
  const [all_request, re] = All_Request()
  console.log(all_request);
  const [notification, setNotification] = useState();
  return (
    <button
      type="button"
      className="relative inline-flex items-center p-3 text-sm font-medium text-center "
    >
      <div className="flex items-center">
        <IoIosNotificationsOutline className="text-4xl mr-3" />
        <h2 className=" bg-red-700 relative text-[10px]   border  bottom-3 -left-8 rounded-full  font-semi text-white text-center  px-[5px] py-[1px]  ">
         {all_request?.length}
        </h2>
      </div>
    </button>
  );
};

export default Notficaiton;
