"use client";
import UseRequest from "@/components/Hooks/UseRequest";
import deafuletUserPhoto from "../../../../../../public/images/profile-circle-icon.png";
import Image from "next/image";
import Swal from "sweetalert2";
import All_Request from "./All_Request";

const DonnerRequest = () => {
  const [allRequest, refetch] = UseRequest();
  return (
    <div className="">
      <div className="text-center font-bold text-3xl my-10">Total Request - {allRequest?.length}</div>
      {allRequest?.map((request ,index) => <All_Request key={request?._id} request={request}  index={index}/>)}
    </div>
  );
};

export default DonnerRequest;
