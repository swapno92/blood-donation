import React from "react";
import deafuletUserPhoto from "../../../../../../public/images/profile-circle-icon.png";
import moment from "moment/moment";
import Swal from "sweetalert2";
import { ImageConfigContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import Image from "next/image";
import UseAxiosSecure from "@/components/Hooks/useAxiosSecure";
import UseDoneted from "@/components/Hooks/useDoneted";

const All_Request = ({ request, index, reqRefetch }) => {
  const [all_Doneted, refetch] = UseDoneted();
  const processingtDate = moment().format("MM-DD-YYYY");
  const axiosSecure = UseAxiosSecure();
  console.log(request);
  const { _id, img, name, bloodGroup, quantity, status, location } = request;

  const handleAcceptReq = () => {
    const reqInfo = {
      userId: _id,
      img,
      name,
      bloodGroup,
      quantity,
      status: "processing",
      location,
      processingtDate,
    };
    console.log(reqInfo);

    axiosSecure.post("/doneted", reqInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Team addeed successfully",
          showConfirmButton: false,
          timer: 1000,
        });
      }
      refetch();
      reqRefetch();
    });
  };

  return (
    <div className="">
      <table className="w-full py-3">
        <thead className="text-xs text-gray-700 uppercase bg-red-200  ">
          <tr className="text-center ">
            <th scope="col" className="p-4 text-md font-bold">
              No
            </th>
            <th scope="col" className="px-6 py-3 font-bold">
              Image
            </th>
            <th scope="col" className="px-6 py-3 font-bold">
              Name
            </th>
            <th scope="col" className="px-6 py-3 font-bold">
              Blood
            </th>
            <th scope="col" className="px-6 py-3 font-bold">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3 font-bold">
              Location
            </th>
            <th scope="col" className="px-6 py-3 font-bold">
              Status
            </th>
            <th scope="col" className="px-6 py-3 font-bold">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-gray-100 even:bg-white text-center   ">
            <td className="w-1/12 py-2 text-center ">{index + 1}</td>
            <td className="px-4 py-4 font-medium  text-gray-900 whitespace-nowrap ">
              <Image
                className="w-12 h-12 mx-auto object-cover rounded-full"
                src={img ? img : deafuletUserPhoto}
                alt="user photo"
                width={1000}
                height={1000}
              />
            </td>
            <td> {name}</td>
            <td> {bloodGroup}</td>
            <td> {quantity}</td>
            <td> {location}</td>
            <td> {status}</td>
            <td className="flex gap-3 items-center justify-center.">
              {status === "pending" ? (
                <button
                  onClick={handleAcceptReq}
                  className="btn btn-primary btn-sm"
                >
                  Accept
                </button>
              ) : (
                <button disabled={true} className="btn btn-primary btn-sm">
                  Accept
                </button>
              )}
              <button className="btn btn-secondary btn-sm">Reject</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default All_Request;
