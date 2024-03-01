"use client";
import UseRequest from "@/components/Hooks/UseRequest";
import deafuletUserPhoto from "../../../../../../public/images/profile-circle-icon.png";
import Image from "next/image";
import UseAxiosSecure from "@/components/Hooks/useAxiosSecure";
import moment from "moment";
import Swal from "sweetalert2";

const DonnerRequest = () => {
  const [request] = UseRequest();

  const axiosSecure = UseAxiosSecure();
  const processingtDate = moment().format("MM-DD-YYYY");
  // const [
  //   _id,
  //   name,
  //   email,
  //   img,

  //   date,
  //   contactNumber,
  //   location,
  //   himoglobing,
  //   patient,
  //   bloodGroup,
  //   quantity,
  //   gender,
  //   currentDate,
  //   status,
  // ] = request;

  // const allData = {
  //   requestId: _id,
  //   name,
  //   email,
  //   img,
  //   date,
  //   contactNumber,
  //   location,
  //   himoglobing,
  //   patient,
  //   bloodGroup,
  //   quantity,
  //   gender,
  //   status: "processing"
  // }

  const handleAcceptReq = (request) => {
    axiosSecure
      .post("/doneted", { request, processingtDate }) 
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Request Now Procesing ",
            showConfirmButton: false,
            timer: 1000,
          });
        }
        refetch();
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(request);
  };

  return (
    <div className="">
      <div className="m-6 ">
        <h1 className="text-2xl font-bold text-center mb-4 mt-4">
          Donner Request{request.length}
        </h1>
        <table className="table max-w-screen-lg mx-auto ">
          <thead className="text-lg bg-primary text-white text-center">
            <tr>
              <th>No</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Blood</th>
              <th>Quantity</th>
              <th>Location </th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {request?.map((request, index) => (
              <tr
                key={request._id}
                className="text-black font-semibold text-center"
              >
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        src={request?.img ? request?.img : deafuletUserPhoto}
                        alt="Avatar Tailwind CSS Component"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </div>
                </td>
                <td>{request?.name}</td>
                <td>{request?.bloodGroup}</td>
                <td>{request?.quantity}</td>
                <td>{request?.location}</td>
                <td>Pending</td>
                <td className="flex gap-3">
                  {request?.status === "pending" ? (
                    <button
                      onClick={() => handleAcceptReq(request)}
                      className="btn btn-primary btn-sm"
                    >
                      Accept
                    </button>
                  ) : (
                    <button disabled={true} className="btn btn-primary btn-sm">
                      Accept
                    </button>
                  )}
                  <button className="btn btn-secondary btn-sm">Rejected</button>
                </td>{" "}
                ``
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonnerRequest;
